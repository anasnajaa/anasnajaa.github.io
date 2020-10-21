import React, { useEffect, useState } from "react";
import { getArchivePosts } from "../../api/blog";
import { Row, Col, Table, Form } from "react-bootstrap";
import Loading from "../Loading/index";
import { v4 } from "uuid";
import { LinkContainer } from "react-router-bootstrap";
import ReactMoment from 'react-moment';
import Moment from 'moment';
import Alert from '../Alert/index';

const BlogPostsArchive = ()=> {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postsElements, setPostsElements] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getBlogPosts = async () => {
    try {
      const response = await getArchivePosts();
      setError(null);
      setPosts([...response.posts]);
      return response.posts;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoaded(true);
    }
  }

  const monthYearElement = (year, month) => {
    return (
        <tr className="bg-secondary text-white" key={v4()}><td colSpan="3">
            <strong>{year}-{month}</strong>
        </td></tr>
    );
  }

  const postElement = ({id, published_at, slug, title}) => {
      return (
        <tr key={id}>
            <td>
            <ReactMoment date={published_at} format="DD" />
            </td>
            <td>
            <LinkContainer className="cursor-pointer" key={v4()} to={`/blog/posts/${slug}`}>
                <span>{title}</span>
            </LinkContainer>
            </td>
        </tr>
      );
  }

  const populatePostsList = () => {
    let currentMonth = null;
    let currentYear = null;
    const elementsList = [];

    posts.forEach((post) => {
      const datePublished = new Moment(post.published_at);
      const postMonth = datePublished.month();
      const postYear = datePublished.year();

      if (post.title.toLowerCase().indexOf(searchText.toLowerCase()) === -1) return;

      if (postMonth !== currentMonth || postYear !== currentYear) {
        currentMonth = postMonth;
        currentYear = postYear;
        elementsList.push(
          monthYearElement(currentYear,  datePublished.format("MMMM"))
        );
      }
      elementsList.push(postElement(post));
    });
    console.log(posts);
    setPostsElements([...elementsList]);
  }

  useEffect(()=>{
    const load = async () =>{
      await getBlogPosts();
      populatePostsList();
    }
    load();
  }, []);

  useEffect(()=>{
    //populatePostsList();
  }, [searchText]);

  if (error) {
    return (
      <Row>
        <Col className="text-center">
          <Alert title="API Error" message={error.message} type="danger" />
        </Col>
      </Row>
    );
  }

  if (!isLoaded) {
    return (
      <Row>
        <Col className="text-center">
          <Loading />
        </Col>
      </Row>
    );
  } 

  return (
    <Row>
      <Col xs={12}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control 
          type="text" 
          placeholder="Filter by Title" 
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          />
        </Form.Group>
        </Form>
      </Col>
      <Col xs={12}>
      <Table striped bordered hover size="sm">
        <tbody>
        {postsElements}
        </tbody>
        </Table>
        </Col>
    </Row>
  );
}

export default BlogPostsArchive;
