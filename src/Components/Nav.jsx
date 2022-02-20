import React, { useState } from "react";
import "../Styles/nav.css";
import { Link, useLocation } from "react-router-dom";
import nav1 from "../Images/nav1.png";
import nav2 from "../Images/nav2.png";
import nav3 from "../Images/nav3.png";
import nav4 from "../Images/nav4.png";
import sprite from "../Images/sprite.png";
import Logo from "./Logo";
const Nav = () => {
  const location = useLocation();
  const { from } = location.state;
  const [onPage, setPageChange] = useState(from);

  return (
    <>
      <div className="navBar-container">
        <div id="logo-navBar">
          <Logo />
        </div>
        <div className="nav-socials">
          <i className="fa fa-facebook-square"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin-square"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-pinterest"></i>
        </div>
        <Link id="main-navBar-home" to={onPage}>
          {/* <!-- The background mosaic with the visuals moving in diagonal -->
            <!--
            For home-back change:
                home-navBar-back-container style to change px
                home-navBar-back-item to home-navBar-back-item selected
                home-navBar-back-item-transition to change px for background-position: -241px -1446px
        --> */}
          <div id="home-navBar-back">
            <div
              id="home-navBar-back-container"
              style={{
                top: "-4200px",
                left: "-1100px",
                paddingTop: "2968px",
                paddingBottom: "2827px",
                backgroundPosition: "1391px 985px",
              }}
            >
              <div id="back-sel1" className="home-navBar-back-item selected">
                <div>
                  <div
                    className="home-navBar-back-item-nb"
                    style={{ marginTop: "1650px" }}
                  >
                    01
                  </div>
                  <div
                    className="home-navBar-back-item-bg"
                    style={{ marginTop: "1650px" }}
                  >
                    <div
                      className="home-navBar-back-item-background"
                      style={{
                        backgroundImage: `url(${nav1})`,
                        opacity: 1,
                      }}
                    ></div>
                    <div
                      id="img-sel1"
                      className="home-navBar-back-item-transition"
                      style={{
                        width: "241px",
                        height: "241px",
                        backgroundImage: `url(${sprite})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "-241px -1446px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div id="back-sel2" className="home-navBar-back-item">
                <div>
                  <div
                    className="home-navBar-back-item-nb"
                    style={{ marginTop: "1515px" }}
                  >
                    02
                  </div>
                  <div
                    className="home-navBar-back-item-bg"
                    style={{ marginTop: "1515px" }}
                  >
                    <div
                      className="home-navBar-back-item-background"
                      style={{
                        backgroundImage: `url(${nav2})`,
                        opacity: 1,
                      }}
                    ></div>
                    <div
                      id="img-sel2"
                      className="home-navBar-back-item-transition"
                      style={{
                        width: "241px",
                        height: "241px",
                        backgroundImage: `url(${sprite})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "0px 0px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div id="back-sel3" className="home-navBar-back-item">
                <div>
                  <div
                    className="home-navBar-back-item-nb"
                    style={{ marginTop: "1380px" }}
                  >
                    03
                  </div>
                  <div
                    className="home-navBar-back-item-bg"
                    style={{ marginTop: "1380px" }}
                  >
                    <div
                      className="home-navBar-back-item-background"
                      style={{
                        backgroundImage: `url(${nav3})`,
                        opacity: 1,
                      }}
                    ></div>
                    <div
                      id="img-sel3"
                      className="home-navBar-back-item-transition"
                      style={{
                        width: "241px",
                        height: "241px",
                        backgroundImage: `url(${sprite})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "0px 0px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div id="back-sel4" className="home-navBar-back-item">
                <div>
                  <div
                    className="home-navBar-back-item-nb"
                    style={{ marginTop: "1245px" }}
                  >
                    04
                  </div>
                  <div
                    className="home-navBar-back-item-bg"
                    style={{ marginTop: "1245px" }}
                  >
                    <div
                      className="home-navBar-back-item-background"
                      style={{
                        backgroundImage: `url(${nav4})`,
                        opacity: 1,
                      }}
                    ></div>
                    <div
                      id="img-sel4"
                      className="home-navBar-back-item-transition"
                      style={{
                        width: "241px",
                        height: "241px",
                        backgroundImage: `url(${sprite})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "0px 0px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- The front menu with the names of the items -->
            <!--
            For home-front change:
                home-navBar-front-container to change px
                home-navBar-front-item to home-navBar-front-item selected
        --> */}
          <div id="home-navBar-front">
            <div id="home-navBar-front-container" style={{ left: "700px" }}>
              <div id="nav-sel1" className="home-navBar-front-item selected">
                <div className="title">
                  <div href="/#" className="font-face-gb">
                    HOME
                  </div>
                </div>
                <div className="description">Lorem ipsum dolor sit amet.</div>
              </div>
              <div id="nav-sel2" className="home-navBar-front-item">
                <div className="title">
                  <div href="/#" className="font-face-gb">
                    WHAT DO WE DO?
                  </div>
                </div>
                <div className="description">Lorem ipsum dolor sit amet.</div>
              </div>
              <div id="nav-sel3" className="home-navBar-front-item">
                <div className="title">
                  <div href="/#" className="font-face-gb">
                    OUR WORKS
                  </div>
                </div>
                <div className="description">Lorem ipsum dolor sit amet.</div>
              </div>
              <div id="nav-sel4" className="home-navBar-front-item">
                <div className="title">
                  <div href="/#" className="font-face-gb">
                    CONTACT US
                  </div>
                </div>
                <div className="description">Lorem ipsum dolor sit amet.</div>
              </div>
            </div>
          </div>

          {/* <!--
            For nav change:
                navigator-navBar-item hover to navigator-navBar-item hover selected
                navigator-navBar-drag to change px
        --> */}
          <div id="nav-navBar" style={{ display: "block" }}>
            <div
              id="nav-navBar-container"
              className=""
              style={{ height: "73px" }}
            >
              <div id="navigator-navBar-container">
                <div id="navigator-navBar" style={{ width: "121px" }}>
                  <div id="first-navigator-navBar-item"></div>
                  <div
                    id="hover1"
                    className="navigator-navBar-item hover selected"
                    onMouseOver={() => {
                      setPageChange("/");
                      hoverChange("hover1");
                    }}
                  ></div>
                  <div
                    id="hover2"
                    className="navigator-navBar-item hover"
                    onMouseOver={() => {
                      setPageChange("/about");
                      hoverChange("hover2");
                    }}
                  ></div>
                  <div
                    id="hover3"
                    className="navigator-navBar-item hover"
                    onMouseOver={() => {
                      setPageChange("/ourwork");
                      hoverChange("hover3");
                    }}
                  ></div>
                  <div
                    id="hover4"
                    className="navigator-navBar-item hover"
                    onMouseOver={() => {
                      setPageChange("/contact");
                      hoverChange("hover4");
                    }}
                  ></div>
                  <div id="navigator-navBar-drag" style={{ left: "2px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

const hoverChange = (el) => {
  //Navbar
  document.getElementById("hover1").className = "navigator-navBar-item hover";
  document.getElementById("hover2").className = "navigator-navBar-item hover";
  document.getElementById("hover3").className = "navigator-navBar-item hover";
  document.getElementById("hover4").className = "navigator-navBar-item hover";
  //Home Front
  document.getElementById("nav-sel1").className = "home-navBar-front-item";
  document.getElementById("nav-sel2").className = "home-navBar-front-item";
  document.getElementById("nav-sel3").className = "home-navBar-front-item";
  document.getElementById("nav-sel4").className = "home-navBar-front-item";
  //Home Back
  document.getElementById("back-sel1").className = "home-navBar-back-item";
  document.getElementById("back-sel2").className = "home-navBar-back-item";
  document.getElementById("back-sel3").className = "home-navBar-back-item";
  document.getElementById("back-sel4").className = "home-navBar-back-item";
  //Home Back Image
  document.getElementById("img-sel1").style.backgroundPosition = "0px 0px";
  document.getElementById("img-sel2").style.backgroundPosition = "0px 0px";
  document.getElementById("img-sel3").style.backgroundPosition = "0px 0px";
  document.getElementById("img-sel4").style.backgroundPosition = "0px 0px";
  switch (el) {
    case "hover1":
      //Navbar
      document.getElementById("hover1").className =
        "navigator-navBar-item hover selected";
      document.getElementById("navigator-navBar-drag").style.left = "2px";
      //Home Front
      document.getElementById("nav-sel1").className =
        "home-navBar-front-item selected";
      document.getElementById("home-navBar-front-container").style.left =
        "700px";
      //Home Back
      document.getElementById("back-sel1").className =
        "home-navBar-back-item selected";
      //Home Back Image
      document.getElementById("img-sel1").style.backgroundPosition =
        "-241px -1446px";
      //Home Back Position
      document.getElementById("home-navBar-back-container").style.top =
        "-4200px";
      document.getElementById("home-navBar-back-container").style.left =
        "-1100px";
      break;
    case "hover2":
      //Navbar
      document.getElementById("hover2").className =
        "navigator-navBar-item hover selected";
      document.getElementById("navigator-navBar-drag").style.left = "32px";
      //Home Front
      document.getElementById("nav-sel2").className =
        "home-navBar-front-item selected";
      document.getElementById("home-navBar-front-container").style.left =
        "300px";
      //Home Back
      document.getElementById("back-sel2").className =
        "home-navBar-back-item selected";
      //Home Back Image
      document.getElementById("img-sel2").style.backgroundPosition =
        "-241px -1446px";
      //Home Back Position
      document.getElementById("home-navBar-back-container").style.top =
        "-4080px";
      document.getElementById("home-navBar-back-container").style.left =
        "-1220px";
      break;
    case "hover3":
      //Navbar
      document.getElementById("hover3").className =
        "navigator-navBar-item hover selected";
      document.getElementById("navigator-navBar-drag").style.left = "62px";
      //Home Front
      document.getElementById("nav-sel3").className =
        "home-navBar-front-item selected";
      document.getElementById("home-navBar-front-container").style.left =
        "-200px";
      //Home Back
      document.getElementById("back-sel3").className =
        "home-navBar-back-item selected";
      //Home Back Image
      document.getElementById("img-sel3").style.backgroundPosition =
        "-241px -1446px";
      //Home Back Position
      document.getElementById("home-navBar-back-container").style.top =
        "-3960px";
      document.getElementById("home-navBar-back-container").style.left =
        "-1340px";
      break;
    case "hover4":
      //Navbar
      document.getElementById("hover4").className =
        "navigator-navBar-item hover selected";
      document.getElementById("navigator-navBar-drag").style.left = "92px";
      //Home Front
      document.getElementById("nav-sel4").className =
        "home-navBar-front-item selected";
      document.getElementById("home-navBar-front-container").style.left =
        "-700px";
      //Home Back
      document.getElementById("back-sel4").className =
        "home-navBar-back-item selected";
      //Home Back Image
      document.getElementById("img-sel4").style.backgroundPosition =
        "-241px -1446px";
      //Home Back Position
      document.getElementById("home-navBar-back-container").style.top =
        "-3840px";
      document.getElementById("home-navBar-back-container").style.left =
        "-1460px";
      break;
    default:
      console.log("default");
  }
};

export default Nav;
