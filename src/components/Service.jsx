import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { cards } from "../helper";
import service1 from "../assets/img/svg/service1.svg";
import service2 from "../assets/img/svg/service2.svg";
import service3 from "../assets/img/svg/service3.svg";
import service4 from "../assets/img/svg/service4.svg";

const Service = () => {
  return (
    <div className="bg_brown py-md-5 position-relative overflow-x-hidden">
      <img
        className="position-absolute service1_set"
        src={service1}
        alt="service1"
      />
      <img
        className="position-absolute service1_set2"
        src={service2}
        alt="service2"
      />
      <img
        className="position-absolute service1_set3"
        src={service3}
        alt="service3"
      />
      <img
        className="position-absolute service1_set4"
        src={service4}
        alt="service4"
      />
      <div className="ylow_blur position-absolute yellow_blr_set"></div>
      <div className="ylow_blur2 position-absolute yellow_blr_set2"></div>
      <Container className="custom-container py-5">
        <h1 className="ff_mont fs_lg fw-semibold clr_white text-center position-relative z-1">
          Services
        </h1>
        <p className="ff_mont fs_xsm fw-normal clr_white mx_612 mx-auto text-center position-relative z-1">
          Exceptional services that redefine excellence, exceeding expectations
          every time.
        </p>
        <Row>
          {cards.map((p) => {
            return (
              <Col xl={3} lg={4} md={6} className="mt-4 position-relative z-1">
                <div className="bordr_white shadow_yellow hovr_shadow ps-sm-4 cursr_pointer">
                  <h1 className=" ff_mont fs_sm fw-semibold clr_white mb-0 ps- 2  py-3 text-md-start text-center">
                    {p.head}
                  </h1>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Service;
