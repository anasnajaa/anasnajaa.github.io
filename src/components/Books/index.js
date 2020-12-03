import React, { useEffect, useState } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { getBooks } from "../../api/main";
import Loading from "../Loading/index";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const populateTags = async () => {
    try {
      const response = await getBooks();
      setBooks(response.books);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    populateTags();
  }, []);

  if (error) {

    return (
      <Row>
        <Col>Error: {error.message}</Col>
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
        <h3>Books</h3>
        <p>Below are some of the books that I enjoyed reading sorted by latest read.</p>
        </Col>
      <Col xs="12">
        <ListGroup>
          {books.map(({ _id, title, thumbnail_url, date_created }) => {
            return (
              <a
                key={_id}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/search?q=${title}`}
              >
                <ListGroup.Item>
                  {title}&nbsp;&nbsp;
                </ListGroup.Item>
              </a>
            );
          })}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Books;
