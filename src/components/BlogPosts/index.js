import React from 'react';
import { getPosts } from '../../api/blog';
import Pagination from '../Pagination/index';
import BlogPost from '../BlogPostSimple/index';
import { Row, Col } from 'react-bootstrap';
import Loading from '../Loading/index';
class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      pagination: null,
      currentPage: 1
    }
  }

  async getBlogPosts() {
    try {
      const response =  await getPosts(5, this.state.currentPage);
      console.log(response);
      this.setState({
        error: null,
        isLoaded: true,
        posts: response.posts,
        pagination: response.meta.pagination
      });
    } catch (error) {
      this.setState({
        error: error,
        isLoaded: true
      });
    }
  };

  updateCurrentPage(page){
    this.setState({
      currentPage: page,
      isLoaded: false
    }, ()=>{
      this.getBlogPosts();
    });
  }

  componentDidMount() {
    this.getBlogPosts();
  }

  render() {
    if (this.state.error) {
      return (
        <div>Error: {this.state.error.message}</div>
      );
    } else if (!this.state.isLoaded) {
      return (
        <Row>
          <Col className="text-center">
            <Loading />
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          {this.state.posts.map(post => (
            <Col key={post.id} xs={12} sm={12} md={12} lg={12} xl={12}>
              <BlogPost post={post}/>
            </Col>
          ))}
          <Col xs={12} sm={12} md={4} lg={4} xl={4} />
          <Col className="text-center" xs={12} sm={12} md={4} lg={4} xl={4} >
            <Pagination 
              pg={this.state.pagination} 
              onNextClick={()=>{
                this.updateCurrentPage(this.state.currentPage + 1);
              }} 
              onPreviousClick={()=>{
                this.updateCurrentPage(this.state.currentPage - 1);
              }} 
              onPageClick={(selectPageNumber) => {
                this.updateCurrentPage(selectPageNumber);
              }}
              isLoading={!this.state.isLoaded}
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} />
        </Row>
      );
    }
  }  
};

export default BlogPosts;