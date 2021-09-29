import React from "react";
import { Link } from "react-router-dom";
import "../Styles/home.css";
import "../Styles/dots.css";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
const Home = () => {
  return (
    <>
      <div className="homepage p-4">
        <div className="row">
          <div className="container">
            <div className="d-flex justify-content-between ">
              <div>
                <div className="logoblack">
                  <Logo />
                </div>
              </div>
              <div className="logoblack">
                <div>
                  <Hamburger />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row homebody">
            <div className="col-md-6 d-flex justify-content-start">
              <div className="homeText">
                <div className="left_home_body font-face-gb we_shape">
                  <p>
                    <b>WE</b>
                  </p>
                  <p>
                    <i>SHAPE</i>
                  </p>
                </div>

                <div className="right_home_body">
                  <p className="font-face-gb ideas">IDEAS</p>
                  <p className="font-face-gl into">INTO</p>
                  <p className="font-face-md reality">REALITY</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 homeRightCol">
              <Link className="icon" to="/about">
                <i class="fas fa-angle-right fa-3x"></i>
              </Link>
            </div>
          </div>
          <div className="lowerDots">
            <svg
              id="dots"
              width="130"
              height="50"
              viewBox="0 0 618 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Link to="/about">
                <path
                  d="M387 56C387 71.464 372.449 84 354.5 84C336.551 84 322 71.464 322 56C322 40.536 336.551 28 354.5 28C372.449 28 387 40.536 387 56Z"
                  fill="white"
                />
              </Link>
              <path
                d="M552 56C552 71.464 537.449 84 519.5 84C501.551 84 487 71.464 487 56C487 40.536 501.551 28 519.5 28C537.449 28 552 40.536 552 56Z"
                fill="#FFFDFD"
              />

              <path
                d="M23 56C23 50.4772 28.7034 46 35.7389 46H210.261C217.297 46 223 50.4772 223 56V57C223 62.5228 217.297 67 210.261 67H35.7388C28.7034 67 23 62.5228 23 57V56Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
