import React, { useEffect, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/home.css";
import "../Styles/dots.css";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Error from "./Error";
const Home = () => {
  const [error, setError] = useState(false);
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  const [width] = useWindowSize();
  useEffect(() => {
    console.log(width);
    if (width < 1024) {
      setError(true);
    } else {
      setError(false);
    }
  }, [width]);
  return (
    <>
      {error ? (
        <Error />
      ) : (
        <div className="homepage p-4">
          <div className="row">
            <div className="container">
              <div className="d-flex justify-content-between homeNav">
                <div>
                  <div className="logoblack1">
                    <Logo />
                  </div>
                </div>
                <div className="logoblack2">
                  <Link to={{ pathname: "/nav", state: { from: "/home" } }}>
                    <Hamburger />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row homebody">
              <div className="col-md-6 leftCol">
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
                    <p className="font-face-gl into ">INTO</p>
                    <p className="font-face-md reality">REALITY</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 homeRightCol">
                <Link className="icon" to="/about">
                  <i className="fas fa-angle-right fa-2x"></i>
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
                <Link to="/about">
                  <path
                    d="M381 28C381 43.464 366.449 56 348.5 56C330.551 56 316 43.464 316 28C316 12.536 330.551 0 348.5 0C366.449 0 381 12.536 381 28Z"
                    fill="#FFFDFD"
                  />
                </Link>

                <path
                  d="M0 27C0 21.4772 5.70338 17 12.7389 17H187.261C194.297 17 200 21.4772 200 27V28C200 33.5228 194.297 38 187.261 38H12.7388C5.70337 38 0 33.5228 0 28V27Z"
                  fill="white"
                />

                <Link to="/ourwork">
                  <path
                    d="M562 28C562 43.464 547.449 56 529.5 56C511.551 56 497 43.464 497 28C497 12.536 511.551 0 529.5 0C547.449 0 562 12.536 562 28Z"
                    fill="#FFFDFD"
                  />
                </Link>
              </svg>{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
