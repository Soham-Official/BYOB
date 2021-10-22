import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import "../Styles/ourwork.css";
import { Link } from "react-router-dom";
import img1 from "../Images/banana.jpg";

const Ourwork = () => {
  const [modalHide, setModalHide] = useState("modal-blur hide");
  const [modalContentHide, setModalContentHide] =
    useState("modal-content hide");
  return (
    <div className="ourwork">
      <Link className="backIconWorks" to="/about">
        <i class="fas fa-angle-left fa-2x"></i>
      </Link>
      <div className="row aboutrow">
        <div
          className="col-md-6 img1"
          onClick={() => {
            setModalHide("modal-blur");
            setModalContentHide("modal-content");
          }}
        ></div>
        <div
          className="col-md-6 img2"
          onClick={() => {
            setModalHide("modal-blur");
            setModalContentHide("modal-content");
          }}
        ></div>
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
        <div
          className="col-md-6 img3"
          onClick={() => {
            setModalHide("modal-blur");
            setModalContentHide("modal-content");
          }}
        ></div>
        <div className="col-md-6 ">
          <div className="row">
            <div className="col-md-6 ">
              <div
                className="row img4"
                onClick={() => {
                  setModalHide("modal-blur");
                  setModalContentHide("modal-content");
                }}
              ></div>
              <div
                className="row img5"
                onClick={() => {
                  setModalHide("modal-blur");
                  setModalContentHide("modal-content");
                }}
              ></div>
            </div>
            <div
              className="col-md-6 img6"
              onClick={() => {
                setModalHide("modal-blur");
                setModalContentHide("modal-content");
              }}
            ></div>
          </div>
        </div>
      </div>
      <Link className="forwardIconWorks" to="/contact">
        <i class="fas fa-angle-right fa-2x"></i>
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
          <div className="col-md-6">
            <img src={img1} alt="quickview" className="quickview" />
          </div>
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
            {/* <p className="obj1 text-dark">Heading 1</p>
            <p className="obj1 text-dark">Heading 2</p>
            <p className="obj1 text-dark">Heading 3</p>
            <p className="obj1 text-dark">Heading 4</p> */}
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
        {/* <svg
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
        </svg> */}
      </div>
    </div>
  );
};

export default Ourwork;
