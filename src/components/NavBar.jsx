import React, { useState } from "react";
import Logo from "./Icon";
import MediaLogo from "./icon/MediaLogo";
import navlogo from "../assets/img/png/logo.png";

const NavBar = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }

  return (
    <nav className="bg_blur py-4">
      <div className="container custom_container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="w_250 w_165">
            <img className="w-100 cursr_pointer" src={navlogo} alt="navlogo" />
          </div>
          <div>
            <ul
              className={
                first
                  ? "top_m_100  ps-0 mb-0 d-flex align-items-center flex-lg-row flex-column w-100 media_view justify-content-lg-start  justify-content-center"
                  : "top-0  ps-0 mb-0 d-flex align-items-center flex-lg-row flex-column w-100 media_view start-0 top-0 justify-content-lg-start  justify-content-center"
              }
            >
              <div className="d-lg-none d-block">
                <Logo className="cursr_pointer" />
              </div>
              <div
                className="position-absolute cross_set d-lg-none d-block"
                onClick={() => {
                  setfirst(true);
                }}
              >
                <MediaLogo />
              </div>

              <li
                className="mt-lg-0 mt-5 pt-lg-0 pt-5 pb-lg-0 pb-4 hovr_line"
                onClick={() => {
                  setfirst(true);
                }}
              >
                <a className=" ff_mont fs_xsm fw-normal clr_white " href="#">
                  Home
                </a>
              </li>
              <div className="d-lg-none d-block undrline mb-4"></div>
              <li
                className="ms_xl_41 ms_lg_30  hovr_line"
                onClick={() => {
                  setfirst(true);
                }}
              >
                <a className=" ff_mont fs_xsm fw-normal clr_white " href="#">
                  About
                </a>
              </li>
              <div className="d-lg-none d-block undrline my-4"></div>
              <li
                className="ms_xl_41 ms_lg_30 hovr_line"
                onClick={() => {
                  setfirst(true);
                }}
              >
                <a className=" ff_mont fs_xsm fw-normal clr_white " href="#">
                  Services
                </a>
              </li>
              <div className="d-lg-none d-block undrline my-4"></div>
              <li
                className="ms_xl_41 ms_lg_30 hovr_line"
                onClick={() => {
                  setfirst(true);
                }}
              >
                <a className=" ff_mont fs_xsm fw-normal clr_white" href="#">
                  Pricing
                </a>
              </li>
              <div className="d-lg-none d-block undrline my-4"></div>
              <li
                className="ms_xl_41 ms_lg_30  hovr_line"
                onClick={() => {
                  setfirst(true);
                }}
              >
                <a className=" ff_mont fs_xsm fw-normal clr_white" href="#">
                  FAQ
                </a>
              </li>
              <div className="d-lg-none d-block undrline mt-4"></div>
              <div className="ms-xl-5 ps-lg-5 d-lg-block d-none">
                <button className=" ff_mont fs_xsm fw-semibold clr_white bg_tramsprnt btn_border ms-lg-3 btn_bg_hovr">
                  Login
                </button>
              </div>
            </ul>
          </div>
          <div
            className="d-lg-none d-block"
            onClick={() => {
              setfirst(false);
            }}
          >
            <div className="navicon1"></div>
            <div className="navicon2"></div>
            <div className="navicon3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
