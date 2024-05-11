import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./myStyle.css";
import banner from "./banner.jpg";
const GetAdvice = () => {
  return (
    <section className="pt-0">
      <div className="bg-Top">
        <Container className="p-0 p-sm-4 h-100vh">
          <Row className="pb-5 p-0 py-4 py-sm-2" style={{ height: "424px" }}>
            <Col md={7} lg={8} className="text-center">
              <h1 className="h1 text-white pt-xl-4">GET LEGAL ADVICE</h1>
              <h5 className="text-white mb-0 mb-sm-0">
                FROM THE BEST LAWYERS IN INDIA
              </h5>
              <div className="flex-wrap align-items-center mt-4 mt-sm-5 pt-2">
                <Button className="btn btn-primary mb-0 mt-1 me-1 fs-13 btn-sm px-3">
                  Talk to Lawyer
                </Button>
                <Button className="btn btn-white mb-0 mt-1 ms-1 fs-13 btn-sm px-3">
                  Ask a Free Question
                </Button>
              </div>
              <div className="flex-wrap align-items-center mt-3 mt-sm-3">
                <Button className="btn btn-white mb-0 py-1 px-4 fs-14">
                  135+ Lawyers Online
                </Button>
              </div>
            </Col>
            <Col md={4} lg={4}>
              <img
                src={banner}
                alt=""
                width={"300px"}
                height={"300px"}
                className="rounded mb-4"
              />
            </Col>
            <Col xs={11} sm={9} className="mx-auto">
              <div className="bg-white shadow rounded-3 p-4">
                <Row className="g-4">
                  <Col xl={9}>
                    <Row className="g-4">
                      <Col md={6}>
                        <div></div>
                      </Col>
                      <Col md={6}></Col>
                    </Row>
                  </Col>
                  <Col xl={3} md={3}>
                    <div className="d-grid pt-2">
                      <Button className="btn btn-lg btn-dark rounded-2 mb-0">
                        Search Lawyers
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Row></Row>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default GetAdvice;
