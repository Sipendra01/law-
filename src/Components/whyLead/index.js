import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";

const WhyLeadIndia = () => {
  return (
    <section className="bg-light">
      <Container>
        <Row className="mb-4">
          <Col md={12}>
            <div className="d-flex justify-content-center align-items-center">
              <h2 className="mb-0 h2">Why Lead India?</h2>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6}>
            <div className="d-flex justify-content-center bg-body shadow h-100 rounded-4 p-4">
              <div>
                <i className={`bi bi-headset icon-style `}></i>
              </div>
              <div className="ms-3">
                <h5 className="mb-2">LEGAL ADVICE ON CALL</h5>
                <p className="mb-0">
                  Lead India provides legitimate advice on call from the best
                  lawyers in India. The lawyers have years of experience in
                  handling cases of respective domains. A legal advice will help
                  you understand your case in detail, figure out what could be
                  the tenure and fees of the case and more importantly how can a
                  legal action be taken for the best possible outcome.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center bg-body shadow h-100 rounded-4 p-4">
              <div>
                <i className="bi bi-journal-check icon-style"></i>
              </div>
              <div className="ms-3">
                <h5 className="mb-2">Best Case Strategy</h5>
                <p className="mb-0">
                  The expert advocates on Lead India will support in preparing
                  the best strategy for your case to deliver you favorable
                  outcomes. With the assistance and guidance from the advocates,
                  you need not worry about the documentation process and other
                  paperwork relating to your case.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center bg-body shadow h-100 rounded-4 p-4">
              <div>
                <i className="bi bi-headset icon-style"></i>
              </div>
              <div className="ms-3">
                <h5 className="mb-2">Best Lawyer Support</h5>
                <p className="mb-0">
                  You can find and hire the best lawyers on Lead India for
                  supporting your case. Lead India provides a wide range of
                  proficient lawyers and legal advisors who will support you in
                  the documentation and other paperwork related to your case.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center bg-body shadow h-100 rounded-4 p-4">
              <div>
                <i className="bi bi-clock-history icon-style"></i>
              </div>
              <div className="ms-3">
                <h5 className="mb-2">Track Your Case Progress</h5>
                <p className="mb-0">
                  Lead India also provides the service of tracking the progress
                  of your case where the lawyers will help you keep track of
                  your case and assist you in the filing of your notice,
                  application, or case.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center bg-body shadow h-100 rounded-4 p-4">
              <div>
                <i className="bi bi-globe2 icon-style"></i>
              </div>
              <div className="ms-3">
                <h5 className="mb-2">Track Your Case Online</h5>
                <p className="mb-0">
                  Lead India provides you a unique service of tracking your case
                  online with a single click, where you can track the status of
                  the case, payment, registration, or application. You can also
                  track any information concerning the status of your case on
                  Lead India.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center bg-body shadow h-100 rounded-4 p-4">
              <div>
                <i className="bi bi-info-circle icon-style"></i>
              </div>
              <div className="ms-3">
                <h5 className="mb-2">Help & Support</h5>
                <p className="mb-0">
                  You can choose and hire the best services from the top-rated
                  lawyers on Lead India at affordable fees which will reduce
                  your cost of cases as well as your stress in dealing with
                  legal issues.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyLeadIndia;
