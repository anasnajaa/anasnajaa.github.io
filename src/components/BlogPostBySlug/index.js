import React from "react";
import { withRouter } from "react-router";
import { Row, Col } from 'react-bootstrap';
import { getPostBySlug } from '../../api/blog';
import Loading from '../Loading/index';
class BlogPostBySlug extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      post: null
    };
  }

  async getBlogPost(slug) {
    try {
      const response = await getPostBySlug(slug);
      console.log(response);
      this.setState({
        error: null,
        isLoaded: true,
        post: {...response}
      }, ()=>{ return response; });
    } catch (error) {
      this.setState({
        error: error,
        isLoaded: true
      }, ()=>{ return null; });
    }
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    await this.getBlogPost(params.slug);
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
          <Col xs={12} sm={12} md={12} lg={2} xl={2}></Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8}>
            <div dangerouslySetInnerHTML={{__html: this.state.post.html}} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={2} xl={2}></Col>
        </Row>
      );
    }
  }
}

export default withRouter(BlogPostBySlug);