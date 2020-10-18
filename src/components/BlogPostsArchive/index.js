import React from "react";
import { getArchivePosts } from "../../api/blog";
import { Row, Col, Table, Form } from "react-bootstrap";
import Loading from "../Loading/index";
import { v4 } from "uuid";
import { LinkContainer } from "react-router-bootstrap";
import ReactMoment from 'react-moment';
import Moment from 'moment';

class BlogPostsArchive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      filteredPosts: [],
      postsElements: [],
      searchText: "",
    };
  }

  async getBlogPosts() {
    try {
      const response = await getArchivePosts();
      this.setState({
        error: null,
        isLoaded: true,
        posts: [...response.posts],
        filteredPosts: [...response.posts]
      }, ()=>{ return response.posts; });
    } catch (error) {
      this.setState({
        error: error,
        isLoaded: true
      }, ()=>{ return []; });
    }
  }

  monthYearElement(year, month) {
    return (
        <tr className="bg-secondary text-white" key={v4()}><td colSpan="3">
            <strong>{year}-{month}</strong>
        </td></tr>
    );
  }

  postElement({id, published_at, slug, title}){
      return (
        <tr key={id}>
            <td>
            <ReactMoment date={published_at} format="DD" />
            </td>
            <td>
            <LinkContainer key={v4()} to={`/blog/posts/${slug}`}>
                <a href={`/blog/posts/${slug}`}>{title}</a>
            </LinkContainer>
            </td>
        </tr>
      );
  }

  populatePostsList() {
    let currentMonth = null;
    let currentYear = null;
    const elementsList = [];

    this.state.posts.forEach((post) => {
      const datePublished = new Moment(post.published_at);
      const postMonth = datePublished.month();
      const postYear = datePublished.year();

      if (post.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) === -1) return;

      if (postMonth !== currentMonth || postYear !== currentYear) {
        currentMonth = postMonth;
        currentYear = postYear;
        elementsList.push(
          this.monthYearElement(currentYear,  datePublished.format("MMMM"))
        );
      }
      elementsList.push(this.postElement(post));
    });

    this.setState({
      postsElements: [...elementsList],
    });
  }

  async componentDidMount() {
    await this.getBlogPosts();
    this.populatePostsList();
  }

  render() {
    if (this.state.error) {
      return (
        <Row>
          <Col className="text-center">
            <div>Error: {this.state.error.message}</div>
          </Col>
        </Row>
      );
    } else if (!this.state.isLoaded) {
      return (
        <Row>
          <Col className="text-center">
            <Loading />
          </Col>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col xs={12}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control 
              type="text" 
              placeholder="Filter by Title" 
              value={this.state.searchText}
              onChange={(e)=>{
                this.setState({
                  searchText: e.target.value
                }, ()=>{
                  this.populatePostsList();
                });
              }}
              />
            </Form.Group>
            </Form>
          </Col>
          <Col xs={12}>
          <Table striped bordered hover size="sm">
            <tbody>
            {this.state.postsElements}
            </tbody>
            </Table>
            </Col>
        </Row>
      );
    }
  }
}

export default BlogPostsArchive;
