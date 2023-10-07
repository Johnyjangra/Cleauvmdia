import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bookcall1 from "../assets/img/png/bookcall1.png";
import bookcall2 from "../assets/img/png/bookcall2.png";

const BookCall = () => {
  return (
    <div className="cream_background pb-lg-5">
      <Container className=" custom_container pb-5">
        <Row>
          <Col lg={6} className="right_border">
            <div className="text-center ">
              <img className="img_size" src={bookcall1} alt="bookcall1" />
              <h1 className="ff_mont fs_lg fw-semibold clr_black mb-0 pt-3">
                Book a Call
              </h1>
              <p className="ff_mont fs_xsm fw-normal clr_black op_09 pt-3 px-5">
                Learn more about how Cleauv media works and how it can help you.
              </p>
              <button className="ff_mont fs_xsm fw-semibold clr_black book_btn_bordr bg-transparent p_14_32 mt-2 dark_btn_hvr">
                Book a Call
              </button>
            </div>
          </Col>
          <Col lg={6} className="pt-lg-0 pt-4">
            <div className="text-center pt-lg-0 pt-3">
              <img className="img_size" src={bookcall2} alt="bookcall1" />
              <h1 className="ff_mont fs_lg fw-semibold clr_black mb-0 pt-3">
                Refer a friend & earn
              </h1>
              <p className="ff_mont fs_xsm fw-normal clr_black op_09 px-5 pt-3">
                Earn 5% monthly recurring commissions for each referral.
              </p>
              <button className="ff_mont fs_xsm fw-semibold clr_black book_btn_bordr bg-transparent p_14_32 mt-2">
                Join Now
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookCall;
