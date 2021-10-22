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
                    <p className="font-face-gb ">BRAND IDEATION</p>
                    <p className="font-face-gb ">VISUAL DESIGN</p>
                    <p className="font-face-gb ">ARCHITECTURE</p>
                    <p className="font-face-gb ">MARKETING</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 homeRightCol">
              <Link className="icon" to="/contact">
                <i class="fas fa-angle-right fa-2x"></i>
              </Link>
            </div>
          </div>
          <div className="lowerDots">
            <svg
              id="dots"
              width="95"
              height="30"
              viewBox="0 0 618 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Link to="/">
                <path
                  d="M120 56C120 71.464 105.449 84 87.5 84C69.5507 84 55 71.464 55 56C55 40.536 69.5507 28 87.5 28C105.449 28 120 40.536 120 56Z"
                  fill="white"
                />
              </Link>
              <path
                d="M585 56C585 71.464 570.449 84 552.5 84C534.551 84 520 71.464 520 56C520 40.536 534.551 28 552.5 28C570.449 28 585 40.536 585 56Z"
                fill="#FFFDFD"
              />
              <path
                d="M220 56C220 50.4772 225.703 46 232.739 46H407.261C414.297 46 420 50.4772 420 56V57C420 62.5228 414.297 67 407.261 67H232.739C225.703 67 220 62.5228 220 57V56Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatDoWeDo;
