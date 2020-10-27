import React, { useEffect, useState } from "react";
import { Col, Row, Accordion, Card, Button, Jumbotron, Spinner } from "react-bootstrap";
import Loading from "../Loading/index";
import Alert from "../Alert/index";
import { getPagesByInternalTag, getPageBySlug } from "../../api/blog";
import { parseServicePage } from '../PagesMapping/index';
import { SimpleModal } from '../Modal/index';

const Services = () => {
  
  const [error, setError] = useState(null);
  const [headerCardContent, setHeaderCardContent] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [servicesCards, setServicesCards] = useState([]);

  const [isFaqLoaded, setIsFaqLoaded] = useState(true);
  const [showFaqModal, setShowFaqModal] = useState(false);
  const [faqBody, setFaqBody] = useState(null);
  const [faqTitle, setFaqTitle] = useState(null);

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
            <Button 
            variant="success"
            disabled={!isFaqLoaded}
            onClick={()=>{loadServicesFaqs()}}>{isFaqLoaded ? 'FAQs' : 
            <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="mr-2"
            />
            Loading...
            </>
            
            }</Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    )
  }

  const loadServicesFaqs = async () => {
    try {
      setIsFaqLoaded(false);
      const response = await getPageBySlug("services-faqs");
      setFaqBody(response.html);
      setFaqTitle(response.title);
    } catch (error) {
      setFaqTitle("Error");
      setFaqBody(error.message);
    } finally {
      setIsFaqLoaded(true);
      setShowFaqModal(true);
    }
  };

  const loadPageData = async () => {
    try {
      const response = await getPagesByInternalTag("services-page");
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
      <SimpleModal 
      title={faqTitle} 
      body={faqBody} 
      isHtml
      show={showFaqModal} 
      onClose={()=>{setShowFaqModal(false)}} 
      />
      <Col xs="12">
        <Jumbotron>
          <h1>{headerCardContent.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: headerCardContent.html }} />
        </Jumbotron>
      </Col>
      <Col xs="12">
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
