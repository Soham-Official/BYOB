import React from "react";
import "../Styles/nav.css";

const Nav = () => {
  return (
    <div class="navBar-container">
      <div id="main-home">
        {/* <!-- The background mosaic with the visuals moving in diagonal -->
            <!--
            For home-back change:
                home-back-container style to change px
                home-back-item to home-back-item selected
                home-back-item-transition to change px for background-position: -241px -1446px
        --> */}
        <div id="home-navBar-back">
          <div
            id="home-back-container"
            style="top: -4020.5px; left: -1195.5px; padding-top: 2968px; padding-bottom: 2827px; background-position: 1391px 985px;"
          >
            <div class="home-back-item selected">
              <div>
                <div class="home-back-item-nb" style="margin-top:1650px">
                  01
                </div>
                <div class="home-back-item-bg" style="margin-top:1650px">
                  <div
                    class="home-back-item-background"
                    style='background-image: url("1.png"); opacity: 1;'
                  ></div>
                  <div
                    class="home-back-item-transition"
                    style='width: 241px; height: 241px; background-image: url("sprite.png"); background-repeat: no-repeat; background-position: -241px -1446px;'
                  ></div>
                </div>
              </div>
            </div>
            <div class="home-back-item">
              <div>
                <div class="home-back-item-nb" style="margin-top:1515px">
                  02
                </div>
                <div class="home-back-item-bg" style="margin-top:1515px">
                  <div
                    class="home-back-item-background"
                    style='background-image: url("2.png"); opacity: 1;'
                  ></div>
                  <div
                    class="home-back-item-transition"
                    style='width: 241px; height: 241px; background-image: url("sprite.png"); background-repeat: no-repeat; background-position: 0px 0px;'
                  ></div>
                </div>
              </div>
            </div>
            <div class="home-back-item">
              <div>
                <div class="home-back-item-nb" style="margin-top:1380px">
                  03
                </div>
                <div class="home-back-item-bg" style="margin-top:1380px">
                  <div
                    class="home-back-item-background"
                    style='background-image: url("3.png"); opacity: 1;'
                  ></div>
                  <div
                    class="home-back-item-transition"
                    style='width: 241px; height: 241px; background-image: url("sprite.png"); background-repeat: no-repeat; background-position: 0px 0px;'
                  ></div>
                </div>
              </div>
            </div>
            <div class="home-back-item">
              <div>
                <div class="home-back-item-nb" style="margin-top:1245px">
                  04
                </div>
                <div class="home-back-item-bg" style="margin-top:1245px">
                  <div
                    class="home-back-item-background"
                    style="background-image:url('4.png');"
                  ></div>
                  <div
                    class="home-back-item-transition"
                    style='width: 241px; height: 241px; background-image: url("sprite.png"); background-repeat: no-repeat;'
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
        <div id="home-front">
          <div id="home-front-container" style="left: 700px;">
            <div class="home-front-item selected">
              <div class="title">
                <a href="#!/whoweare/" class="">
                  WHO WE ARE
                </a>
              </div>
              <div class="description">Telling fascinating stories</div>
            </div>
            <div class="home-front-item">
              <div class="title">
                <a href="#!/ralphlauren/" class="">
                  RALPH LAUREN
                </a>
              </div>
              <div class="description">Forget me not</div>
            </div>
            <div class="home-front-item">
              <div class="title">
                <a href="#!/bose/" class="">
                  BOSE
                </a>
              </div>
              <div class="description">
                Treating the sound as a part of the picture
              </div>
            </div>
            <div class="home-front-item">
              <div class="title">
                <a href="#!/bullittagency/" class="">
                  INTERACTIVE DESIGNS
                </a>
              </div>
              <div class="description">
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
        <div id="nav" style="display: block;">
          <img
            src="logo.png"
            id="logo"
            style="bottom: 17px; opacity: 1;"
            alt="logo"
          />

          <div id="nav-container" class="" style="height: 63px;">
            <div id="navigator-container">
              <div id="navigator" style="width:121px">
                <div id="first-navigator-item"></div>
                <div class="navigator-item hover selected"></div>
                <div class="navigator-item hover"></div>
                <div class="navigator-item hover"></div>
                <div class="navigator-item hover"></div>
                <div id="navigator-drag" style="left: 1px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
