import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Table,
  Breadcrumb,
  Form,
  Button,
  Accordion,
  Card,
  Badge,
} from "react-bootstrap";
import { v4 } from "uuid";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { getCovidCasesByCountry } from "../../api/main";
import Loading from "../Loading/index";
import Alert from "../Alert/index";
import filters from "./filters";
import CountriesTds from "./countriesTds";

const getQueryParams = (history) => {
  let params = qs.parse(history.location.search, { ignoreQueryPrefix: true });
  return {
    sort: params.sort ? params.sort : "cases",
  };
};

const CovidCases = ({ history }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([
    //"usa",
    "kuwait",
    "afghanistan",
    "albania",
  ]);
  const [selectedFilters, setSelectedFilters] = useState([...filters]);
  const [currentSort, setCurrentSort] = useState(
    getQueryParams(history).sort || "cases"
  );

  const getCovidCases = async (sort) => {
    try {
      const response = await getCovidCasesByCountry({ sort });
      setError(null);
      setCountries(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoaded(true);
    }
  };

  const updateCurrentSort = (sort) => {
    setCurrentSort(sort);
    setIsLoaded(false);
  };

  useEffect(
    () =>
      history.listen(() => {
        const params = getQueryParams(history);
        updateCurrentSort(params.sort);
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    getCovidCases(currentSort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSort]);

  const BreadCrumbs = () => {
    return (
      <Breadcrumb>
        <LinkContainer to="/">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
        <LinkContainer to="/playground">
          <Breadcrumb.Item>Playground</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>Covid Cases</Breadcrumb.Item>
      </Breadcrumb>
    );
  };

  const handleTagClicked = (e) => {
    const name = e.target.dataset.name;
    const filteredCountries = selectedCountries.filter(
      (x) => x.toLocaleLowerCase() !== name
    );
    setSelectedCountries([...filteredCountries]);
  };

  const handleFilterChanged = (e) => {
    const checked = e.target.checked;
    const key = e.target.id;
    const newFilters = [...selectedFilters];
    const updatedFilter = newFilters.find((x) => x.key === key);
    updatedFilter.isSelected = checked;
    setSelectedFilters(newFilters);
  };

  if (error) {
    return (
      <Row>
        <Col xs={12}>
          <BreadCrumbs />
        </Col>
        <Col className="text-center">
          <Alert title="API Error" message={error.message} type="danger" />
        </Col>
      </Row>
    );
  }

  if (!isLoaded) {
    return (
      <Row>
        <Col xs={12}>
          <BreadCrumbs />
        </Col>
        <Col xs={12}>
          <h3>
            <i>Covid Cases</i>
          </h3>
        </Col>
        <Col className="text-center">
          <Loading />
        </Col>
      </Row>
    );
  }

  return (
    <Row>
      <Col xs={12}>
        <BreadCrumbs />
      </Col>
      <Col xs={12}>
        <h3>
          <i>Covid Cases</i>
        </h3>
      </Col>
      <Col xs={12} className="mb-3">
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Filters
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Add Country to the list</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter country name"
                    />
                  </Form.Group>
                  <hr />
                  <h5>Statistics to compare</h5>
                  <>
                    {selectedFilters.map((filter) => (
                      <Form.Group
                        className="mb-0"
                        controlId={filter.key}
                        key={filter.key}
                      >
                        <Form.Check
                          type="checkbox"
                          defaultChecked={filter.isSelected}
                          label={filter.title}
                          onChange={handleFilterChanged}
                        />
                      </Form.Group>
                    ))}
                  </>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Countries Included
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {selectedCountries.length > 0 &&
                  selectedCountries.map((name) => (
                    <h4
                      className="d-inline cursor-pointer"
                      onClick={handleTagClicked}
                      key={name}
                    >
                      <Badge variant="secondary" data-name={name}>
                        <FontAwesomeIcon icon={faTimes} />
                        &nbsp;
                        {name}
                      </Badge>
                      &nbsp;
                    </h4>
                  ))}
                {selectedCountries.length === 0 && (
                  <h3>No Countries Selected</h3>
                )}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
      <Col>
        <Table>
          <tbody>
            {selectedCountries.length > 0 &&
              selectedFilters.map(
                (filter) =>
                  filter.isSelected && (
                    <tr key={v4()}>
                      <td>{filter.title}</td>
                      <CountriesTds
                        filter={filter}
                        countries={countries}
                        selectedCountries={selectedCountries}
                      />
                    </tr>
                  )
              )}
            {selectedCountries.length === 0 && (
              <tr>
                <td>No Countries Selected</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default withRouter(CovidCases);
