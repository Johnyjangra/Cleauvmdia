import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tick from "../assets/img/svg/tick.svg";

const Pricing = () => {
  return (
    <div className="cream_background py-md-5">
      <Container className=" custom_container py-5">
        <h1 className="text-center ff_mont fs_lg fw-semibold clr_black">
          Pricing Plans
        </h1>
        <p className="ff_mont fs_xsm fw-normal clr_black text-center op_09">
          We offer flexible and competitive pricing plans to suit your specific
          needs.{" "}
        </p>
        <Row className="pt-5 justify-content-center">
          <Col xl={4} md={6}>
            <div className="text-center card_bordr pb-2 card_hovr cursr_pointer">
              <p className="ff_raleway fs_20 fw-semibold clr_black prara_bordr d-inline-block px-5 position-relative top_50 hovr_yellow">
                Most Popular
              </p>
              <p className="ff_mont fs_md fw-semibold clr_black text-center">
                Monthly
              </p>
              <h1 className="ff_mont fs_md fw-semibold clr_black text-center">
                <span className="fw-medium fs_xl">$1990</span> /month
              </h1>
              <p className="ff_mont fs_20 fw-normal clr_black text-center mb-0">
                Cancel anytime
              </p>
              <div className="ps_32 pt-5">
                <div className="d-flex">
                  <img src={tick} alt="tick" />
                  <p className="mb-0 ff_mont fs_20 fw-normal clr_black ps-2">
                    Unlimited requests
                  </p>
                </div>
                <div className="d-flex pt-2">
                  <img src={tick} alt="tick" />
                  <p className="mb-0 ff_mont fs_20 fw-normal clr_black ps-2">
                    Unlimited brands
                  </p>
                </div>
                <div className="d-flex pt-2">
                  <img src={tick} alt="tick" />
                  <p className="mb-0 ff_mont fs_20 fw-normal clr_black ps-2">
                    Full ownership of design
                  </p>
                </div>
                <div className="d-flex pt-2 ">
                  <img src={tick} alt="tick" />
                  <p className="mb-0 ff_mont fs_20 fw-normal clr_black ps-2">
                    Pause or cancel anytime
                  </p>
                </div>
              </div>
              <div className="rdc_5 black_bordr mx_32 mt_40 mb-4">
                <button className="ff_mont fs_xsm fw-semibold clr-black border-0 bg-transparent py-3">
                  Get Started
                </button>
              </div>
            </div>
          </Col>
          <Col xl={4} md={6} className="pt-md-0 pt-5">
            <div className="text-center card_bordr pb-2 card_hovr cursr_pointer">
              <p className="ff_raleway fs_20 fw-semibold clr_black prara_bordr d-inline-block px-5 position-relative top_50 hovr_yellow">
                Paid Quarterly
              </p>
              <p className="ff_mont fs_md fw-semibold clr_black text-center">
                Quarterly
              </p>
              <h1 className="ff_mont fs_md fw-semibold clr_black text-center">
                <span className="fw-medium fs_xl">$1740</span> /month
              </h1>
              <p className="ff_mont fs_20 fw-normal clr_black text-center mb-0">
                Save $250 per month
              </p>
              <div className="ps_32 pt-5">
                <div className="d-flex">
                  <img src={tick} alt="tick" />
                  <p className="mb-0 ff_mont fs_20 fw-normal clr_black ps-2">
                    Unlimited requests
                  </p>
                </div>
                <div className="d-flex pt-2">
                  <img src={tick} alt="tick" />
                  <p className="mb-0 ff_mont fs_20 fw-normal clr_black ps-2">
                    Unlimited brands
                  </p>
                </div>
                <div className="d-flex pt-2">
                  <img src={tick} alt="tick" />
                  <p className="mb-0 ff_mont fs_20 fw-normal clr_black ps-2">
                    Full ownership of design
                  </p>
                </div>
                <div className="d-flex pt-2 pointr_none">
                  <img src={tick} alt="tick" />
                  <p className="mb-0 ff_mont fs_20 fw-normal clr_black ps-2">
                    Pause or cancel anytime
                  </p>
                </div>
              </div>
              <div className="rdc_5 black_bordr mx_32 mt_md_40 mt_10 mb-4">
                <button className="ff_mont fs_xsm fw-semibold clr-black border-0 bg-transparent py-3">
                  Get Started
                </button>
              </div>
            </div>
          </Col>
          <Col xl={4} md={6} className="pt-xl-0 pt-5">
            <div className="text-center card_bordr pb-2 card_hovr cursr_pointer">
              <p className="ff_raleway fs_20 fw-semibold clr_black prara_bordr d-inline-block px-5 position-relative top_50 hovr_yellow l_50">
                One Time Payment
              </p>
              <p className="ff_mont fs_md fw-semibold clr_black text-center">
                Individual Project
              </p>
              <h1 className="ff_mont fw-medium fs_xl clr_black text-center">
                Contact Us
              </h1>
              <p className="ff_mont fs_20 fw-normal clr_black text-center mb-0">
                Price depending on scale
              </p>
              <div className="ps_32 pt-5">
                <div className="d-flex">
                  <img src={tick} alt="tick" />
                  <p className="mb-0 ff_mont fs_20 fw-normal clr_black ps-2">
                    Brand identity
                  </p>
                </div>
                <div className="d-flex pt-2">
                  <img src={tick} alt="tick" />
                  <p className="mb-0 ff_mont fs_20 fw-normal clr_black ps-2">
                    Digital advertisement
                  </p>
                </div>
                <div className="d-flex pt-2">
                  <img src={tick} alt="tick" />
                  <p className="mb-0 ff_mont fs_20 fw-normal clr_black ps-2">
                    Web and Mobile design
                  </p>
                </div>
                <div className="d-flex pt-2 ">
                  <img src={tick} alt="tick" />
                  <p className="mb-0 ff_mont fs_20 fw-normal clr_black ps-2">
                    Social media campaign
                  </p>
                </div>
              </div>
              <div className="rdc_5 black_bordr mx_32 mt_40 mb-4">
                <button className="ff_mont fs_xsm fw-semibold clr-black border-0 bg-transparent py-3">
                  Get Started
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
