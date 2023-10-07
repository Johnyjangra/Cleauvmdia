import React from "react";
import { Container } from "react-bootstrap";
import triangle from "../assets/img/png/greentriangle.png";
import wifi from "../assets/img/png/wifi.png";
import kaaju from "../assets/img/png/kaaju.png";

const Webflow = () => {
  return (
    <div className="bg_brown py-md-5 position-relative">
      <Container className=" custom_container py-5">
        <img
          className="position-absolute traiangle_size set_trngl"
          src={triangle}
          alt="triangle"
        />
        <img
          className="position-absolute wifi_size set_wifi"
          src={wifi}
          alt="triangle"
        />
        <img
          className="position-absolute kaaju_size set_kaaju"
          src={kaaju}
          alt="kaaju"
        />
        <div className="text-center">
          <button className=" ff_raleway fs_20 fw-semibold clr_white add_btn px-4 py-2 border-0">
            Add On
          </button>
          <h1 className="ff_mont fs_lg fw-semibold clr_white pt-3 mb-0">
            {" "}
            Webflow development
          </h1>
          <p className=" ff_mont fs_xsm fw-normal clr_white op_09 pt-3">
            Get a better website faster with Webflow development. Requires a
            design subscription.
          </p>
          <h1 className="ff_mont fs_lg fw-semibold clr_yellow pt-3">$999/m</h1>
        </div>
      </Container>
    </div>
  );
};

export default Webflow;
