import React from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import "../Styles/ourwork.css";

const Ourwork = () => {
  return (
    <div className="ourwork">
      <div className="row aboutrow">
        <div className="col-md-6 img1">{/* <div className=""></div> */}</div>
        <div className="col-md-6 img2">{/* <div className=""></div> */}</div>
        <div className="container p-4 ourworknav">
          <div className="d-flex justify-content-between ">
            <div className="text-white">
              <div className="">
                <Logo />
              </div>
            </div>
            <div className="text-white">
              <div>
                <Hamburger />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row aboutrow">
        <div className="col-md-6 img3"></div>
        <div className="col-md-6 ">
          <div className="row">
            <div className="col-md-6 ">
              <div className="row img4"></div>
              <div className="row img5"></div>
            </div>
            <div className="col-md-6 img6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourwork;
