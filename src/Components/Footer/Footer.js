import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark pt-5 position-relative bottom-0">
      <Container>
        <Row>
          <Col md={3}>
            <h5 className="text-white mb-md-4 mb-2">Find a Lawyer</h5>
            <ul className="footer-menu p-0">
              <li>Lawyers in Delhi</li>
              <li>Lawyers in Ghaziabad</li>
              <li>Lawyers in Gurgaon</li>
              <li>Lawyers in Noida</li>
              <li>Lawyers in Lucknow</li>
              <li>Lawyers in Faridabad</li>
              <li>Lawyers in Kolkata</li>
              <li>Lawyers in Jaipur</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="text-white mb-md-4 mb-2">Legal Service & Others</h5>
            <ul className="footer-menu p-0">
              <li>Court Marriage</li>
              <li>Court Marriage In Delhi</li>
              <li>Court Marriage In Ghaziabad</li>
              <li>Property Registration</li>
              <li>Bail Matters</li>
              <li>Mutual Divorce</li>
              <li>Criminal Trials</li>
              <li>All Legal Advice</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="text-white mb-md-4 mb-2">Links</h5>
            <ul className="footer-menu p-0">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Talk To Lawyer</li>
              <li>Ask a Free Question</li>
              <li>Find a Lawyer</li>
              <li>Give Feedback</li>
              <li>Lawyer Sign In</li>
              <li>User Sign In</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="text-white mb-md-4 mb-2">Contact</h5>
            <ul className="p-0">
              <h6 className="text-white">Head Office Address</h6>
              <li className="text-white list-type">
                304 Kanchanjunga, Barakhamba Road, CP, Delhi-110001F
              </li>
            </ul>
            <ul className="footer-menu p-0">
              <h6 className="text-white">Contact Details</h6>
              <li className="d-flex gap-2">
                <i class="bi bi-telephone"></i>
                8800788535
              </li>
              <li className="d-flex gap-2">
                <i class="bi bi-envelope-at"></i>
                care@leadindia.law
              </li>
              <li>careers@leadindia.law</li>
            </ul>
            <ul className="footer-menu p-0">
              <h6 className="text-white">Opening Hours</h6>
              <li className="d-flex gap-2">
                <i class="bi bi-clock-history"></i>
                9:00 AM - 8:00 PM
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="border-bottom text_gray mb-0 pb-4">
              The information provided here is provided AS IS, subject to Terms
              Of Use & Privacy Policy. It is solely available at your request
              for informational purposes only, should not be interpreted as
              soliciting or advertisement. In cases where the user has any legal
              issues, he/she in all cases must seek independent legal advice.
              The Lead India Logo are registered trademarks. All Rights
              Reserved. 0.0209
            </p>
          </Col>
        </Row>
        <Row className="py-3">
          <Col md={7}>
            <div className="text-white">
              Copyrights ©2024 Lead India Law Pvt. Ltd. All rights reserved.
            </div>
          </Col>
          <Col md={5}>
            <div>
              <ul className="d-flex justify-content-end gap-4 footer-menu mb-0">
                <li>Privacy Policy</li>
                <li>Terms and conditions</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
