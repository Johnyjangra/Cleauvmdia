import React from "react";
import { Accordion, Container } from "react-bootstrap";
import bluedots from "../assets//img/svg/greenvec.svg";
import halftringl from "../assets//img/png/halftringl.png";

const Accordionshow = () => {
  return (
    <section
      className="cream_bg py-5  position-relative overf low-hidden"
      id="faq"
    >
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
      <Container className=" pb-sm-5 mb-lg-5 mycontainer custom_container">
        <h2 className="text-center ff_mont fs_xl py-lg-5 py-4 fw-semibold ">
          Frequently Asked Questions
        </h2>

        <Accordion
          defauljustify-content-centertActivekey="1"
          className=" mb-lg-5 "
        >
          <Accordion.Item
            className="border_bottom_07  px-2"
            evenKey="0"
            data-aos="zoom-out-up"
            data-aos-duration="2000"
          >
            <Accordion.Header>
              <h4 className="ff_mont fw-semibold text-black fs_sm">
                Q1. What does “unlimited requests” mean?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                quia ipsam obcaecati beatae porro iusto vero asperiores, dolore
                eveniet quidem est ratione iure nisi, dolores placeat eum
                officiis voluptate aspernatur.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="1"
            className="border_bottom_07  px-2"
            data-aos="zoom-out-up"
            data-aos-duration="2200"
          >
            <Accordion.Header>
              <h4 className="ff_mont fw-semibold text-black fs_sm">
                Q2. What makes your creative studio/marketing agency unique?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                At Cleauv Media Inc, we pride ourselves on our holistic approach
                to creative services and marketing. We offer a comprehensive
                suite of services, including web build, branding, content
                creation, paid advertising, and business automation. Our team of
                experts combines creativity with strategic thinking to deliver
                tailored solutions that drive results for our clients.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className="border_bottom_07  px-2"
            eventKey="2"
            data-aos="zoom-out-up"
            data-aos-duration="2400"
          >
            <Accordion.Header>
              <h4 className="ff_mont fw-semibold text-black fs_sm">
                Q3. Can you handle projects of different sizes?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                quibusdam reprehenderit mollitia nulla nobis, eum architecto
                quam. Soluta eaque animi consectetur. Minima aspernatur, nihil
                numquam excepturi consequatur repellendus veritatis asperiores.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className="border_bottom_07  px-2"
            eventKey="3"
            data-aos="zoom-out-up"
            data-aos-duration="2600"
          >
            <Accordion.Header>
              <h4 className="ff_mont fw-semibold text-black fs_sm">
                Q4. How do you ensure the quality of your work?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                quia ipsam obcaecati beatae porro iusto vero asperiores, dolore
                eveniet quidem est ratione iure nisi, dolores placeat eum
                officiis voluptate aspernatur.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            className="border_bottom_07 px-2"
            eventKey="4"
            data-aos="zoom-out-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>
              <h4 className="ff_mont fw-semibold text-black fs_sm">
                Q5. How do I get started with your services?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                quia ipsam obcaecati beatae porro iusto vero asperiores, dolore
                eveniet quidem est ratione iure nisi, dolores placeat eum
                officiis voluptate aspernatur.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="5"
            className="px-2"
            data-aos="zoom-out-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>
              <h4 className="ff_mont fw-semibold text-black fs_sm">
                Q6. How does your business model work?
              </h4>
            </Accordion.Header>
            <Accordion.Body>
              <p className="ff_mont fw-normal fs_xsm text-black mb-0 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                quia ipsam obcaecati beatae porro iusto vero asperiores, dolore
                eveniet quidem est ratione iure nisi, dolores placeat eum
                officiis voluptate aspernatur.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default Accordionshow;
