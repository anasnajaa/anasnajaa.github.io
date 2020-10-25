import React, { useEffect, useState } from "react";
import { Col, Row, Accordion, Card, Button, Jumbotron } from "react-bootstrap";
import Loading from "../Loading/index";
import Alert from "../Alert/index";
import { getPageData } from "../../api/blog";
import { parseServicePage } from '../PagesMapping/index';

const Services = () => {
  
  const [error, setError] = useState(null);
  const [headerCardContent, setHeaderCardContent] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [servicesCards, setServicesCards] = useState([]);

  const ServiceElement = ({card}) => {
    return (
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="outline" eventKey={card.id}>
              {card.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={card.id}>
            <Card.Body>
            <div dangerouslySetInnerHTML={{ __html: card.html }} />
            <hr/>
            <Button className="mr-2" variant="primary">Place a request</Button>
            <Button variant="success">FAQs</Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    )
  }

  const loadPageData = async () => {
    try {
      const response = await getPageData("services-page");
      const pageContent = parseServicePage(response.pages);
      setHeaderCardContent(pageContent.headerCard);
      setServicesCards(pageContent.services);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    loadPageData();
  }, []);

  if (error) {
    return (
      <Row>
        <Col>
          <Alert title={"API Error"} message={error.message} type="danger" />
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
      <Col xs="12">
        <Jumbotron>
          <h1>{headerCardContent.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: headerCardContent.html }} />
        </Jumbotron>
      </Col>
      <Col xs="12">
        <h4>Services</h4>
          <Accordion defaultActiveKey={servicesCards[0].id}>
            {servicesCards.map((card) => {
              return <ServiceElement key={card.id} card={card} />
            })}
          </Accordion>
      </Col>
    </Row>
  );
};

export default Services;