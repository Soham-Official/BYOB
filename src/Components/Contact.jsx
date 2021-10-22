import React from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import "../Styles/contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="contact-main p-4">
      <div className="whiteBlock container p-5 pt-5">
        <p className="hd1 mt-5">LEAVE US</p>
        <p className="hd2 font-face-gb">A MESSAGE</p>
        <input type="text" className="in mt-5" placeholder="YOUR NAME" />
        <input type="text" className="in mt-5" placeholder="YOUR MAIL" />
        <input
          type="text"
          className="in mt-5"
          placeholder="YOUR CONTACT NUMBER "
        />
        <input
          type="text"
          className="in1 mt-5"
          placeholder="TELL US YOUR STORY "
        />
        <button type="button" className="btn btn-dark btn-lg but font-face-gl">
          SEND MESSAGE
          <svg
            width="40"
            height="4"
            viewBox="0 0 200 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hyphen"
          >
            <path
              d="M0 24.5C0 10.969 10.969 0 24.5 0H412.5C426.031 0 437 10.969 437 24.5V24.5C437 38.031 426.031 49 412.5 49H24.5C10.969 49 0 38.031 0 24.5V24.5Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="row ">
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
        <div className="row contactbody">
          <div className="col-md-1">
            <Link className="backIconContact" to="/about">
              <i class="fas fa-angle-left fa-2x"></i>
            </Link>
          </div>
          <div className="col-md-8 ">
            <div className="contextBody">
              <div className="workTogether">
                <p>
                  <b>LET'S </b> <i className="lightfont">WORK TOGETHER</i>
                </p>
              </div>

              <p className="reach font-face-gb">REACH</p>
              <p className="usat font-face-gl">US AT</p>
              <p className="mailicon mt-5">
                <i className="fa fa-envelope-o "></i>
                <span className="m-5 font-face-gl">
                  hello.buildyourownbusiness@gmail.com
                </span>
              </p>
              <p className="dials mt-5 ">
                {" "}
                <i className="fa fa-phone"></i>
                <span className="font-face-gl dial">+91 89108 40894</span>
              </p>
              <p className="nums">
                <span className=" font-face-gl ">+91 89615 10238</span>
              </p>
              <p className="nums">
                <span className=" font-face-gl ">+91 89615 10238</span>
              </p>
              <p className="nums">
                <span className=" font-face-gl ">+91 90512 66401</span>
              </p>
              <p className="nums">
                <span className=" font-face-gl ">+91 87770 56414</span>
              </p>

              <div className="sociocons mt-5">
                <i className="fa fa-facebook-square social-icon"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-linkedin-square"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-pinterest"></i>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="copyright ">
            <p>
              <i>DESIGNED BY BYOB</i>
            </p>
            <p>
              COPYRIGHT ISSUED TO BYOB 2021 <sup>&#169;</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
