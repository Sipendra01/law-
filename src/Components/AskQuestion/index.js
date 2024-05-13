import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AskQuestions = () => {
  const Data = [{
    id:1,
    title:"",
    
  }]

  return (
    <section>
      <Container>
        <Row className="g-4 align-items-center">
          <Col lg={4}>
            <h2 className="h2 fontweight_500 lh_125">
              Recently Asked Questions
            </h2>
            <Link className="btn btn-lg btn-outline-primary mb-0 mt-4 w-100 fontweight_700">
              Ask a Free Question
              <i className="bi fa-fw bi-arrow-right ms-2"></i>
            </Link>
            <Link className="btn btn-lg btn-outline-dark mb-0 mt-4 w-100 fontweight_700">
              Ask a Free Question
              <i className="bi fa-fw bi-arrow-right ms-2"></i>
            </Link>
          </Col>
          <Col lg={8}>
            <Row className="g-4 align-items-center">
              {Data?.map((item, index) => {
                return (
                  <Col md={6}></Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AskQuestions;
