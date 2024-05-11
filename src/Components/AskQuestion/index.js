import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AskQuestions = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={4}>
            <h2>Recently Asked Questions</h2>
          </Col>
          <Col md={8}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default AskQuestions;
