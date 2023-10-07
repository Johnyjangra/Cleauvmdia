import React from "react";
import girl1 from "../assets/img/svg/girl1.png";
import girl2 from "../assets/img/svg/girl2.png";
import Slider from "react-slick";

const CustomerSay = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1.2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="cream_bg py-lg-5" id="customer">
      <div className="py-5">
        <h1 className=" ff_mont fs_lg fw-semibold clr_black text-center">
          What Our Customer Say
        </h1>
        <p className=" ff_mont fs_xsm fw-normal clr_black op_09 text-center mb-0">
          We offer flexible and competitive pricing plans to suit your specific
          needs.{" "}
        </p>
        <Slider {...settings} className="">
          <div className="px-4 py-lg-5 py-4">
            <div className="max_891 black_bordr py-sm-5 py-4 ps-sm-5 pe-4 ps-4 yellow_hovr_shadow cursr_pointer ">
              <div className="d-flex flex-md-row flex-column">
                <div className="d-flex align-items-center ">
                  <img className="w_184 w_70" src={girl1} alt="girl1" />
                  <div className="d-md-none d-block ps-md-0 ps-3">
                    {" "}
                    <h1 className="ff_mont fs_md fw-semibold clr_black mb-0">
                      Arlene McCoy
                    </h1>
                    <p className=" ff_mont fs_xsm fw-normal clr_black op_05 mb-0">
                      CEO of Mind.ly
                    </p>
                  </div>
                </div>
                <div className="ps-md-4 pt-md-0 pt-4 m s-3">
                  <div className="d-md-block d-none">
                    <h1 className="ff_mont fs_md fw-semibold clr_black mb-0">
                      Arlene McCoy
                    </h1>
                    <p className=" ff_mont fs_xsm fw-normal clr_black op_05">
                      CEO of Mind.ly
                    </p>
                  </div>
                  <p className=" ff_mont fw-semibold fs_xsm clr_black op_07 mb-0">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-5">
            <div className="max_891 black_bordr py-sm-5 py-4 ps-sm-5 ps-4 pe-4 yellow_hovr_shadow cursr_pointer">
              <div className="d-flex flex-md-row flex-column">
                <div className="d-flex align-items-center ">
                  <img className="w_184 w_70" src={girl2} alt="girl1" />
                  <div className="d-md-none d-block ps-md-0 ps-3">
                    {" "}
                    <h1 className="ff_mont fs_md fw-semibold clr_black mb-0">
                      Arlene McCoy
                    </h1>
                    <p className=" ff_mont fs_xsm fw-normal clr_black op_05 mb-0">
                      CEO of Mind.ly
                    </p>
                  </div>
                </div>
                <div className="ps-md-4 pt-md-0 pt-4 m s-3">
                  <div className="d-md-block d-none">
                    <h1 className="ff_mont fs_md fw-semibold clr_black mb-0">
                      Arlene McCoy
                    </h1>
                    <p className=" ff_mont fs_xsm fw-normal clr_black op_05">
                      CEO of Mind.ly
                    </p>
                  </div>
                  <p className=" ff_mont fw-semibold fs_xsm clr_black op_07 mb-0">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-5">
            <div className="max_891 black_bordr py-sm-5 py-4 ps-sm-5 ps-4 pe-4 yellow_hovr_shadow cursr_pointer">
              <div className="d-flex flex-md-row flex-column">
                <div className="d-flex align-items-center ">
                  <img className="w_184 w_70" src={girl1} alt="girl1" />
                  <div className="d-md-none d-block ps-md-0 ps-4">
                    {" "}
                    <h1 className="ff_mont fs_md fw-semibold clr_black mb-0">
                      Arlene McCoy
                    </h1>
                    <p className=" ff_mont fs_xsm fw-normal clr_black op_05 mb-0">
                      CEO of Mind.ly
                    </p>
                  </div>
                </div>
                <div className="ps-md-4 pt-md-0 pt-4 m s-3">
                  <div className="d-md-block d-none">
                    <h1 className="ff_mont fs_md fw-semibold clr_black mb-0">
                      Arlene McCoy
                    </h1>
                    <p className=" ff_mont fs_xsm fw-normal clr_black op_05">
                      CEO of Mind.ly
                    </p>
                  </div>
                  <p className=" ff_mont fw-semibold fs_xsm clr_black op_07 mb-0">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-5">
            <div className="max_891 black_bordr py-sm-5 py-4 ps-sm-5 ps-4 pe-4 yellow_hovr_shadow">
              <div className="d-flex flex-md-row flex-column">
                <div className="d-flex align-items-center ">
                  <img className="w_184 w_70" src={girl2} alt="girl1" />
                  <div className="d-md-none d-block ps-md-0 ps-4">
                    {" "}
                    <h1 className="ff_mont fs_md fw-semibold clr_black mb-0">
                      Arlene McCoy
                    </h1>
                    <p className=" ff_mont fs_xsm fw-normal clr_black op_05 mb-0">
                      CEO of Mind.ly
                    </p>
                  </div>
                </div>
                <div className="ps-md-4 pt-md-0 pt-4 m s-3">
                  <div className="d-md-block d-none">
                    <h1 className="ff_mont fs_md fw-semibold clr_black mb-0">
                      Arlene McCoy
                    </h1>
                    <p className=" ff_mont fs_xsm fw-normal clr_black op_05">
                      CEO of Mind.ly
                    </p>
                  </div>
                  <p className=" ff_mont fw-semibold fs_xsm clr_black op_07 mb-0">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CustomerSay;
