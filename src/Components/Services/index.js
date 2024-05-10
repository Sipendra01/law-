import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import CardComponent from "../../Common/CardComponent";
import WhyLeadIndia from "../whyLead";
import Serving from "../Serving";
import GetAdvice from "../GetLegalAdvice";

const AccordionData = [
  {
    id: 1,
    title: "Accordion Item 1",
    content: "Content for Accordion Item 1",
    icon: "bi bi-file-earmark-richtext-fill",
    link:"/"
  },
  {
    id: 2,
    title: "Accordion Item 2",
    content: "Content for Accordion Item 2",
    icon: "bi bi-file-earmark-pdf-fill", 
    link:"/"
  },
  {
    id: 3,
    title: "Accordion Item 2",
    content: "Content for Accordion Item 2",
    icon: "bi bi-file-earmark-pdf-fill", // Icon for Accordion Item 2
    link:"/"
  },
  {
    id: 4,
    title: "Accordion Item 2",
    content: "Content for Accordion Item 2",
    icon: "bi bi-file-earmark-pdf-fill", // Icon for Accordion Item 2
    link:"/"
  },
];

const OurServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <GetAdvice />
      <section className="">
        <Container>
          <Row className="mb-4">
            <Col md={12} className="text-center">
              <h2 className="mb-0 h2">Lead India Services</h2>
              <a className="view-text h6">
                View All
                <i class="bi bi-arrow-right"></i>
              </a>
            </Col>
          </Row>
          <Col md={12}>
            <Row>
              <Slider {...settings} className="slide-item">
                {AccordionData?.map((data, index) => {
                  return (
                    <Col md={3} key={index}>
                      <CardComponent
                        imgSrc={data?.icon}
                        title={data?.title}
                        content={data?.content}
                      />
                    </Col>
                  );
                })}
              </Slider>
            </Row>
          </Col>
        </Container>
      </section>
      <WhyLeadIndia />
      <Serving />
    </>
  );
};

export default OurServices;
