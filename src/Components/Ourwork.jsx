import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import "../Styles/ourwork.css";
import { Link } from "react-router-dom";
import bangkok from "../Images/bangkok.jpg";
import dubai from "../Images/dubai.jpg";
import diamond1 from "../Images/diamond1.jpg";
import diamond from "../Images/diamond.jpg";
import tubecoffee from "../Images/tubecoffee.jpg";

const Ourwork = () => {
  const [modalHide, setModalHide] = useState("modal-blur hide");
  const [modalContentHide, setModalContentHide] =
    useState("modal-content hide");
  const [modalimg, setModalimg] = useState("");
  const ModalContent = () => {
    if (modalimg === "img1")
      return <img src={bangkok} alt="quickview" className="quickview" />;
    if (modalimg === "img2")
      return <img src={dubai} alt="quickview" className="quickview" />;
    if (modalimg === "img3")
      return <img src={diamond} alt="quickview" className="quickview" />;
    if (modalimg === "img5")
      return <img src={diamond1} alt="quickview" className="quickview" />;
    if (modalimg === "img6")
      return <img src={tubecoffee} alt="quickview" className="quickview" />;
  };
  return (
    <>
      <div className="ourwork">
        <Link className="backIconWorks" to="/about">
          <i className="fas fa-angle-left fa-2x"></i>
        </Link>

        <div className="row aboutrow " style={{ zIndex: "999" }}>
          <div
            className="col-md-6 img1"
            onClick={() => {
              setModalHide("modal-blur");
              setModalContentHide("modal-content");
              setModalimg("img1");
            }}
          ></div>
          <div
            className="col-md-6 img2"
            onClick={() => {
              setModalHide("modal-blur");
              setModalContentHide("modal-content");
              setModalimg("img2");
            }}
          ></div>
          <div className="container p-4 ourworknav" style={{ zIndex: "1" }}>
            <div className="d-flex justify-content-between ">
              <div className="text-white">
                <div className="">
                  <Logo />
                </div>
              </div>
              <div className="text-white">
                <Link to={{ pathname: "/nav", state: { from: "/ourwork" } }}>
                  <Hamburger />
                </Link>
              </div>
            </div>
            <div className="ourPortfolio">
              <p className="portfolio_our font-face-gl">OUR</p>
              <p className="portfolio_portfolio font-face-gb">PORTFOLIO</p>
              <svg
                width="40"
                height="10"
                viewBox="0 0 639 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginTop: "-24px" }}
                className="portfollio_Bar"
              >
                <path
                  d="M0 18C0 8.05887 32.0618 0 71.6121 0H567.388C606.938 0 639 8.05887 639 18V18C639 27.9411 606.938 36 567.388 36H71.6121C32.0618 36 0 27.9411 0 18V18Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="row aboutrow">
          <div
            className="col-md-6 img3"
            onClick={() => {
              setModalHide("modal-blur");
              setModalContentHide("modal-content");
              setModalimg("img3");
            }}
          ></div>
          <div className="col-md-6 flex" style={{ padding: 0 }}>
            <div className="d-flex test1">
              <div className="d-flex test" style={{ flexDirection: "" }}>
                <div className="img4"></div>
                <div
                  className="img5"
                  onClick={() => {
                    setModalHide("modal-blur");
                    setModalContentHide("modal-content");
                    setModalimg("img5");
                  }}
                ></div>
              </div>
              <div
                className="img6"
                onClick={() => {
                  setModalHide("modal-blur");
                  setModalContentHide("modal-content");
                  setModalimg("img6");
                }}
              ></div>
            </div>
          </div>
        </div>
        <Link className="forwardIconWorks" to="/contact">
          <i className="fas fa-angle-right fa-2x"></i>
        </Link>
        <div
          className={modalHide}
          onClick={() => {
            setModalHide("modal-blur hide");
            setModalContentHide("modal-content hide");
          }}
        ></div>
        <div className={modalContentHide}>
          <div className="row">
            <div className="col-md-6">{ModalContent()}</div>
            <div className="col-md-6">
              <p
                className="closeButton"
                onClick={() => {
                  setModalHide("modal-blur hide");
                  setModalContentHide("modal-content hide");
                }}
              >
                <i className="fa fa-close closeicon"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="lowerDots">
          <svg
            id="dots"
            width="95"
            height="30"
            viewBox="0 0 695 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Link to="/">
              <path
                d="M65 28C65 43.464 50.4493 56 32.5 56C14.5507 56 0 43.464 0 28C0 12.536 14.5507 0 32.5 0C50.4493 0 65 12.536 65 28Z"
                fill="white"
              />
            </Link>
            <Link to="/about">
              <path
                d="M230 28C230 43.464 215.449 56 197.5 56C179.551 56 165 43.464 165 28C165 12.536 179.551 0 197.5 0C215.449 0 230 12.536 230 28Z"
                fill="#FFFDFD"
              />
            </Link>
            <path
              d="M330 28C330 22.4772 335.703 18 342.739 18H517.261C524.297 18 530 22.4772 530 28V29C530 34.5228 524.297 39 517.261 39H342.739C335.703 39 330 34.5228 330 29V28Z"
              fill="white"
            />
            <Link to="/contact">
              <path
                d="M695 29C695 44.464 680.449 57 662.5 57C644.551 57 630 44.464 630 29C630 13.536 644.551 1 662.5 1C680.449 1 695 13.536 695 29Z"
                fill="#FFFDFD"
              />
            </Link>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Ourwork;
