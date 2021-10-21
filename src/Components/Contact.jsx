import React from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";
import "../Styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="whiteBlock container">
        <p className="hd1 mt-5">LEAVE US</p>
        <p className="hd2">A MESSAGE</p>
        <input type="text" className="in mt-2" placeholder="your " />
        <input type="text" className="in mt-2" placeholder="your " />
        <input type="text" className="in mt-2" placeholder="your " />
        <input type="text" className="in mt-2" placeholder="your " />
        <button type="button" class="btn btn-dark btn-lg mt-4 but">
          Send Message -
        </button>
      </div>
      <div className="row p-4">
        <div className="container">
          <div className="d-flex justify-content-between homeNav">
            <div>
              <div className="logoblack1">
                <Logo />
              </div>
            </div>
            <div className="logoblack2">
              <div>
                <Hamburger />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-1">
              <Link className="backIcon" to="/">
                <i class="fas fa-angle-left fa-2x"></i>
              </Link>
            </div>
            <div className="col-md-9 aboutBody">
              <div className="homeText">
                <div className="right_home_body">
                  <div>
                    <p className="aboutTopText ">
                      <i className="lightfont"> WE CAN </i>
                      <b>HELP YOU WITH</b>
                    </p>
                  </div>
                  <div className="aboutLowerText">
                    <p className="font-face-gb ">BRAND IDEATION</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
