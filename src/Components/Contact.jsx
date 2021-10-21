import React from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
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
            <div className="col-md-1"></div>
            <div>
              <p>Lets Work Together</p>
              <p>REACH</p>
              <p>US AT</p>
              <p>hello.buildyourownbusiness@gmail.com</p>
              <p>+91 89108 40894</p>
              <p>+91 89615 10238</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
