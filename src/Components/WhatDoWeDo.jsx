import React from "react";
import "../Styles/about.css";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import video from "../Videos/about.mp4";

const WhatDoWeDo = () => {
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video>
      <div className="aboutpage p-4">
        <div className="row">
          <div className="container">
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
        <div className="container">
          <div className="row homebody">
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
                    <p className="font-face-gb x">BRAND IDEATION</p>
                    <p className="font-face-gb x">VISUAL DESIGN</p>
                    <p className="font-face-gb x">ARCHITECTURE</p>
                    <p className="font-face-gb x">MARKETING</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 homeRightCol">
              <Link className="icon" to="/ourwork">
                <i class="fas fa-angle-right fa-2x"></i>
              </Link>
            </div>
          </div>
          <div className="lowerDots">
            <svg
              id="dots"
              width="95"
              height="30"
              viewBox="0 0 743 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Link to="/contact">
                <path
                  d="M743 28C743 43.464 728.449 56 710.5 56C692.551 56 678 43.464 678 28C678 12.536 692.551 0 710.5 0C728.449 0 743 12.536 743 28Z"
                  fill="white"
                />
              </Link>
              <Link to="/">
                <path
                  d="M65 28C65 43.464 50.4493 56 32.5 56C14.5507 56 0 43.464 0 28C0 12.536 14.5507 0 32.5 0C50.4493 0 65 12.536 65 28Z"
                  fill="#FFFDFD"
                />
              </Link>
              <path
                d="M181 28C181 22.4772 186.703 18 193.739 18H368.261C375.297 18 381 22.4772 381 28V29C381 34.5228 375.297 39 368.261 39H193.739C186.703 39 181 34.5228 181 29V28Z"
                fill="white"
              />

              <Link to="/ourwork">
                <path
                  d="M562 28C562 43.464 547.449 56 529.5 56C511.551 56 497 43.464 497 28C497 12.536 511.551 0 529.5 0C547.449 0 562 12.536 562 28Z"
                  fill="#FFFDFD"
                />
              </Link>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatDoWeDo;
