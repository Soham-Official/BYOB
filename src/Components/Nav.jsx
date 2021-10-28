import React from "react";
import "../Styles/nav.css";
import nav1 from "../Images/nav1.png";
import nav2 from "../Images/nav2.png";
import nav3 from "../Images/nav3.png";
import nav4 from "../Images/nav4.png";
import sprite from "../Images/sprite.png";
import navLogo from "../Images/navLogo.png";

const Nav = () => {
  return (
    <div className="navBar-container">
      <div id="main-navBar-home">
        {/* <!-- The background mosaic with the visuals moving in diagonal -->
            <!--
            For home-back change:
                home-back-container style to change px
                home-back-item to home-back-item selected
                home-back-item-transition to change px for background-position: -241px -1446px
        --> */}
        <div id="home-navBar-back">
          <div
            id="home-navBar-back-container"
            style={{
              top: "-4020.5px",
              left: "-1195.5px",
              paddingTop: "2968px",
              paddingBottom: "2827px",
              backgroundPosition: "1391px 985px",
            }}
          >
            <div className="home-navBar-back-item selected">
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
            <div className="home-navBar-back-item">
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
            <div className="home-navBar-back-item">
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
            <div className="home-navBar-back-item">
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
                    style={{ backgroundimage: `url(${nav4})` }}
                  ></div>
                  <div
                    className="home-navBar-back-item-transition"
                    style={{
                      width: "241px",
                      height: "241px",
                      backgroundImage: `url(${sprite})`,
                      backgroundRepeat: "no-repeat",
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
                home-front-container to change px
                home-front-item to home-front-item
        --> */}
        <div id="home-navBar-front">
          <div id="home-navBar-front-container" style={{ left: "700px" }}>
            <div className="home-navBar-front-item selected">
              <div className="title">
                <a href="#!/whoweare/" className="">
                  WHO WE ARE
                </a>
              </div>
              <div className="description">Telling fascinating stories</div>
            </div>
            <div className="home-navBar-front-item">
              <div className="title">
                <a href="#!/ralphlauren/" className="">
                  RALPH LAUREN
                </a>
              </div>
              <div className="description">Forget me not</div>
            </div>
            <div className="home-navBar-front-item">
              <div className="title">
                <a href="#!/bose/" className="">
                  BOSE
                </a>
              </div>
              <div className="description">
                Treating the sound as a part of the picture
              </div>
            </div>
            <div className="home-navBar-front-item">
              <div className="title">
                <a href="#!/bullittagency/" className="">
                  INTERACTIVE DESIGNS
                </a>
              </div>
              <div className="description">
                We try to make the web a better world
              </div>
            </div>
          </div>
        </div>

        {/* <!--
            For nav change:
                navigator-item hover to navigator-item hover selected
                navigator-drag to change px
        --> */}
        <div id="nav-navBar" style={{ display: "block" }}>
          <img
            src={navLogo}
            id="logo-navBar"
            style={{ bottom: "17px", opacity: 1 }}
            alt="logo"
          />

          <div
            id="nav-navBar-container"
            className=""
            style={{ height: "73px" }}
          >
            <div id="navigator-navBar-container">
              <div id="navigator-navBar" style={{ width: "121px" }}>
                <div id="first-navigator-navBar-item"></div>
                <div className="navigator-navBar-item hover selected"></div>
                <div className="navigator-navBar-item hover"></div>
                <div className="navigator-navBar-item hover"></div>
                <div className="navigator-navBar-item hover"></div>
                <div id="navigator-navBar-drag" style={{ left: "1px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
