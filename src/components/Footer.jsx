import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "./Icon";
import twit from "../assets/img/svg/twit.svg";
import fb from "../assets/img/svg/fb.svg";
import insta from "../assets/img/svg/insta.svg";

const Footer = () => {
  return (
    <div className="bg_brown py-lg-5 pt-5 pb-4 ">
      <Container className=" custom_container">
        <Row>
          <Col lg={6}>
            <div>
              {" "}
              <Logo />
              <p className=" ff_mont fs_xsm fw-normal clr_white op_07 mx_400 pt-3 mb-0">
                Ut ut at mus facilisi semper at suscipit massa purus. Varius sed
                sollicitudin id aliquam hac tortor maecenas purus semper.
              </p>
              <div className="pt-4">
                <img
                  className="scale_hovr cursr_pointer"
                  src={twit}
                  alt="twit"
                />
                <img
                  className="ms-3 scale_hovr cursr_pointer"
                  src={fb}
                  alt="fb"
                />
                <img
                  className="ms-3 scale_hovr cursr_pointer"
                  src={insta}
                  alt="insta"
                />
              </div>
            </div>
          </Col>
          <Col lg={6} className="pt-lg-0 pt-4">
            <Row>
              <Col md={4} xs={6}>
                <div>
                  <p className=" ff_mont fs_xsm fw-normal clr_white mb-0">
                    Quick Links
                  </p>
                  <ul className="ps-0 mb-0 pt-2">
                    <li>
                      <a
                        className=" ff_mont fs_xsm fw-normal clr_white op_07 hovr_clr_white"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="pt-3">
                      <a
                        className=" ff_mont fs_xsm fw-normal clr_white op_07  hovr_clr_white"
                        href="#"
                      >
                        About
                      </a>
                    </li>
                    <li className="pt-3">
                      <a
                        className=" ff_mont fs_xsm fw-normal clr_white op_07 hovr_clr_white"
                        href="#"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="pt-3">
                      <a
                        className=" ff_mont fs_xsm fw-normal clr_white op_07 hovr_clr_white"
                        href="#"
                      >
                        Service
                      </a>
                    </li>
                    <li className="pt-3">
                      <a
                        className=" ff_mont fs_xsm fw-normal clr_white op_07 hovr_clr_white"
                        href="#"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={6} className="">
                <div>
                  <p className=" ff_mont fs_xsm fw-normal clr_white mb-0">
                    Company
                  </p>
                  <ul className="ps-0 mb-0 pt-2">
                    <li>
                      <a
                        className=" ff_mont fs_xsm fw-normal clr_white op_07 hovr_clr_white"
                        href="#"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="pt-3">
                      <a
                        className=" ff_mont fs_xsm fw-normal clr_white op_07 hovr_clr_white"
                        href="#"
                      >
                        Security
                      </a>
                    </li>
                    <li className="pt-3">
                      <a
                        className=" ff_mont fs_xsm fw-normal clr_white op_07"
                        href="#"
                      >
                        legal
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={8} className="pt-lg-0 pt-4">
                <div>
                  <p className=" ff_mont fs_xsm fw-normal clr_white mb-0">
                    Contact us
                  </p>
                  <ul className="ps-0 mb-0 pt-3">
                    <li className="">
                      <a
                        className=" ff_mont fs_xsm fw-normal clr_white op_07 hovr_clr_white"
                        href="#"
                      >
                        info@cleauv media.
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
