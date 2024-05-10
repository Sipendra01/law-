import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../whyLead/styles.css";

const Serving = () => {
  return (
    <section className="pt-4 pt-sm-5">
      <Container>
        <Row className="mb-4">
          <Col md={12}>
            <div className="d-flex justify-content-center align-items-center">
              <h2 className="h2">Serving Thousands of Indians Everyday</h2>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6}>
            <div class="bg-light d-flex rounded-4 h-100 p-4 border">
              <div className="text-center">
                <h6>MORE THAN 4,500 VERIFIED ASSOCIATES</h6>
                <p className="mb-0 px-5">
                  Our experienced & well-qualified associates will handle your
                  problems efficiently
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div class="bg-light d-flex rounded-4 h-100 p-4 border">
              <div className="text-center">
                <h6>MORE THAN 15,000 SATISFIED CLIENTS</h6>
                <p className="mb-0 px-5">
                  We have helped more than 15,000 people with our best &
                  transparent services
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div class="bg-light d-flex rounded-4 h-100 p-4 border">
              <div className="text-center">
                <h6>MORE THAN 1,40,000 MONTHLY VISITORS</h6>
                <p className="mb-0 px-5">
                  More than 1,40,000 requests every week- Over 1.4 lakh people
                  visit...
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Serving;
