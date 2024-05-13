import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AskQuestions = () => {
  const Data = [
    {
      id: 1,
      ques: "Hello, Recently one of my employee has joined our company. A...",
      ans: "Sir, if the employee is not ready for the PF deduction in her salary; she should give it in writt...... ",
      link: "/",
    },
    {
      id: 2,
      ques: "Hello, Recently one of my employee has joined our company. A...",
      ans: "Sir, if the employee is not ready for the PF deduction in her salary; she should give it in writt...... ",
    },
    {
      id: 3,
      ques: "Hello, Recently one of my employee has joined our company. A...",
      ans: "Sir, if the employee is not ready for the PF deduction in her salary; she should give it in writt...... ",
    },
    {
      id: 4,
      ques: "Hello, Recently one of my employee has joined our company. A...",
      ans: "Sir, if the employee is not ready for the PF deduction in her salary; she should give it in writt...... ",
    },
  ];

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
                  <Col md={6}>
                    <div className="card-body h-100 p-3 border bg-light rounded-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="ms-0">
                          <h6 className="mb-2">
                            Q-{" "}
                            <Link
                              href={item?.link}
                              className="linkStyle link-color"
                              passHref
                            >
                              {item?.ques}
                            </Link>
                          </h6>
                          <p className="mb-0">
                            <b>Ans- </b>
                          </p>
                          <p>{item?.ans}</p>
                        </div>
                        <Link href={item?.link} className="ms-2 btn btn-round btn-primary-soft">
                          <i className="bi bi-arrow-right h6"></i>
                        </Link>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AskQuestions;
