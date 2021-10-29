import React, { useState } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import "../Styles/contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [num, setNum] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className="contact-main p-4">
      <div className="whiteBlock container p-5 pt-5">
        <p className="hd1 mt-5">LEAVE US</p>
        <p className="hd2 font-face-gb">A MESSAGE</p>
        <input
          type="text"
          className="in mt-5 text-dark"
          placeholder="YOUR NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="in mt-5 text-dark"
          placeholder="YOUR MAIL"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          required
        />
        <input
          type="number"
          className="in mt-5 text-dark"
          placeholder="YOUR CONTACT NUMBER "
          value={num}
          onChange={(e) => setNum(e.target.value)}
          required
        />
        <input
          type="text"
          className="in1 mt-5 text-dark"
          placeholder="TELL US YOUR STORY "
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
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
              <Link
                to={{
                  pathname: "/nav",
                  state: { from: "/contact" },
                }}
              >
                <Hamburger />
              </Link>
            </div>
          </div>
        </div>
        <div className="row contactbody">
          <div className="col-md-1">
            <Link className="backIcon" to="/ourwork">
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
        <div className="lowerDots">
          <svg
            id="dots"
            width="95"
            height="30"
            viewBox="0 0 742 56"
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
                d="M246 28C246 43.464 231.449 56 213.5 56C195.551 56 181 43.464 181 28C181 12.536 195.551 0 213.5 0C231.449 0 246 12.536 246 28Z"
                fill="#FFFDFD"
              />
            </Link>

            <path
              d="M542 27C542 21.4772 547.703 17 554.739 17H729.261C736.297 17 742 21.4772 742 27V28C742 33.5228 736.297 38 729.261 38H554.739C547.703 38 542 33.5228 542 28V27Z"
              fill="white"
            />

            <Link to="/ourwork">
              <path
                d="M426 28C426 43.464 411.449 56 393.5 56C375.551 56 361 43.464 361 28C361 12.536 375.551 0 393.5 0C411.449 0 426 12.536 426 28Z"
                fill="#FFFDFD"
              />
            </Link>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Contact;
