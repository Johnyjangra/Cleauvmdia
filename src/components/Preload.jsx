import React from "react";
import Logo from "./Icon";

const Preload = () => {
  setTimeout(() => {
    document.getElementById("prelod").classList.add("d-none");
    document.body.style.overflow = "unset";
  }, 4000);
  return (
    <>
      <section
        className=" min-vh-100 p-0 d-flex flex-column align-items-center justify-content-center preload_bg"
        id="prelod"
      >
        <div className=" min_vh_100">
          <div className="w_200">
            <Logo />
          </div>
        </div>
      </section>
    </>
  );
};

export default Preload;
