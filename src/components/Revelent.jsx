import React from "react";
import Slider from "react-slick";
import revelent from "../assets/img/png/revelentimg1.png";
import revelen2 from "../assets/img/png/revelent2.png";
import revelent3 from "../assets/img/png/revelent3.png";
import bluedots from "../assets//img/svg/greenvec.svg";
import halftringl from "../assets//img/png/halftringl.png";
import { Col, Container, Row } from "react-bootstrap";

const Revelent = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "30%",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="bg_lightpink py-5  position-relative" id="revelent">
      <img
        className=" position-absolute blue_vec_set w_100 w_50"
        src={bluedots}
        alt="greenvector"
      />
      <img
        className=" position-absolute half_vec_set w_100 w_50"
        src={halftringl}
        alt="greenvector"
      />
      <h1 className="ff_mont fs_lg fw-semibold clr_black text-center pt-lg-5">
        Relevant Works
      </h1>
      <p className=" ff_mont fs_xsm fw-normal clr_black op_09 mx_679 mx-auto text-center">
        Our team has successfully collaborated with a diverse range of clients
        across various industries, providing innovative solutions that address
        their unique challenges.
      </p>
      <Slider {...settings} className="py-5 d-lg-block d-none">
        <img className="w-100 cursr_pointer" src={revelen2} alt="book1" />

        <img className="w-100 cursr_pointer" src={revelent} alt="book1" />

        <img className="w-100 cursr_pointer" src={revelent3} alt="book1" />
      </Slider>
      <div className="text-center pb-lg-5">
        <button className=" ff_mont fs_xsm fw-semibold clr_black book_btn py-3 px-4">
          Book a Calls
        </button>
      </div>
      <Container className="d-lg-none d-block pt-4">
        <Row className="justify-content-center ">
          <Col sm={6}>
            <div>
              <img className="w-100 cursr_pointer" src={revelent} alt="book1" />
            </div>
          </Col>
          <Col sm={6} className="pt-sm-0 pt-4">
            <div>
              <img className="w-100 cursr_pointer" src={revelen2} alt="book1" />
            </div>
          </Col>
          <Col sm={6} className="pt-4">
            <div>
              <img
                className="w-100 cursr_pointer"
                src={revelent3}
                alt="book1"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Revelent;
