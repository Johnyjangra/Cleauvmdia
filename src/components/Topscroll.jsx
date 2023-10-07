import React, { useState } from "react";
import arrow from "../assets/img/svg/toparrow.png";

const Topscroll = () => {
  const [first, setfirst] = useState(true);
  const clikontop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return;
  <section className=" position-fixed arrow_pos cursr_pointr">
    <img
      src={arrow}
      alt="arrow"
      onClick={() => clikontop()}
      className={first ? "d-none" : "d-block"}
    />
  </section>;
};

export default Topscroll;
