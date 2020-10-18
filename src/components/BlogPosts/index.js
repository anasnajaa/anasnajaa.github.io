import React, { useEffect, useState } from "react";
import { getPosts } from "../../api/blog";
import Pagination from "../Pagination/index";
import BlogPost from "../BlogPostSimple/index";
import { Row, Col } from "react-bootstrap";
import Loading from "../Loading/index";

const BlogPosts = ({topic}) => {
  const [topicTitle, setTopicTitle] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getBlogPosts = async (page, topic) => {
    try {
      const response = await getPosts(5, page, topic);
      setError(null);
      setPosts(response.posts);
      setPagination(response.meta.pagination);

      if(topic){
        const title = response.posts[0].tags.filter(x=>x.slug===topic)[0].name;
        setTopicTitle(title);
      }

    } catch (error) {
      setError(error);
    } finally {
      setIsLoaded(true);
    }
  };

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
    setIsLoaded(false);
  };

  useEffect(()=>{
    getBlogPosts(currentPage, topic);
  }, [currentPage, topic]);

  if (error) {
    return (
      <Row>
        <Col className="text-center">
          <div>Error: {error.message}</div>
        </Col>
      </Row>
    );
  } else if (!isLoaded) {
    return (
      <Row>
        {topic &&
        <Col xs={12}>
          <h3><i>{topicTitle}</i></h3>
        </Col>}
        <Col className="text-center">
          <Loading />
        </Col>
      </Row>
    );
  } else {
    return (
      <Row>
        {topic &&
        <Col xs={12}>
          <h3><i>{topicTitle}</i></h3>
        </Col>}
        {posts.map((post) => (
          <Col key={post.id} xs={12} sm={12} md={12} lg={12} xl={12}>
            <BlogPost post={post} />
          </Col>
        ))}
        <Col xs={12} sm={12} md={4} lg={4} xl={4} />
        <Col className="text-center" xs={12} sm={12} md={4} lg={4} xl={4}>
          <Pagination
            pg={pagination}
            onNextClick={() => {
              updateCurrentPage(currentPage + 1);
            }}
            onPreviousClick={() => {
              updateCurrentPage(currentPage - 1);
            }}
            onPageClick={(selectPageNumber) => {
              updateCurrentPage(selectPageNumber);
            }}
            isLoading={!isLoaded}
          />
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} xl={4} />
      </Row>
    );
  }
};

export default BlogPosts;
