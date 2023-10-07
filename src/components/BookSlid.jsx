import React from "react";
import { Col, Row } from "react-bootstrap";
import book1 from "../assets/img/png/book1.png";
import book2 from "../assets/img/png/book2.png";
import book3 from "../assets/img/png/book3.png";
import Slider from "react-slick";

const BookSlid = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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
    <div className="cream_light_crm pb-5 pt-lg-5 pt-0 px-3" id="bookslide">
      <Slider {...settings} className="py-5">
        <div className="px-2">
          <div>
            <img className="w-100 cursr_pointer " src={book1} alt="book1" />
          </div>
        </div>
        <div className="px-2">
          <div>
            <img className="w-100 cursr_pointer" src={book2} alt="book1" />
          </div>
        </div>
        <div className="px-2">
          <div>
            <img className="w-100 cursr_pointer" src={book3} alt="book1" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BookSlid;
