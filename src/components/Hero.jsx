import React from "react";
import NavBar from "./NavBar";
import yellowblur from "../assets/img/png/yellowblur.png";
import small1 from "../assets/img/png/small1.png";
import small2 from "../assets/img/png/small2.png";
import small3 from "../assets/img/png/small3.png";
import small4 from "../assets/img/png/small4.svg";
import bluedotted from "../assets/img/png/bluedotted.png";
import longblack from "../assets/img/png/longblack.png";
import longyellow from "../assets/img/png/longyellow.png";
import pyrmid from "../assets/img/png/pyrmid.png";

const Hero = () => {
  return (
    <div className="bg_brown position-relative overflow-hidden">
      <NavBar />
      <img
        className="position-absolute blue_set_dot"
        src={bluedotted}
        alt="bluedotted"
      />
      <img
        className="position-absolute  redlong"
        src={longblack}
        alt="bluedotted"
      />
      <img
        className="position-absolute  yellowlong"
        src={longyellow}
        alt="yellowlong"
      />
      <img className="position-absolute  pyrmid" src={pyrmid} alt="pyrmid" />
      <div className="custom-container container position-relative py-4">
        <img
          className="position-absolute w-100 rotate"
          src={yellowblur}
          alt="yellowblur"
        />
        <div className="container custom_container py-5">
          <img
            className="position-absolute z-2 small1_set"
            src={small1}
            alt="small1"
          />
          <img
            className="position-absolute z-2 small2_set"
            src={small2}
            alt="small1"
          />
          <img
            className="position-absolute z-2 small3_set"
            src={small3}
            alt="small1"
          />
          <img
            className="position-absolute z-2 small4_set"
            src={small4}
            alt="small1"
          />
          <div className="py-5 my-5 position-relative z-1">
            <h1 className="ff_mont fs_xxl fw-semibold clr_white mx_802 text-center mx-auto mb-0 pt-4">
              Our Agency Brings Your Vision to Life
            </h1>
            <p className="ff_mont fs_xsm fw-normal clr_white op_09 mx_730 text-center mx-auto pt-3 md-0">
              At Cleauv Media, we are all about creativity. Our team of experts
              specializes in delivering innovative solutions that capture the
              essence of your brand and bring it to life in new and exciting
              ways.
            </p>
            <div className="text-center py-4">
              <button className="bg_yllow border-0 ff_mont fs_xsm fw-semibold clr_white p_16_30 mt-3 position-relative z-1">
                Contact Us{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
