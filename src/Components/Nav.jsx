import React from "react";
import "../Styles/nav.css";

const Nav = () => {
  return (
    //     <div id="container">
    // 			<div id="main" class="four" style="top: -937px;">

    // 				<div id="module-navigator" class="fullscreen">

    // 					<div id="handler" class="ui-draggable" style="left: -17745px;">
    // 						<div id="loader" style="display: none;"><div id="main-loader" class="" style="display: none;">

    // 	<div id="main-loader-ellipse"></div>
    // 	<div id="main-loader-item">
    // 		<div id="main-loader-background" style="width: 260px;"></div>
    // 		<img src="skins/blacknegative/images/loader.png">
    // 	</div>

    // 	<div id="tutorial" style="display: block; width: 226px; height: 68px; background-image: url(&quot;skins/blacknegative/images/tutorial.gif&quot;); background-repeat: no-repeat; background-position: -1582px -204px;"></div>
    // 	<div id="txt-drag" style="display: block; opacity: 1;"></div>
    // </div></div>
    // 						<div id="whoweare" style="display: none;"><div id="main-whoweare" style="display: none;">

    // 	<div id="whoweare-container">

    // 		<div id="whoweare-loop" style="opacity: 1;">
    // 			<div id="whoweare-loop-video"><video autoplay="" loop="" style="height: 937px; width: 1665.78px; left: -150px; top: 0px;"><source src="uploads/section/whoweare/loop.mp4" type="video/mp4"><source src="uploads/section/whoweare/loop.webm" type="video/webm"><source src="uploads/section/whoweare/loop.ogv" type="video/ogg"></video></div>
    // 		</div>
    // 		<div id="whoweare-mask"></div>

    // 		<div id="whoweare-section-container" style="margin-top: -67px;">
    // 			<div class="whoweare-section hover" id="telling">

    // 				<div class="whoweare-title" style="height: 24px; margin-top: 0px; margin-bottom: 0px;">
    // 					<span>Telling</span>
    // 					<div class="section-hover" style="opacity: 0;"></div>
    // 					<div class="whoweare-popup" id="whoweare-popup1" style="display: none;">

    // 						<div class="whoweare-description">We seek nothing less than to be a source of inspiration, revealing your true ambitions.</div>
    // 					</div>
    // 				</div>
    // 			</div>
    // 			<div class="whoweare-section-separation"></div>
    // 			<div class="whoweare-section hover" id="fascinating">
    // 				<div class="whoweare-title" style="height: 24px; margin-top: 0px; margin-bottom: 0px;">
    // 					<span>Fascinating</span>
    // 					<div class="section-hover" style="opacity: 0;"></div>
    // 					<div class="whoweare-popup" id="whoweare-popup2" style="display: none;">

    // 						<div class="whoweare-description">
    // 							We deliver nothing less than incredible individuals, with the distinctive ability to imagine, create and innovate.
    // 						</div>
    // 					</div>
    // 				</div>

    // 			</div>
    // 			<div class="whoweare-section-separation"></div>
    // 			<div class="whoweare-section hover" id="story">
    // 				<div class="whoweare-title" style="height: 24px; margin-top: 0px; margin-bottom: 0px;">
    // 					<span>Stories</span>
    // 					<div class="section-hover" style="opacity: 0;"></div>
    // 					<div class="whoweare-popup" id="whoweare-popup3" style="display: none;">

    // 						<div class="whoweare-description">We are directors, motion designers, photographers, web designers, developers, sound designers and we give you nothing less than the most beautiful ways to tell your story.</div>
    // 					</div>
    // 				</div>

    // 			</div>
    // 		</div>

    // 		<div id="whoweare-caption"></div>
    // 	</div>
    // </div></div>
    // 					<div id="ralphlauren" style="display: none;"><div id="main-ralphlauren" style="display: none;">

    // 	<div id="ralph-container">

    // 		<div id="ralph-back"></div>
    // 		<div id="ralph-placeholder">
    // 			<div id="ralph-video"></div>
    // 		</div>
    // 		<div id="ralph-intro">

    // 			<div class="ralph-sub" id="photo-one"></div>
    // 			<div class="ralph-sub" id="video-one">
    // 				<div id="ralph-one-mask"></div>
    // 				<div id="video-one-handler">
    // 					<div id="video-one-placeholder"></div>
    // 				</div>
    // 			</div>
    // 			<div class="ralph-sub" id="video-two"></div>
    // 			<div class="ralph-sub">
    // 				<div id="ralph-launch">
    // 					<div id="ralph-launch-normal">
    // 						RALPH LAUREN
    // 						Forget me not
    // 					</div>
    // 					<div id="ralph-launch-over">
    // 						RALPH LAUREN
    // 						Forget me not
    // 					</div>
    // 				</div>
    // 				<div id="ralph-photo2"></div>
    // 				<div id="ralph-photo3"></div>
    // 			</div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="bose" style="display: none;"><div id="main-bose" style="display: none;">

    // 	<div id="bose-container">

    // 		<div id="bose-back"></div>
    // 		<div id="bose-placeholder">
    // 			<div id="bose-video"></div>
    // 		</div>
    // 		<div id="bose-intro">

    // 			<div id="bose-loop">
    // 				<div id="bose-loop-video"></div>
    // 			</div>
    // 			<div id="bose-mask"></div>
    // 			<div id="bose-evolve"></div>
    // 			<div id="bose-making"></div>
    // 			<div id="bose-line"></div>
    // 			<!-- <div id="bose-text-bg"></div> -->
    // 			<div id="bose-ready" class="hover"></div>
    // 			<div id="bose-over"></div>
    // 			<div id="bose-sounddesign"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="bullittagency" style="display: none;"><div id="main-bullittagency" style="display: none;">

    // 	<div id="bullitt-mask"></div>

    // 	<div id="bullitt-bg"></div>
    // 	<div id="bullitt-loop">
    // 		<div id="bullitt-loop-video"></div>
    // 	</div>

    // 	<div id="bullitt-text">Blacknegative collaborates with its talented art directors, designers, developpers to find the best creative solutions IN ORDER TO create outstanding interactive experiences.</div>
    // 	<div id="bullitt-launch"><a href="http://www.thebullittagency.com" target="_blank"></a></div>

    // 	<div id="bullitt-intro" style="width: 1380px; height: 1023px; top: -86px; left: -15px;"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/wetry.jpg&quot;);"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/m.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/a.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/k.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/e.jpg&quot;);"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/t.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/h.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/ee.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/line.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/w.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/eee.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/b.jpg&quot;);"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/aa.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/lineline.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/bb.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/eeee.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/tt.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/ttt.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/eeeee.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/r.jpg&quot;);"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/p.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/l.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/a.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/c.jpg&quot;);"></div><div style="background-image: url(&quot;skins/blacknegative/images/bullitt/e.jpg&quot;);"></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

    // </div></div>
    // <div id="adisseo" style="display: none;"><div id="main-adisseo" style="display: none;">

    // 	<div id="adisseo-container">

    // 		<div id="adisseo-back"></div>
    // 		<div id="adisseo-placeholder">
    // 			<div id="adisseo-video"></div>
    // 		</div>
    // 		<div id="adisseo-intro">

    // 			<div id="adisseo-bg"></div>
    // 			<div id="adisseo-content">
    // 				<div id="adisseo-hover"></div>
    // 				<div id="adisseo-elipse"></div>
    // 				<div id="adisseo-sprite"></div>
    // 				<div id="adisseo-slide" class="hover"></div>
    // 				<div id="adisseo-casestudy"></div>
    // 				<div id="adisseo-separation"></div>
    // 				<div id="adisseo-launch">
    // 					<div id="adisseo-launch-img"></div>
    // 					<div id="adisseo-separation2"></div>
    // 				</div>

    // 			</div>

    // 		</div>

    // 	</div>

    // </div>

    // </div>
    // <div id="kindy" style="display: none;"><div id="main-kindy" style="display: none;">

    // 	<div id="kindy-container">

    // 		<div id="kindy-back"></div>
    // 		<div id="kindy-placeholder-video">

    // 			<div id="kindy-video-full"></div>
    // 		</div>

    // 		<div id="kindy-intro">

    // 			<div id="kindy-background">
    // 				<div id="kindy-loop">
    // 					<div id="kindy-loop-video"></div>
    // 				</div>
    // 				<div id="kindy-mask"></div>
    // 			</div>

    // 			<div id="kindy-circle"></div>
    // 			<div id="spriteCircle"></div>
    // 			<div id="kindy-find"></div>
    // 			<div id="kindy-adventures"></div>
    // 			<div id="kindy-launch" class="hover"></div>
    // 			<div id="kindy-section">
    // 				<ul>
    // 					<li class="hover current">Blockbuster</li>
    // 					<li class="hover">Speed dating</li>
    // 					<li class="hover">Psycholuv' Story</li>
    // 				</ul>
    // 			</div>

    // 			<div id="spriteIn"></div>
    // 			<div id="spriteTitle"></div>

    // 			<div id="kindy-section1"></div>
    // 			<div id="kindy-section2"></div>
    // 			<div id="kindy-section3"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="sanofi" style="display: none;"><div id="main-sanofi" style="display: none;">

    // 	<div id="sanofi-container">

    // 		<div id="sanofi-back"></div>
    // 		<div id="sanofi-placeholder">
    // 			<div id="sanofi-video"></div>
    // 		</div>
    // 		<div id="sanofi-intro">

    // 			<div id="sanofi-background" data-depth="0.4"></div>

    // 			<div id="sanofi-flou" data-depth="0.4"></div>

    // 			<div id="sanofi-find" class="parallax-obj" data-depth="0.1" data-top="-203" data-left="-407" style="display: none;"></div>
    // 			<div id="sanofi-known" class="parallax-obj" data-depth="0.2" data-top="193" data-left="-136" style="display: none;"></div>
    // 			<div id="sanofi-lines" class="parallax-obj" data-depth="0.2" data-top="0" data-left="-282" style="display: none;"></div>
    // 			<div id="sanofi-stockholm" class="parallax-obj" data-depth="0.3" data-top="40" data-left="-382" style="display: none;"></div>

    // 			<div id="sanofi-stroke" class="parallax-obj" data-depth="0.4" data-top="-109" data-left="-109" style="display: none;"></div>
    // 			<div id="sanofi-stroke1" class="parallax-obj" data-depth="0.9" data-top="-171" data-left="-170" style="display: none;"></div>
    // 			<div id="sanofi-stroke2" class="parallax-obj" data-depth="0.6" data-top="-148" data-left="-149" style="display: none;"></div>

    // 			<div id="sanofi-launch" class="hover parallax-obj" data-depth="0.1" data-top="-112" data-left="-108" style="display: none;">
    // 				<span>SANOFI</span><br>AT EUROPEAN SOCIETY<br>OF CARDIOLOGY
    // 			</div>

    // 		</div>

    // 	</div>

    // </div></div>

    // <div id="news" style="display: none;"><div id="main-news" style="display: none;">

    // 	<div id="news-cont">

    // 		<div id="news-back"></div>
    // 		<div id="news-placeholder-video">
    // 			<div id="news-video"></div>
    // 		</div>

    // 		<div id="news-intro">
    // 			<div id="news-loop">
    // 				<div id="news-loop-video"></div>
    // 			</div>

    // 			<div id="news-mask"></div>
    // 			<div id="news-container" style="overflow: hidden; padding: 0px; width: 100px;">

    // 			<div class="jspContainer" style="width: 100px; height: 100px;"><div class="jspPane" style="padding: 0px; top: 0px; width: 100px;"><div id="news-scroll-line"></div><div id="news-content-handler">

    // 					<div id="news-hot"></div>
    // 					<div id="news-lines"></div>

    // 					<div id="news-handler">

    // 						<div id="news-placeholder" style="height:1366.6666666667px">
    // 														<div class="news-item" style="position:absolute; top:315px; z-index:300; left:0px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/open-your-eyes.png" width="398" height="608">
    // 									<img src="uploads/section/news/open-your-eyes2.png" width="398" height="608">
    // 									<img src="uploads/section/news/open-your-eyes3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Mystical</div>
    // 								<div class="news-title">open.your.eyes</div>
    // 								<div class="news-description">A gripping video to entice visitors</div>
    // 							</div>
    // 														<div class="news-item"></div>
    // 							<div class="news-item"></div>
    // 																					<div class="news-item" style="position:absolute; top:464px; z-index:300; left:400px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/kiss-the-blade.png" width="398" height="608">
    // 									<img src="uploads/section/news/kiss-the-blade2.png" width="398" height="608">
    // 									<img src="uploads/section/news/kiss-the-blade3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Unexpected</div>
    // 								<div class="news-title">kiss.the.blade</div>
    // 								<div class="news-description">Fictional characters for the biggest spa in Paris</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:233px; z-index:300; left:800px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/pieces-of-heroes.png" width="398" height="608">
    // 									<img src="uploads/section/news/pieces-of-heroes2.png" width="398" height="608">
    // 									<img src="uploads/section/news/pieces-of-heroes3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Thunderous</div>
    // 								<div class="news-title">pieces.of.heroes</div>
    // 								<div class="news-description">FX jingle designed for Adidas</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:695px; z-index:300; left:0px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/multaq-guidelines.png" width="398" height="608">
    // 									<img src="uploads/section/news/multaq-guidelines2.png" width="398" height="608">
    // 									<img src="uploads/section/news/multaq-guidelines3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Focusing</div>
    // 								<div class="news-title">Multaq guidelines</div>
    // 								<div class="news-description">Customized interviews for sanofi worldwide</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:844px; z-index:300; left:400px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/shocking.png" width="398" height="608">
    // 									<img src="uploads/section/news/shocking2.png" width="398" height="608">
    // 									<img src="uploads/section/news/shocking3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Vintage</div>
    // 								<div class="news-title">Shocking!</div>
    // 								<div class="news-description">Timeless scenes for a Karl Lagerfeld ad</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:613px; z-index:300; left:800px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/the-dancer.png" width="398" height="608">
    // 									<img src="uploads/section/news/the-dancer2.png" width="398" height="608">
    // 									<img src="uploads/section/news/the-dancer3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Social</div>
    // 								<div class="news-title">The dancer</div>
    // 								<div class="news-description">Brand movie to gather the Reebok community</div>
    // 							</div>
    // 																				</div>

    // 					</div>
    // 				</div></div></div></div>
    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="twist" style="display: none;"><div id="main-twist" style="display: none;">

    // 	<div id="twist-container">

    // 		<div id="twist-back"></div>
    // 		<div id="twist-placeholder">
    // 			<div id="twist-video"></div>
    // 		</div>
    // 		<div id="twist-intro">

    // 			<div id="twist-ecran2">
    // 				<div id="twist-launch" class="hover"></div>
    // 				<div id="twist-sprite1"></div>
    // 				<div id="twist-sprite2"></div>
    // 				<div id="twist-sprite3"></div>
    // 				<div id="twist-sprite4"></div>
    // 			</div>
    // 			<div id="twist-ecran1">
    // 				<div id="twist-launch1"></div>
    // 				<div id="twist-background"></div>
    // 				<div id="twist-action" class="hover"></div>
    // 				<img src="skins/blacknegative/images/twist/circle.png" id="twist-circle" class="hover">
    // 				<img src="skins/blacknegative/images/twist/go.png" id="twist-go" class="hover">
    // 			</div>

    // 			<div id="twist-transition"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="luminarc" style="display: none;"><div id="main-luminarc" style="display: none;">

    // 	<div id="luminarc-container">

    // 		<div id="luminarc-back"></div>
    // 		<div id="luminarc-placeholder">
    // 			<div id="luminarc-video"></div>
    // 		</div>
    // 		<div id="luminarc-intro">

    // 			<div id="luminarc-mask"></div>
    // 			<div id="luminarc-loop">
    // 				<div id="luminarc-loop-video"></div>
    // 			</div>

    // 			<div id="luminarc-logo"></div>
    // 			<div id="luminarc-text"></div>
    // 			<div id="luminarc-launch" class="hover"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="client" style="display: none;"><div id="main-client" style="display: none;">

    // 	<div id="client-loop">
    // 		<div id="client-loop-video"></div>
    // 	</div>
    // 	<div id="client-mask"></div>

    // 	<div id="client-grid"></div>
    // 	<div id="client-work">Working with us</div>
    // 	<div id="client-good"></div>
    // 	<div id="client-launch" class="hover"></div>
    // 	<div id="client-back" class="hover"></div>

    // 	<div id="client1" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>

    // 	<div id="client2" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client3" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client4" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client5" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client6" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client7" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client8" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client9" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client10" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client12" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client13" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client14" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client15" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client16" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>

    // </div></div>
    // <div id="ownthesky" style="display: none;"><div id="main-ownthesky" style="display: block;">

    // 	<div id="ownthesky-container">

    // 		<div id="ownthesky-back"></div>
    // 		<div id="ownthesky-placeholder">
    // 			<div id="ownthesky-video"></div>
    // 		</div>
    // 		<div id="ownthesky-intro">

    // 			<div id="ownthesky-mask"></div>
    // 			<div id="ownthesky-loop">
    // 				<div id="ownthesky-loop-video"></div>
    // 			</div>

    // 			<div id="ownthesky-logo"></div>
    // 			<div id="ownthesky-launch" class="hover"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="citroen" style="display: none;"><div id="main-citroen" style="display: block;">

    // 	<div id="citroen-container" style="top: 0px;">

    // 		<div id="citroen-back"></div>
    // 		<div id="citroen-placeholder">
    // 			<div id="citroen-video"></div>
    // 		</div>
    // 		<div id="citroen-intro">

    // 			<div id="citroen-background" data-depth="0.4" style="left: -682.5px; top: -468.5px;"></div>
    // 			<div id="citroen-link" class="parallax-obj" data-top="-60" data-left="120" data-depth="0.2" style="margin-left: 20px; margin-top: -160px;">
    // 				<div id="citroen-imagine"></div>
    // 				<div id="citroen-launch"></div>
    // 			</div>

    // 			<div id="citroen-obj1" class="parallax-obj" data-top="30" data-left="-600" data-depth="1.9" style="background-image: url(&quot;skins/blacknegative/images/citroen/obj1.png&quot;); margin-left: -700px; margin-top: -70px;"></div>
    // 			<div id="citroen-obj2" class="parallax-obj" data-top="130" data-left="-700" data-depth="0.3" style="background-image: url(&quot;skins/blacknegative/images/citroen/obj2.png&quot;); margin-left: -800px; margin-top: 30px;"></div>
    // 			<div id="citroen-obj3" class="parallax-obj" data-top="160" data-left="-600" data-depth="0.2" style="background-image: url(&quot;skins/blacknegative/images/citroen/obj3.png&quot;); margin-left: -700px; margin-top: 60px;"></div>
    // 			<div id="citroen-obj4" class="parallax-obj" data-top="200" data-left="550" data-depth="1.5" style="background-image: url(&quot;skins/blacknegative/images/citroen/obj4.png&quot;); margin-left: 450px; margin-top: 100px;"></div>
    // 			<div id="citroen-obj5" class="parallax-obj" data-top="220" data-left="400" data-depth="0.2" style="background-image: url(&quot;skins/blacknegative/images/citroen/obj5.png&quot;); margin-left: 300px; margin-top: 120px;"></div>
    // 			<div id="citroen-obj6" class="parallax-obj" data-top="260" data-left="300" data-depth="0.3" style="background-image: url(&quot;skins/blacknegative/images/citroen/obj6.png&quot;); margin-left: 200px; margin-top: 160px;"></div>
    // 			<div id="citroen-obj7" class="parallax-obj" data-top="230" data-left="-270" data-depth="0.2" style="background-image: url(&quot;skins/blacknegative/images/citroen/obj7.png&quot;); margin-left: -370px; margin-top: 130px;"></div>
    // 			<div id="citroen-obj8" class="parallax-obj" data-top="-70" data-left="120" data-depth="1" style="background-image: url(&quot;skins/blacknegative/images/citroen/obj8.png&quot;); margin-left: 20px; margin-top: -170px;"></div>
    // 			<div id="citroen-obj9" class="parallax-obj" data-top="-150" data-left="-10" data-depth="0.8" style="background-image: url(&quot;skins/blacknegative/images/citroen/obj9.png&quot;); margin-left: -110px; margin-top: -250px;"></div>
    // 			<div id="citroen-obj10" class="parallax-obj" data-top="-160" data-left="-90" data-depth="0.3" style="background-image: url(&quot;skins/blacknegative/images/citroen/obj10.png&quot;); margin-left: -190px; margin-top: -260px;"></div>

    // 			<div id="citroen-drag-bg"></div>

    // 			<div id="citroen-logo"></div>

    // 			<div id="main-sequence">
    // 				<div class="current" style="background-image:url('uploads/section/citroen/sequence/sequence_00000.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00001.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00002.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00003.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00004.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00005.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00006.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00007.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00008.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00009.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00010.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00011.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00012.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00013.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00014.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00015.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00016.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00017.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00018.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00019.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00020.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00021.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00022.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00023.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00024.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00025.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00026.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00027.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00028.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00029.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00030.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00031.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00032.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00033.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00034.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00035.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00036.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00037.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00038.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00039.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00040.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00041.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00042.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00043.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00044.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00045.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00046.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00047.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00048.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00049.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00050.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00051.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00052.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00053.jpg')"></div>
    // 			</div>

    // 			<div id="citroen-dragbar">
    // 				<div id="citroen-drag-over" class="ui-draggable" style="left: 0px;"></div>
    // 				<div id="citroen-drag" style="width: 150px; height: 35px; background-image: url(&quot;skins/blacknegative/images/citroen/sprite.gif&quot;); background-repeat: no-repeat; background-position: -600px 0px;"></div>
    // 			</div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="contact" style="display: none;"><div id="main-contact" style="display: block;">

    // 	<div id="contact-loop">
    // 		<div id="contact-loop-video"></div>
    // 	</div>

    // 	<div id="contact-hello-bg"></div>
    // 	<div id="contact-hello"></div>

    // 	<a href="mailto:hello@blacknegative.com" id="contact-email" target="_blank"></a>

    // 	<div id="contact-mask"></div>

    // 	<div id="contact-text"></div>

    // 	<div id="see-all"></div>

    // </div></div><div id="ralphlauren" style="display: none;"><div id="main-ralphlauren" style="display: none;">

    // 	<div id="ralph-container">

    // 		<div id="ralph-back"></div>
    // 		<div id="ralph-placeholder">
    // 			<div id="ralph-video"></div>
    // 		</div>
    // 		<div id="ralph-intro">

    // 			<div class="ralph-sub" id="photo-one"></div>
    // 			<div class="ralph-sub" id="video-one">
    // 				<div id="ralph-one-mask"></div>
    // 				<div id="video-one-handler">
    // 					<div id="video-one-placeholder"></div>
    // 				</div>
    // 			</div>
    // 			<div class="ralph-sub" id="video-two"></div>
    // 			<div class="ralph-sub">
    // 				<div id="ralph-launch">
    // 					<div id="ralph-launch-normal">
    // 						RALPH LAUREN
    // 						Forget me not
    // 					</div>
    // 					<div id="ralph-launch-over">
    // 						RALPH LAUREN
    // 						Forget me not
    // 					</div>
    // 				</div>
    // 				<div id="ralph-photo2"></div>
    // 				<div id="ralph-photo3"></div>
    // 			</div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="bose" style="display: none;"><div id="main-bose" style="display: none;">

    // 	<div id="bose-container">

    // 		<div id="bose-back"></div>
    // 		<div id="bose-placeholder">
    // 			<div id="bose-video"></div>
    // 		</div>
    // 		<div id="bose-intro">

    // 			<div id="bose-loop">
    // 				<div id="bose-loop-video"></div>
    // 			</div>
    // 			<div id="bose-mask"></div>
    // 			<div id="bose-evolve"></div>
    // 			<div id="bose-making"></div>
    // 			<div id="bose-line"></div>
    // 			<!-- <div id="bose-text-bg"></div> -->
    // 			<div id="bose-ready" class="hover"></div>
    // 			<div id="bose-over"></div>
    // 			<div id="bose-sounddesign"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="bullittagency" style="display: none;"><div id="main-bullittagency" style="display: none;">

    // 	<div id="bullitt-mask"></div>

    // 	<div id="bullitt-bg"></div>
    // 	<div id="bullitt-loop">
    // 		<div id="bullitt-loop-video"></div>
    // 	</div>

    // 	<div id="bullitt-text">Blacknegative collaborates with its talented art directors, designers, developpers to find the best creative solutions IN ORDER TO create outstanding interactive experiences.</div>
    // 	<div id="bullitt-launch"><a href="http://www.thebullittagency.com" target="_blank"></a></div>

    // 	<div id="bullitt-intro">
    // 	</div>

    // </div></div>
    // <div id="adisseo" style="display: none;"><div id="main-adisseo" style="display: none;">

    // 	<div id="adisseo-container">

    // 		<div id="adisseo-back"></div>
    // 		<div id="adisseo-placeholder">
    // 			<div id="adisseo-video"></div>
    // 		</div>
    // 		<div id="adisseo-intro">

    // 			<div id="adisseo-bg"></div>
    // 			<div id="adisseo-content">
    // 				<div id="adisseo-hover"></div>
    // 				<div id="adisseo-elipse"></div>
    // 				<div id="adisseo-sprite"></div>
    // 				<div id="adisseo-slide" class="hover"></div>
    // 				<div id="adisseo-casestudy"></div>
    // 				<div id="adisseo-separation"></div>
    // 				<div id="adisseo-launch">
    // 					<div id="adisseo-launch-img"></div>
    // 					<div id="adisseo-separation2"></div>
    // 				</div>

    // 			</div>

    // 		</div>

    // 	</div>

    // </div>

    // </div>
    // <div id="kindy" style="display: none;"><div id="main-kindy" style="display: none;">

    // 	<div id="kindy-container">

    // 		<div id="kindy-back"></div>
    // 		<div id="kindy-placeholder-video">

    // 			<div id="kindy-video-full"></div>
    // 		</div>

    // 		<div id="kindy-intro">

    // 			<div id="kindy-background">
    // 				<div id="kindy-loop">
    // 					<div id="kindy-loop-video"></div>
    // 				</div>
    // 				<div id="kindy-mask"></div>
    // 			</div>

    // 			<div id="kindy-circle"></div>
    // 			<div id="spriteCircle"></div>
    // 			<div id="kindy-find"></div>
    // 			<div id="kindy-adventures"></div>
    // 			<div id="kindy-launch" class="hover"></div>
    // 			<div id="kindy-section">
    // 				<ul>
    // 					<li class="hover current">Blockbuster</li>
    // 					<li class="hover">Speed dating</li>
    // 					<li class="hover">Psycholuv' Story</li>
    // 				</ul>
    // 			</div>

    // 			<div id="spriteIn"></div>
    // 			<div id="spriteTitle"></div>

    // 			<div id="kindy-section1"></div>
    // 			<div id="kindy-section2"></div>
    // 			<div id="kindy-section3"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="sanofi" style="display: none;"><div id="main-sanofi" style="display: none;">

    // 	<div id="sanofi-container">

    // 		<div id="sanofi-back"></div>
    // 		<div id="sanofi-placeholder">
    // 			<div id="sanofi-video"></div>
    // 		</div>
    // 		<div id="sanofi-intro">

    // 			<div id="sanofi-background" data-depth="0.4"></div>

    // 			<div id="sanofi-flou" data-depth="0.4"></div>

    // 			<div id="sanofi-find" class="parallax-obj" data-depth="0.1" data-top="-203" data-left="-407"></div>
    // 			<div id="sanofi-known" class="parallax-obj" data-depth="0.2" data-top="193" data-left="-136"></div>
    // 			<div id="sanofi-lines" class="parallax-obj" data-depth="0.2" data-top="0" data-left="-282"></div>
    // 			<div id="sanofi-stockholm" class="parallax-obj" data-depth="0.3" data-top="40" data-left="-382"></div>

    // 			<div id="sanofi-stroke" class="parallax-obj" data-depth="0.4" data-top="-109" data-left="-109"></div>
    // 			<div id="sanofi-stroke1" class="parallax-obj" data-depth="0.9" data-top="-171" data-left="-170"></div>
    // 			<div id="sanofi-stroke2" class="parallax-obj" data-depth="0.6" data-top="-148" data-left="-149"></div>

    // 			<div id="sanofi-launch" class="hover parallax-obj" data-depth="0.1" data-top="-112" data-left="-108">
    // 				<span>SANOFI</span><br>AT EUROPEAN SOCIETY<br>OF CARDIOLOGY
    // 			</div>

    // 		</div>

    // 	</div>

    // </div></div>

    // <div id="news" style="display: none;"><div id="main-news" style="display: none;">

    // 	<div id="news-cont">

    // 		<div id="news-back"></div>
    // 		<div id="news-placeholder-video">
    // 			<div id="news-video"></div>
    // 		</div>

    // 		<div id="news-intro">
    // 			<div id="news-loop">
    // 				<div id="news-loop-video"></div>
    // 			</div>

    // 			<div id="news-mask"></div>
    // 			<div id="news-container">

    // 				<div id="news-scroll-line"></div>
    // 				<div id="news-content-handler">

    // 					<div id="news-hot"></div>
    // 					<div id="news-lines"></div>

    // 					<div id="news-handler">

    // 						<div id="news-placeholder" style="height:1366.6666666667px">
    // 														<div class="news-item" style="position:absolute; top:315px; z-index:300; left:0px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/open-your-eyes.png" width="398" height="608">
    // 									<img src="uploads/section/news/open-your-eyes2.png" width="398" height="608">
    // 									<img src="uploads/section/news/open-your-eyes3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Mystical</div>
    // 								<div class="news-title">open.your.eyes</div>
    // 								<div class="news-description">A gripping video to entice visitors</div>
    // 							</div>
    // 														<div class="news-item"></div>
    // 							<div class="news-item"></div>
    // 																					<div class="news-item" style="position:absolute; top:464px; z-index:300; left:400px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/kiss-the-blade.png" width="398" height="608">
    // 									<img src="uploads/section/news/kiss-the-blade2.png" width="398" height="608">
    // 									<img src="uploads/section/news/kiss-the-blade3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Unexpected</div>
    // 								<div class="news-title">kiss.the.blade</div>
    // 								<div class="news-description">Fictional characters for the biggest spa in Paris</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:233px; z-index:300; left:800px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/pieces-of-heroes.png" width="398" height="608">
    // 									<img src="uploads/section/news/pieces-of-heroes2.png" width="398" height="608">
    // 									<img src="uploads/section/news/pieces-of-heroes3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Thunderous</div>
    // 								<div class="news-title">pieces.of.heroes</div>
    // 								<div class="news-description">FX jingle designed for Adidas</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:695px; z-index:300; left:0px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/multaq-guidelines.png" width="398" height="608">
    // 									<img src="uploads/section/news/multaq-guidelines2.png" width="398" height="608">
    // 									<img src="uploads/section/news/multaq-guidelines3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Focusing</div>
    // 								<div class="news-title">Multaq guidelines</div>
    // 								<div class="news-description">Customized interviews for sanofi worldwide</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:844px; z-index:300; left:400px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/shocking.png" width="398" height="608">
    // 									<img src="uploads/section/news/shocking2.png" width="398" height="608">
    // 									<img src="uploads/section/news/shocking3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Vintage</div>
    // 								<div class="news-title">Shocking!</div>
    // 								<div class="news-description">Timeless scenes for a Karl Lagerfeld ad</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:613px; z-index:300; left:800px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/the-dancer.png" width="398" height="608">
    // 									<img src="uploads/section/news/the-dancer2.png" width="398" height="608">
    // 									<img src="uploads/section/news/the-dancer3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Social</div>
    // 								<div class="news-title">The dancer</div>
    // 								<div class="news-description">Brand movie to gather the Reebok community</div>
    // 							</div>
    // 																				</div>

    // 					</div>
    // 				</div>

    // 			</div>
    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="twist" style="display: none;"><div id="main-twist" style="display: none;">

    // 	<div id="twist-container">

    // 		<div id="twist-back"></div>
    // 		<div id="twist-placeholder">
    // 			<div id="twist-video"></div>
    // 		</div>
    // 		<div id="twist-intro">

    // 			<div id="twist-ecran2">
    // 				<div id="twist-launch" class="hover"></div>
    // 				<div id="twist-sprite1"></div>
    // 				<div id="twist-sprite2"></div>
    // 				<div id="twist-sprite3"></div>
    // 				<div id="twist-sprite4"></div>
    // 			</div>
    // 			<div id="twist-ecran1">
    // 				<div id="twist-launch1"></div>
    // 				<div id="twist-background"></div>
    // 				<div id="twist-action" class="hover"></div>
    // 				<img src="skins/blacknegative/images/twist/circle.png" id="twist-circle" class="hover">
    // 				<img src="skins/blacknegative/images/twist/go.png" id="twist-go" class="hover">
    // 			</div>

    // 			<div id="twist-transition"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="luminarc" style="display: none;"><div id="main-luminarc" style="display: none;">

    // 	<div id="luminarc-container">

    // 		<div id="luminarc-back"></div>
    // 		<div id="luminarc-placeholder">
    // 			<div id="luminarc-video"></div>
    // 		</div>
    // 		<div id="luminarc-intro">

    // 			<div id="luminarc-mask"></div>
    // 			<div id="luminarc-loop">
    // 				<div id="luminarc-loop-video"></div>
    // 			</div>

    // 			<div id="luminarc-logo"></div>
    // 			<div id="luminarc-text"></div>
    // 			<div id="luminarc-launch" class="hover"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="client" style="display: none;"><div id="main-client" style="display: none;">

    // 	<div id="client-loop">
    // 		<div id="client-loop-video"></div>
    // 	</div>
    // 	<div id="client-mask"></div>

    // 	<div id="client-grid"></div>
    // 	<div id="client-work">Working with us</div>
    // 	<div id="client-good"></div>
    // 	<div id="client-launch" class="hover"></div>
    // 	<div id="client-back" class="hover"></div>

    // 	<div id="client1" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>

    // 	<div id="client2" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client3" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client4" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client5" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client6" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client7" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client8" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client9" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client10" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client12" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client13" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client14" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client15" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client16" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>

    // </div></div>
    // <div id="ownthesky" style="display: none;"><div id="main-ownthesky" style="display: none;">

    // 	<div id="ownthesky-container">

    // 		<div id="ownthesky-back"></div>
    // 		<div id="ownthesky-placeholder">
    // 			<div id="ownthesky-video"></div>
    // 		</div>
    // 		<div id="ownthesky-intro">

    // 			<div id="ownthesky-mask"></div>
    // 			<div id="ownthesky-loop">
    // 				<div id="ownthesky-loop-video"></div>
    // 			</div>

    // 			<div id="ownthesky-logo"></div>
    // 			<div id="ownthesky-launch" class="hover"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="citroen" style="display: none;"><div id="main-citroen" style="display: none;">

    // 	<div id="citroen-container">

    // 		<div id="citroen-back"></div>
    // 		<div id="citroen-placeholder">
    // 			<div id="citroen-video"></div>
    // 		</div>
    // 		<div id="citroen-intro">

    // 			<div id="citroen-background" data-depth="0.4"></div>
    // 			<div id="citroen-link" class="parallax-obj" data-top="-60" data-left="120" data-depth="0.2">
    // 				<div id="citroen-imagine"></div>
    // 				<div id="citroen-launch"></div>
    // 			</div>

    // 			<div id="citroen-obj1" class="parallax-obj" data-top="30" data-left="-600" data-depth="1.9" style="background-image:url('skins/blacknegative/images/citroen/obj1.png')"></div>
    // 			<div id="citroen-obj2" class="parallax-obj" data-top="130" data-left="-700" data-depth="0.3" style="background-image:url('skins/blacknegative/images/citroen/obj2.png')"></div>
    // 			<div id="citroen-obj3" class="parallax-obj" data-top="160" data-left="-600" data-depth="0.2" style="background-image:url('skins/blacknegative/images/citroen/obj3.png')"></div>
    // 			<div id="citroen-obj4" class="parallax-obj" data-top="200" data-left="550" data-depth="1.5" style="background-image:url('skins/blacknegative/images/citroen/obj4.png')"></div>
    // 			<div id="citroen-obj5" class="parallax-obj" data-top="220" data-left="400" data-depth="0.2" style="background-image:url('skins/blacknegative/images/citroen/obj5.png')"></div>
    // 			<div id="citroen-obj6" class="parallax-obj" data-top="260" data-left="300" data-depth="0.3" style="background-image:url('skins/blacknegative/images/citroen/obj6.png')"></div>
    // 			<div id="citroen-obj7" class="parallax-obj" data-top="230" data-left="-270" data-depth="0.2" style="background-image:url('skins/blacknegative/images/citroen/obj7.png')"></div>
    // 			<div id="citroen-obj8" class="parallax-obj" data-top="-70" data-left="120" data-depth="1" style="background-image:url('skins/blacknegative/images/citroen/obj8.png')"></div>
    // 			<div id="citroen-obj9" class="parallax-obj" data-top="-150" data-left="-10" data-depth="0.8" style="background-image:url('skins/blacknegative/images/citroen/obj9.png')"></div>
    // 			<div id="citroen-obj10" class="parallax-obj" data-top="-160" data-left="-90" data-depth="0.3" style="background-image:url('skins/blacknegative/images/citroen/obj10.png')"></div>

    // 			<div id="citroen-drag-bg"></div>

    // 			<div id="citroen-logo"></div>

    // 			<div id="main-sequence">
    // 				<div class="current" style="background-image:url('uploads/section/citroen/sequence/sequence_00000.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00001.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00002.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00003.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00004.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00005.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00006.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00007.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00008.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00009.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00010.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00011.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00012.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00013.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00014.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00015.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00016.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00017.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00018.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00019.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00020.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00021.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00022.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00023.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00024.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00025.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00026.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00027.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00028.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00029.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00030.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00031.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00032.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00033.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00034.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00035.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00036.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00037.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00038.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00039.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00040.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00041.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00042.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00043.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00044.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00045.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00046.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00047.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00048.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00049.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00050.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00051.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00052.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00053.jpg')"></div>
    // 			</div>

    // 			<div id="citroen-dragbar">
    // 				<div id="citroen-drag-over"></div>
    // 				<div id="citroen-drag"></div>
    // 			</div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="contact" style="display: none;"><div id="main-contact" style="display: none;">

    // 	<div id="contact-loop">
    // 		<div id="contact-loop-video"></div>
    // 	</div>

    // 	<div id="contact-hello-bg"></div>
    // 	<div id="contact-hello"></div>

    // 	<a href="mailto:hello@blacknegative.com" id="contact-email" target="_blank"></a>

    // 	<div id="contact-mask"></div>

    // 	<div id="contact-text"></div>

    // 	<div id="see-all"></div>

    // </div></div><div id="ralphlauren" style="display: none;"><div id="main-ralphlauren" style="display: none;">

    // 	<div id="ralph-container">

    // 		<div id="ralph-back"></div>
    // 		<div id="ralph-placeholder">
    // 			<div id="ralph-video"></div>
    // 		</div>
    // 		<div id="ralph-intro">

    // 			<div class="ralph-sub" id="photo-one"></div>
    // 			<div class="ralph-sub" id="video-one">
    // 				<div id="ralph-one-mask"></div>
    // 				<div id="video-one-handler">
    // 					<div id="video-one-placeholder"></div>
    // 				</div>
    // 			</div>
    // 			<div class="ralph-sub" id="video-two"></div>
    // 			<div class="ralph-sub">
    // 				<div id="ralph-launch">
    // 					<div id="ralph-launch-normal">
    // 						RALPH LAUREN
    // 						Forget me not
    // 					</div>
    // 					<div id="ralph-launch-over">
    // 						RALPH LAUREN
    // 						Forget me not
    // 					</div>
    // 				</div>
    // 				<div id="ralph-photo2"></div>
    // 				<div id="ralph-photo3"></div>
    // 			</div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="bose" style="display: none;"><div id="main-bose" style="display: none;">

    // 	<div id="bose-container">

    // 		<div id="bose-back"></div>
    // 		<div id="bose-placeholder">
    // 			<div id="bose-video"></div>
    // 		</div>
    // 		<div id="bose-intro">

    // 			<div id="bose-loop">
    // 				<div id="bose-loop-video"></div>
    // 			</div>
    // 			<div id="bose-mask"></div>
    // 			<div id="bose-evolve"></div>
    // 			<div id="bose-making"></div>
    // 			<div id="bose-line"></div>
    // 			<!-- <div id="bose-text-bg"></div> -->
    // 			<div id="bose-ready" class="hover"></div>
    // 			<div id="bose-over"></div>
    // 			<div id="bose-sounddesign"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="bullittagency" style="display: none;"><div id="main-bullittagency" style="display: none;">

    // 	<div id="bullitt-mask"></div>

    // 	<div id="bullitt-bg"></div>
    // 	<div id="bullitt-loop">
    // 		<div id="bullitt-loop-video"></div>
    // 	</div>

    // 	<div id="bullitt-text">Blacknegative collaborates with its talented art directors, designers, developpers to find the best creative solutions IN ORDER TO create outstanding interactive experiences.</div>
    // 	<div id="bullitt-launch"><a href="http://www.thebullittagency.com" target="_blank"></a></div>

    // 	<div id="bullitt-intro">
    // 	</div>

    // </div></div>
    // <div id="adisseo" style="display: none;"><div id="main-adisseo" style="display: none;">

    // 	<div id="adisseo-container">

    // 		<div id="adisseo-back"></div>
    // 		<div id="adisseo-placeholder">
    // 			<div id="adisseo-video"></div>
    // 		</div>
    // 		<div id="adisseo-intro">

    // 			<div id="adisseo-bg"></div>
    // 			<div id="adisseo-content">
    // 				<div id="adisseo-hover"></div>
    // 				<div id="adisseo-elipse"></div>
    // 				<div id="adisseo-sprite"></div>
    // 				<div id="adisseo-slide" class="hover"></div>
    // 				<div id="adisseo-casestudy"></div>
    // 				<div id="adisseo-separation"></div>
    // 				<div id="adisseo-launch">
    // 					<div id="adisseo-launch-img"></div>
    // 					<div id="adisseo-separation2"></div>
    // 				</div>

    // 			</div>

    // 		</div>

    // 	</div>

    // </div>

    // </div>
    // <div id="kindy" style="display: none;"><div id="main-kindy" style="display: none;">

    // 	<div id="kindy-container">

    // 		<div id="kindy-back"></div>
    // 		<div id="kindy-placeholder-video">

    // 			<div id="kindy-video-full"></div>
    // 		</div>

    // 		<div id="kindy-intro">

    // 			<div id="kindy-background">
    // 				<div id="kindy-loop">
    // 					<div id="kindy-loop-video"></div>
    // 				</div>
    // 				<div id="kindy-mask"></div>
    // 			</div>

    // 			<div id="kindy-circle"></div>
    // 			<div id="spriteCircle"></div>
    // 			<div id="kindy-find"></div>
    // 			<div id="kindy-adventures"></div>
    // 			<div id="kindy-launch" class="hover"></div>
    // 			<div id="kindy-section">
    // 				<ul>
    // 					<li class="hover current">Blockbuster</li>
    // 					<li class="hover">Speed dating</li>
    // 					<li class="hover">Psycholuv' Story</li>
    // 				</ul>
    // 			</div>

    // 			<div id="spriteIn"></div>
    // 			<div id="spriteTitle"></div>

    // 			<div id="kindy-section1"></div>
    // 			<div id="kindy-section2"></div>
    // 			<div id="kindy-section3"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="sanofi" style="display: none;"><div id="main-sanofi" style="display: none;">

    // 	<div id="sanofi-container">

    // 		<div id="sanofi-back"></div>
    // 		<div id="sanofi-placeholder">
    // 			<div id="sanofi-video"></div>
    // 		</div>
    // 		<div id="sanofi-intro">

    // 			<div id="sanofi-background" data-depth="0.4"></div>

    // 			<div id="sanofi-flou" data-depth="0.4"></div>

    // 			<div id="sanofi-find" class="parallax-obj" data-depth="0.1" data-top="-203" data-left="-407"></div>
    // 			<div id="sanofi-known" class="parallax-obj" data-depth="0.2" data-top="193" data-left="-136"></div>
    // 			<div id="sanofi-lines" class="parallax-obj" data-depth="0.2" data-top="0" data-left="-282"></div>
    // 			<div id="sanofi-stockholm" class="parallax-obj" data-depth="0.3" data-top="40" data-left="-382"></div>

    // 			<div id="sanofi-stroke" class="parallax-obj" data-depth="0.4" data-top="-109" data-left="-109"></div>
    // 			<div id="sanofi-stroke1" class="parallax-obj" data-depth="0.9" data-top="-171" data-left="-170"></div>
    // 			<div id="sanofi-stroke2" class="parallax-obj" data-depth="0.6" data-top="-148" data-left="-149"></div>

    // 			<div id="sanofi-launch" class="hover parallax-obj" data-depth="0.1" data-top="-112" data-left="-108">
    // 				<span>SANOFI</span><br>AT EUROPEAN SOCIETY<br>OF CARDIOLOGY
    // 			</div>

    // 		</div>

    // 	</div>

    // </div></div>

    // <div id="news" style="display: none;"><div id="main-news" style="display: none;">

    // 	<div id="news-cont">

    // 		<div id="news-back"></div>
    // 		<div id="news-placeholder-video">
    // 			<div id="news-video"></div>
    // 		</div>

    // 		<div id="news-intro">
    // 			<div id="news-loop">
    // 				<div id="news-loop-video"></div>
    // 			</div>

    // 			<div id="news-mask"></div>
    // 			<div id="news-container">

    // 				<div id="news-scroll-line"></div>
    // 				<div id="news-content-handler">

    // 					<div id="news-hot"></div>
    // 					<div id="news-lines"></div>

    // 					<div id="news-handler">

    // 						<div id="news-placeholder" style="height:1366.6666666667px">
    // 														<div class="news-item" style="position:absolute; top:315px; z-index:300; left:0px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/open-your-eyes.png" width="398" height="608">
    // 									<img src="uploads/section/news/open-your-eyes2.png" width="398" height="608">
    // 									<img src="uploads/section/news/open-your-eyes3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Mystical</div>
    // 								<div class="news-title">open.your.eyes</div>
    // 								<div class="news-description">A gripping video to entice visitors</div>
    // 							</div>
    // 														<div class="news-item"></div>
    // 							<div class="news-item"></div>
    // 																					<div class="news-item" style="position:absolute; top:464px; z-index:300; left:400px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/kiss-the-blade.png" width="398" height="608">
    // 									<img src="uploads/section/news/kiss-the-blade2.png" width="398" height="608">
    // 									<img src="uploads/section/news/kiss-the-blade3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Unexpected</div>
    // 								<div class="news-title">kiss.the.blade</div>
    // 								<div class="news-description">Fictional characters for the biggest spa in Paris</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:233px; z-index:300; left:800px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/pieces-of-heroes.png" width="398" height="608">
    // 									<img src="uploads/section/news/pieces-of-heroes2.png" width="398" height="608">
    // 									<img src="uploads/section/news/pieces-of-heroes3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Thunderous</div>
    // 								<div class="news-title">pieces.of.heroes</div>
    // 								<div class="news-description">FX jingle designed for Adidas</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:695px; z-index:300; left:0px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/multaq-guidelines.png" width="398" height="608">
    // 									<img src="uploads/section/news/multaq-guidelines2.png" width="398" height="608">
    // 									<img src="uploads/section/news/multaq-guidelines3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Focusing</div>
    // 								<div class="news-title">Multaq guidelines</div>
    // 								<div class="news-description">Customized interviews for sanofi worldwide</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:844px; z-index:300; left:400px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/shocking.png" width="398" height="608">
    // 									<img src="uploads/section/news/shocking2.png" width="398" height="608">
    // 									<img src="uploads/section/news/shocking3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Vintage</div>
    // 								<div class="news-title">Shocking!</div>
    // 								<div class="news-description">Timeless scenes for a Karl Lagerfeld ad</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:613px; z-index:300; left:800px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/the-dancer.png" width="398" height="608">
    // 									<img src="uploads/section/news/the-dancer2.png" width="398" height="608">
    // 									<img src="uploads/section/news/the-dancer3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Social</div>
    // 								<div class="news-title">The dancer</div>
    // 								<div class="news-description">Brand movie to gather the Reebok community</div>
    // 							</div>
    // 																				</div>

    // 					</div>
    // 				</div>

    // 			</div>
    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="twist" style="display: none;"><div id="main-twist" style="display: none;">

    // 	<div id="twist-container">

    // 		<div id="twist-back"></div>
    // 		<div id="twist-placeholder">
    // 			<div id="twist-video"></div>
    // 		</div>
    // 		<div id="twist-intro">

    // 			<div id="twist-ecran2">
    // 				<div id="twist-launch" class="hover"></div>
    // 				<div id="twist-sprite1"></div>
    // 				<div id="twist-sprite2"></div>
    // 				<div id="twist-sprite3"></div>
    // 				<div id="twist-sprite4"></div>
    // 			</div>
    // 			<div id="twist-ecran1">
    // 				<div id="twist-launch1"></div>
    // 				<div id="twist-background"></div>
    // 				<div id="twist-action" class="hover"></div>
    // 				<img src="skins/blacknegative/images/twist/circle.png" id="twist-circle" class="hover">
    // 				<img src="skins/blacknegative/images/twist/go.png" id="twist-go" class="hover">
    // 			</div>

    // 			<div id="twist-transition"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="luminarc" style="display: none;"><div id="main-luminarc" style="display: none;">

    // 	<div id="luminarc-container">

    // 		<div id="luminarc-back"></div>
    // 		<div id="luminarc-placeholder">
    // 			<div id="luminarc-video"></div>
    // 		</div>
    // 		<div id="luminarc-intro">

    // 			<div id="luminarc-mask"></div>
    // 			<div id="luminarc-loop">
    // 				<div id="luminarc-loop-video"></div>
    // 			</div>

    // 			<div id="luminarc-logo"></div>
    // 			<div id="luminarc-text"></div>
    // 			<div id="luminarc-launch" class="hover"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="client" style="display: none;"><div id="main-client" style="display: none;">

    // 	<div id="client-loop">
    // 		<div id="client-loop-video"></div>
    // 	</div>
    // 	<div id="client-mask"></div>

    // 	<div id="client-grid"></div>
    // 	<div id="client-work">Working with us</div>
    // 	<div id="client-good"></div>
    // 	<div id="client-launch" class="hover"></div>
    // 	<div id="client-back" class="hover"></div>

    // 	<div id="client1" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>

    // 	<div id="client2" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client3" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client4" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client5" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client6" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client7" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client8" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client9" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client10" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client12" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client13" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client14" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client15" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client16" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>

    // </div></div>
    // <div id="ownthesky" style="display: none;"><div id="main-ownthesky" style="display: none;">

    // 	<div id="ownthesky-container">

    // 		<div id="ownthesky-back"></div>
    // 		<div id="ownthesky-placeholder">
    // 			<div id="ownthesky-video"></div>
    // 		</div>
    // 		<div id="ownthesky-intro">

    // 			<div id="ownthesky-mask"></div>
    // 			<div id="ownthesky-loop">
    // 				<div id="ownthesky-loop-video"></div>
    // 			</div>

    // 			<div id="ownthesky-logo"></div>
    // 			<div id="ownthesky-launch" class="hover"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="citroen" style="display: none;"><div id="main-citroen" style="display: none;">

    // 	<div id="citroen-container">

    // 		<div id="citroen-back"></div>
    // 		<div id="citroen-placeholder">
    // 			<div id="citroen-video"></div>
    // 		</div>
    // 		<div id="citroen-intro">

    // 			<div id="citroen-background" data-depth="0.4"></div>
    // 			<div id="citroen-link" class="parallax-obj" data-top="-60" data-left="120" data-depth="0.2">
    // 				<div id="citroen-imagine"></div>
    // 				<div id="citroen-launch"></div>
    // 			</div>

    // 			<div id="citroen-obj1" class="parallax-obj" data-top="30" data-left="-600" data-depth="1.9" style="background-image:url('skins/blacknegative/images/citroen/obj1.png')"></div>
    // 			<div id="citroen-obj2" class="parallax-obj" data-top="130" data-left="-700" data-depth="0.3" style="background-image:url('skins/blacknegative/images/citroen/obj2.png')"></div>
    // 			<div id="citroen-obj3" class="parallax-obj" data-top="160" data-left="-600" data-depth="0.2" style="background-image:url('skins/blacknegative/images/citroen/obj3.png')"></div>
    // 			<div id="citroen-obj4" class="parallax-obj" data-top="200" data-left="550" data-depth="1.5" style="background-image:url('skins/blacknegative/images/citroen/obj4.png')"></div>
    // 			<div id="citroen-obj5" class="parallax-obj" data-top="220" data-left="400" data-depth="0.2" style="background-image:url('skins/blacknegative/images/citroen/obj5.png')"></div>
    // 			<div id="citroen-obj6" class="parallax-obj" data-top="260" data-left="300" data-depth="0.3" style="background-image:url('skins/blacknegative/images/citroen/obj6.png')"></div>
    // 			<div id="citroen-obj7" class="parallax-obj" data-top="230" data-left="-270" data-depth="0.2" style="background-image:url('skins/blacknegative/images/citroen/obj7.png')"></div>
    // 			<div id="citroen-obj8" class="parallax-obj" data-top="-70" data-left="120" data-depth="1" style="background-image:url('skins/blacknegative/images/citroen/obj8.png')"></div>
    // 			<div id="citroen-obj9" class="parallax-obj" data-top="-150" data-left="-10" data-depth="0.8" style="background-image:url('skins/blacknegative/images/citroen/obj9.png')"></div>
    // 			<div id="citroen-obj10" class="parallax-obj" data-top="-160" data-left="-90" data-depth="0.3" style="background-image:url('skins/blacknegative/images/citroen/obj10.png')"></div>

    // 			<div id="citroen-drag-bg"></div>

    // 			<div id="citroen-logo"></div>

    // 			<div id="main-sequence">
    // 				<div class="current" style="background-image:url('uploads/section/citroen/sequence/sequence_00000.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00001.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00002.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00003.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00004.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00005.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00006.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00007.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00008.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00009.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00010.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00011.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00012.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00013.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00014.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00015.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00016.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00017.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00018.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00019.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00020.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00021.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00022.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00023.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00024.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00025.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00026.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00027.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00028.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00029.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00030.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00031.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00032.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00033.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00034.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00035.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00036.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00037.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00038.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00039.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00040.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00041.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00042.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00043.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00044.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00045.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00046.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00047.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00048.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00049.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00050.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00051.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00052.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00053.jpg')"></div>
    // 			</div>

    // 			<div id="citroen-dragbar">
    // 				<div id="citroen-drag-over"></div>
    // 				<div id="citroen-drag"></div>
    // 			</div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="contact" style="display: none;"><div id="main-contact" style="display: none;">

    // 	<div id="contact-loop">
    // 		<div id="contact-loop-video"></div>
    // 	</div>

    // 	<div id="contact-hello-bg"></div>
    // 	<div id="contact-hello"></div>

    // 	<a href="mailto:hello@blacknegative.com" id="contact-email" target="_blank"></a>

    // 	<div id="contact-mask"></div>

    // 	<div id="contact-text"></div>

    // 	<div id="see-all"></div>

    // </div></div><div id="ralphlauren" style="display: none;"><div id="main-ralphlauren" style="display: none;">

    // 	<div id="ralph-container">

    // 		<div id="ralph-back"></div>
    // 		<div id="ralph-placeholder">
    // 			<div id="ralph-video"></div>
    // 		</div>
    // 		<div id="ralph-intro">

    // 			<div class="ralph-sub" id="photo-one"></div>
    // 			<div class="ralph-sub" id="video-one">
    // 				<div id="ralph-one-mask"></div>
    // 				<div id="video-one-handler">
    // 					<div id="video-one-placeholder"></div>
    // 				</div>
    // 			</div>
    // 			<div class="ralph-sub" id="video-two"></div>
    // 			<div class="ralph-sub">
    // 				<div id="ralph-launch">
    // 					<div id="ralph-launch-normal">
    // 						RALPH LAUREN
    // 						Forget me not
    // 					</div>
    // 					<div id="ralph-launch-over">
    // 						RALPH LAUREN
    // 						Forget me not
    // 					</div>
    // 				</div>
    // 				<div id="ralph-photo2"></div>
    // 				<div id="ralph-photo3"></div>
    // 			</div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="bose" style="display: none;"><div id="main-bose" style="display: none;">

    // 	<div id="bose-container">

    // 		<div id="bose-back"></div>
    // 		<div id="bose-placeholder">
    // 			<div id="bose-video"></div>
    // 		</div>
    // 		<div id="bose-intro">

    // 			<div id="bose-loop">
    // 				<div id="bose-loop-video"></div>
    // 			</div>
    // 			<div id="bose-mask"></div>
    // 			<div id="bose-evolve"></div>
    // 			<div id="bose-making"></div>
    // 			<div id="bose-line"></div>
    // 			<!-- <div id="bose-text-bg"></div> -->
    // 			<div id="bose-ready" class="hover"></div>
    // 			<div id="bose-over"></div>
    // 			<div id="bose-sounddesign"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="bullittagency" style="display: none;"><div id="main-bullittagency" style="display: none;">

    // 	<div id="bullitt-mask"></div>

    // 	<div id="bullitt-bg"></div>
    // 	<div id="bullitt-loop">
    // 		<div id="bullitt-loop-video"></div>
    // 	</div>

    // 	<div id="bullitt-text">Blacknegative collaborates with its talented art directors, designers, developpers to find the best creative solutions IN ORDER TO create outstanding interactive experiences.</div>
    // 	<div id="bullitt-launch"><a href="http://www.thebullittagency.com" target="_blank"></a></div>

    // 	<div id="bullitt-intro">
    // 	</div>

    // </div></div>
    // <div id="adisseo" style="display: none;"><div id="main-adisseo" style="display: none;">

    // 	<div id="adisseo-container">

    // 		<div id="adisseo-back"></div>
    // 		<div id="adisseo-placeholder">
    // 			<div id="adisseo-video"></div>
    // 		</div>
    // 		<div id="adisseo-intro">

    // 			<div id="adisseo-bg"></div>
    // 			<div id="adisseo-content">
    // 				<div id="adisseo-hover"></div>
    // 				<div id="adisseo-elipse"></div>
    // 				<div id="adisseo-sprite"></div>
    // 				<div id="adisseo-slide" class="hover"></div>
    // 				<div id="adisseo-casestudy"></div>
    // 				<div id="adisseo-separation"></div>
    // 				<div id="adisseo-launch">
    // 					<div id="adisseo-launch-img"></div>
    // 					<div id="adisseo-separation2"></div>
    // 				</div>

    // 			</div>

    // 		</div>

    // 	</div>

    // </div>

    // </div>
    // <div id="kindy" style="display: none;"><div id="main-kindy" style="display: none;">

    // 	<div id="kindy-container">

    // 		<div id="kindy-back"></div>
    // 		<div id="kindy-placeholder-video">

    // 			<div id="kindy-video-full"></div>
    // 		</div>

    // 		<div id="kindy-intro">

    // 			<div id="kindy-background">
    // 				<div id="kindy-loop">
    // 					<div id="kindy-loop-video"></div>
    // 				</div>
    // 				<div id="kindy-mask"></div>
    // 			</div>

    // 			<div id="kindy-circle"></div>
    // 			<div id="spriteCircle"></div>
    // 			<div id="kindy-find"></div>
    // 			<div id="kindy-adventures"></div>
    // 			<div id="kindy-launch" class="hover"></div>
    // 			<div id="kindy-section">
    // 				<ul>
    // 					<li class="hover current">Blockbuster</li>
    // 					<li class="hover">Speed dating</li>
    // 					<li class="hover">Psycholuv' Story</li>
    // 				</ul>
    // 			</div>

    // 			<div id="spriteIn"></div>
    // 			<div id="spriteTitle"></div>

    // 			<div id="kindy-section1"></div>
    // 			<div id="kindy-section2"></div>
    // 			<div id="kindy-section3"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="sanofi" style="display: none;"><div id="main-sanofi" style="display: none;">

    // 	<div id="sanofi-container">

    // 		<div id="sanofi-back"></div>
    // 		<div id="sanofi-placeholder">
    // 			<div id="sanofi-video"></div>
    // 		</div>
    // 		<div id="sanofi-intro">

    // 			<div id="sanofi-background" data-depth="0.4"></div>

    // 			<div id="sanofi-flou" data-depth="0.4"></div>

    // 			<div id="sanofi-find" class="parallax-obj" data-depth="0.1" data-top="-203" data-left="-407"></div>
    // 			<div id="sanofi-known" class="parallax-obj" data-depth="0.2" data-top="193" data-left="-136"></div>
    // 			<div id="sanofi-lines" class="parallax-obj" data-depth="0.2" data-top="0" data-left="-282"></div>
    // 			<div id="sanofi-stockholm" class="parallax-obj" data-depth="0.3" data-top="40" data-left="-382"></div>

    // 			<div id="sanofi-stroke" class="parallax-obj" data-depth="0.4" data-top="-109" data-left="-109"></div>
    // 			<div id="sanofi-stroke1" class="parallax-obj" data-depth="0.9" data-top="-171" data-left="-170"></div>
    // 			<div id="sanofi-stroke2" class="parallax-obj" data-depth="0.6" data-top="-148" data-left="-149"></div>

    // 			<div id="sanofi-launch" class="hover parallax-obj" data-depth="0.1" data-top="-112" data-left="-108">
    // 				<span>SANOFI</span><br>AT EUROPEAN SOCIETY<br>OF CARDIOLOGY
    // 			</div>

    // 		</div>

    // 	</div>

    // </div></div>

    // <div id="news" style="display: none;"><div id="main-news" style="display: none;">

    // 	<div id="news-cont">

    // 		<div id="news-back"></div>
    // 		<div id="news-placeholder-video">
    // 			<div id="news-video"></div>
    // 		</div>

    // 		<div id="news-intro">
    // 			<div id="news-loop">
    // 				<div id="news-loop-video"></div>
    // 			</div>

    // 			<div id="news-mask"></div>
    // 			<div id="news-container">

    // 				<div id="news-scroll-line"></div>
    // 				<div id="news-content-handler">

    // 					<div id="news-hot"></div>
    // 					<div id="news-lines"></div>

    // 					<div id="news-handler">

    // 						<div id="news-placeholder" style="height:1366.6666666667px">
    // 														<div class="news-item" style="position:absolute; top:315px; z-index:300; left:0px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/open-your-eyes.png" width="398" height="608">
    // 									<img src="uploads/section/news/open-your-eyes2.png" width="398" height="608">
    // 									<img src="uploads/section/news/open-your-eyes3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Mystical</div>
    // 								<div class="news-title">open.your.eyes</div>
    // 								<div class="news-description">A gripping video to entice visitors</div>
    // 							</div>
    // 														<div class="news-item"></div>
    // 							<div class="news-item"></div>
    // 																					<div class="news-item" style="position:absolute; top:464px; z-index:300; left:400px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/kiss-the-blade.png" width="398" height="608">
    // 									<img src="uploads/section/news/kiss-the-blade2.png" width="398" height="608">
    // 									<img src="uploads/section/news/kiss-the-blade3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Unexpected</div>
    // 								<div class="news-title">kiss.the.blade</div>
    // 								<div class="news-description">Fictional characters for the biggest spa in Paris</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:233px; z-index:300; left:800px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/pieces-of-heroes.png" width="398" height="608">
    // 									<img src="uploads/section/news/pieces-of-heroes2.png" width="398" height="608">
    // 									<img src="uploads/section/news/pieces-of-heroes3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Thunderous</div>
    // 								<div class="news-title">pieces.of.heroes</div>
    // 								<div class="news-description">FX jingle designed for Adidas</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:695px; z-index:300; left:0px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/multaq-guidelines.png" width="398" height="608">
    // 									<img src="uploads/section/news/multaq-guidelines2.png" width="398" height="608">
    // 									<img src="uploads/section/news/multaq-guidelines3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Focusing</div>
    // 								<div class="news-title">Multaq guidelines</div>
    // 								<div class="news-description">Customized interviews for sanofi worldwide</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:844px; z-index:300; left:400px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/shocking.png" width="398" height="608">
    // 									<img src="uploads/section/news/shocking2.png" width="398" height="608">
    // 									<img src="uploads/section/news/shocking3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Vintage</div>
    // 								<div class="news-title">Shocking!</div>
    // 								<div class="news-description">Timeless scenes for a Karl Lagerfeld ad</div>
    // 							</div>
    // 																					<div class="news-item" style="position:absolute; top:613px; z-index:300; left:800px;">

    // 								<div class="news-visuel">
    // 									<img src="uploads/section/news/the-dancer.png" width="398" height="608">
    // 									<img src="uploads/section/news/the-dancer2.png" width="398" height="608">
    // 									<img src="uploads/section/news/the-dancer3.png" width="398" height="608">
    // 								</div>

    // 								<div class="news-date">Social</div>
    // 								<div class="news-title">The dancer</div>
    // 								<div class="news-description">Brand movie to gather the Reebok community</div>
    // 							</div>
    // 																				</div>

    // 					</div>
    // 				</div>

    // 			</div>
    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="twist" style="display: none;"><div id="main-twist" style="display: none;">

    // 	<div id="twist-container">

    // 		<div id="twist-back"></div>
    // 		<div id="twist-placeholder">
    // 			<div id="twist-video"></div>
    // 		</div>
    // 		<div id="twist-intro">

    // 			<div id="twist-ecran2">
    // 				<div id="twist-launch" class="hover"></div>
    // 				<div id="twist-sprite1"></div>
    // 				<div id="twist-sprite2"></div>
    // 				<div id="twist-sprite3"></div>
    // 				<div id="twist-sprite4"></div>
    // 			</div>
    // 			<div id="twist-ecran1">
    // 				<div id="twist-launch1"></div>
    // 				<div id="twist-background"></div>
    // 				<div id="twist-action" class="hover"></div>
    // 				<img src="skins/blacknegative/images/twist/circle.png" id="twist-circle" class="hover">
    // 				<img src="skins/blacknegative/images/twist/go.png" id="twist-go" class="hover">
    // 			</div>

    // 			<div id="twist-transition"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="luminarc" style="display: none;"><div id="main-luminarc" style="display: none;">

    // 	<div id="luminarc-container">

    // 		<div id="luminarc-back"></div>
    // 		<div id="luminarc-placeholder">
    // 			<div id="luminarc-video"></div>
    // 		</div>
    // 		<div id="luminarc-intro">

    // 			<div id="luminarc-mask"></div>
    // 			<div id="luminarc-loop">
    // 				<div id="luminarc-loop-video"></div>
    // 			</div>

    // 			<div id="luminarc-logo"></div>
    // 			<div id="luminarc-text"></div>
    // 			<div id="luminarc-launch" class="hover"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="client" style="display: none;"><div id="main-client" style="display: none;">

    // 	<div id="client-loop">
    // 		<div id="client-loop-video"></div>
    // 	</div>
    // 	<div id="client-mask"></div>

    // 	<div id="client-grid"></div>
    // 	<div id="client-work">Working with us</div>
    // 	<div id="client-good"></div>
    // 	<div id="client-launch" class="hover"></div>
    // 	<div id="client-back" class="hover"></div>

    // 	<div id="client1" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>

    // 	<div id="client2" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client3" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client4" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client5" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client6" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client7" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client8" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client9" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client10" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client12" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client13" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client14" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client15" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>
    // 	<div id="client16" class="item-client">
    // 		<div class="item-client-logo"></div>
    // 	</div>

    // </div></div>
    // <div id="ownthesky" style="display: none;"><div id="main-ownthesky" style="display: none;">

    // 	<div id="ownthesky-container">

    // 		<div id="ownthesky-back"></div>
    // 		<div id="ownthesky-placeholder">
    // 			<div id="ownthesky-video"></div>
    // 		</div>
    // 		<div id="ownthesky-intro">

    // 			<div id="ownthesky-mask"></div>
    // 			<div id="ownthesky-loop">
    // 				<div id="ownthesky-loop-video"></div>
    // 			</div>

    // 			<div id="ownthesky-logo"></div>
    // 			<div id="ownthesky-launch" class="hover"></div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="citroen" style="display: none;"><div id="main-citroen" style="display: none;">

    // 	<div id="citroen-container">

    // 		<div id="citroen-back"></div>
    // 		<div id="citroen-placeholder">
    // 			<div id="citroen-video"></div>
    // 		</div>
    // 		<div id="citroen-intro">

    // 			<div id="citroen-background" data-depth="0.4"></div>
    // 			<div id="citroen-link" class="parallax-obj" data-top="-60" data-left="120" data-depth="0.2">
    // 				<div id="citroen-imagine"></div>
    // 				<div id="citroen-launch"></div>
    // 			</div>

    // 			<div id="citroen-obj1" class="parallax-obj" data-top="30" data-left="-600" data-depth="1.9" style="background-image:url('skins/blacknegative/images/citroen/obj1.png')"></div>
    // 			<div id="citroen-obj2" class="parallax-obj" data-top="130" data-left="-700" data-depth="0.3" style="background-image:url('skins/blacknegative/images/citroen/obj2.png')"></div>
    // 			<div id="citroen-obj3" class="parallax-obj" data-top="160" data-left="-600" data-depth="0.2" style="background-image:url('skins/blacknegative/images/citroen/obj3.png')"></div>
    // 			<div id="citroen-obj4" class="parallax-obj" data-top="200" data-left="550" data-depth="1.5" style="background-image:url('skins/blacknegative/images/citroen/obj4.png')"></div>
    // 			<div id="citroen-obj5" class="parallax-obj" data-top="220" data-left="400" data-depth="0.2" style="background-image:url('skins/blacknegative/images/citroen/obj5.png')"></div>
    // 			<div id="citroen-obj6" class="parallax-obj" data-top="260" data-left="300" data-depth="0.3" style="background-image:url('skins/blacknegative/images/citroen/obj6.png')"></div>
    // 			<div id="citroen-obj7" class="parallax-obj" data-top="230" data-left="-270" data-depth="0.2" style="background-image:url('skins/blacknegative/images/citroen/obj7.png')"></div>
    // 			<div id="citroen-obj8" class="parallax-obj" data-top="-70" data-left="120" data-depth="1" style="background-image:url('skins/blacknegative/images/citroen/obj8.png')"></div>
    // 			<div id="citroen-obj9" class="parallax-obj" data-top="-150" data-left="-10" data-depth="0.8" style="background-image:url('skins/blacknegative/images/citroen/obj9.png')"></div>
    // 			<div id="citroen-obj10" class="parallax-obj" data-top="-160" data-left="-90" data-depth="0.3" style="background-image:url('skins/blacknegative/images/citroen/obj10.png')"></div>

    // 			<div id="citroen-drag-bg"></div>

    // 			<div id="citroen-logo"></div>

    // 			<div id="main-sequence">
    // 				<div class="current" style="background-image:url('uploads/section/citroen/sequence/sequence_00000.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00001.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00002.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00003.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00004.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00005.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00006.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00007.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00008.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00009.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00010.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00011.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00012.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00013.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00014.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00015.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00016.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00017.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00018.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00019.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00020.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00021.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00022.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00023.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00024.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00025.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00026.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00027.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00028.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00029.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00030.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00031.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00032.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00033.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00034.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00035.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00036.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00037.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00038.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00039.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00040.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00041.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00042.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00043.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00044.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00045.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00046.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00047.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00048.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00049.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00050.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00051.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00052.jpg')"></div>
    // 				<div style="background-image:url('uploads/section/citroen/sequence/sequence_00053.jpg')"></div>
    // 			</div>

    // 			<div id="citroen-dragbar">
    // 				<div id="citroen-drag-over"></div>
    // 				<div id="citroen-drag"></div>
    // 			</div>

    // 		</div>

    // 	</div>

    // </div></div>
    // <div id="contact" style="display: none;"><div id="main-contact" style="display: none;">

    // 	<div id="contact-loop">
    // 		<div id="contact-loop-video"></div>
    // 	</div>

    // 	<div id="contact-hello-bg"></div>
    // 	<div id="contact-hello"></div>

    // 	<a href="mailto:hello@blacknegative.com" id="contact-email" target="_blank"></a>

    // 	<div id="contact-mask"></div>

    // 	<div id="contact-text"></div>

    // 	<div id="see-all"></div>

    // </div></div></div>

    // 				</div>

    // 				<div id="home" style="display: block;"><div id="main-home">

    // 	<!-- The background mosaic with the visuals moving in diagonal -->
    // 	<div id="home-back">
    // 		<div id="home-back-container" style="top: -2678.5px; left: -2302.5px; padding-top: 2977px; padding-bottom: 2827px; background-position: 1365px 985px;">
    // 						<div class="home-back-item">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:1650px">01</div>
    // 					<div class="home-back-item-bg" style="margin-top:1650px">
    // 						<div class="home-back-item-background" style="background-image:url('skins/blacknegative/images/home/vignette/1.png');"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat; background-position: 0px 0px;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 						<div class="home-back-item">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:1515px">02</div>
    // 					<div class="home-back-item-bg" style="margin-top:1515px">
    // 						<div class="home-back-item-background" style="background-image:url('skins/blacknegative/images/home/vignette/2.png');"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 						<div class="home-back-item">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:1380px">03</div>
    // 					<div class="home-back-item-bg" style="margin-top:1380px">
    // 						<div class="home-back-item-background" style="background-image:url('skins/blacknegative/images/home/vignette/3.png');"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 						<div class="home-back-item">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:1245px">04</div>
    // 					<div class="home-back-item-bg" style="margin-top:1245px">
    // 						<div class="home-back-item-background" style="background-image:url('skins/blacknegative/images/home/vignette/4.png');"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 						<div class="home-back-item">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:1110px">05</div>
    // 					<div class="home-back-item-bg" style="margin-top:1110px">
    // 						<div class="home-back-item-background" style="background-image:url('skins/blacknegative/images/home/vignette/5.png');"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 						<div class="home-back-item">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:975px">06</div>
    // 					<div class="home-back-item-bg" style="margin-top:975px">
    // 						<div class="home-back-item-background" style="background-image:url('skins/blacknegative/images/home/vignette/6.png');"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 						<div class="home-back-item">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:840px">07</div>
    // 					<div class="home-back-item-bg" style="margin-top:840px">
    // 						<div class="home-back-item-background" style="background-image:url('skins/blacknegative/images/home/vignette/7.png');"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 						<div class="home-back-item">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:705px">08</div>
    // 					<div class="home-back-item-bg" style="margin-top:705px">
    // 						<div class="home-back-item-background" style="background-image:url('skins/blacknegative/images/home/vignette/8.png');"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 						<div class="home-back-item">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:570px">09</div>
    // 					<div class="home-back-item-bg" style="margin-top:570px">
    // 						<div class="home-back-item-background" style="background-image:url('skins/blacknegative/images/home/vignette/9.png');"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 						<div class="home-back-item">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:435px">10</div>
    // 					<div class="home-back-item-bg" style="margin-top:435px">
    // 						<div class="home-back-item-background" style="background-image: url(&quot;skins/blacknegative/images/home/vignette/10.png&quot;); opacity: 1;"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat; background-position: 0px 0px;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 						<div class="home-back-item">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:300px">11</div>
    // 					<div class="home-back-item-bg" style="margin-top:300px">
    // 						<div class="home-back-item-background" style="background-image: url(&quot;skins/blacknegative/images/home/vignette/11.png&quot;); opacity: 1;"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat; background-position: 0px 0px;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 						<div class="home-back-item">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:165px">12</div>
    // 					<div class="home-back-item-bg" style="margin-top:165px">
    // 						<div class="home-back-item-background" style="background-image: url(&quot;skins/blacknegative/images/home/vignette/12.png&quot;); opacity: 1;"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat; background-position: 0px 0px;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 						<div class="home-back-item selected">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:30px">13</div>
    // 					<div class="home-back-item-bg" style="margin-top:30px">
    // 						<div class="home-back-item-background" style="background-image: url(&quot;skins/blacknegative/images/home/vignette/13.png&quot;); opacity: 1;"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat; background-position: -241px -1446px;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 						<div class="home-back-item">
    // 				<div>
    // 					<div class="home-back-item-nb" style="margin-top:-105px">14</div>
    // 					<div class="home-back-item-bg" style="margin-top:-105px">
    // 						<div class="home-back-item-background" style="background-image:url('skins/blacknegative/images/home/vignette/14.png');"></div>
    // 						<div class="home-back-item-transition" style="width: 241px; height: 241px; background-image: url(&quot;skins/blacknegative/images/home/sprite.png&quot;); background-repeat: no-repeat;"></div>
    // 					</div>

    // 				</div>
    // 			</div>
    // 					</div>
    // 	</div>

    // 	<!-- The front menu with the names of the items -->
    // 	<div id="home-front">
    // 		<div id="home-front-container" style="left: -5192.5px;">
    // 						<div class="home-front-item">
    // 				<div class="title"><a href="#!/whoweare/" class="">WHO WE ARE</a></div>
    // 				<div class="description">Telling fascinating stories</div>
    // 			</div>
    // 						<div class="home-front-item">
    // 				<div class="title"><a href="#!/ralphlauren/" class="">RALPH LAUREN</a></div>
    // 				<div class="description">Forget me not</div>
    // 			</div>
    // 						<div class="home-front-item">
    // 				<div class="title"><a href="#!/bose/" class="">BOSE</a></div>
    // 				<div class="description">Treating the sound as a part of the picture</div>
    // 			</div>
    // 						<div class="home-front-item">
    // 				<div class="title"><a href="#!/bullittagency/" class="">INTERACTIVE DESIGNS</a></div>
    // 				<div class="description">We try to make the web a better world</div>
    // 			</div>
    // 						<div class="home-front-item">
    // 				<div class="title"><a href="#!/adisseo/" class="">ADISSEO</a></div>
    // 				<div class="description">Attracting investors for a leading animal nutrition firm</div>
    // 			</div>
    // 						<div class="home-front-item">
    // 				<div class="title"><a href="#!/kindy/" class="">KINDY</a></div>
    // 				<div class="description">The fantastic adventures george the Sock</div>
    // 			</div>
    // 						<div class="home-front-item">
    // 				<div class="title"><a href="#!/sanofi/" class="">SANOFI</a></div>
    // 				<div class="description">Capturing the richness of a major event</div>
    // 			</div>
    // 						<div class="home-front-item">
    // 				<div class="title"><a href="#!/news/" class="">WHAT'S HOT</a></div>
    // 				<div class="description">Our latest news</div>
    // 			</div>
    // 						<div class="home-front-item">
    // 				<div class="title"><a href="#!/twist/" class="">TWIST</a></div>
    // 				<div class="description">The smallest glucose device</div>
    // 			</div>
    // 						<div class="home-front-item">
    // 				<div class="title"><a href="#!/luminarc/" class="">CRISTAL D'ARQUES</a></div>
    // 				<div class="description">City of Light</div>
    // 			</div>
    // 						<div class="home-front-item">
    // 				<div class="title"><a href="#!/client/" class="">OUR CLIENTS</a></div>
    // 				<div class="description">It's about making a lasting impression.</div>
    // 			</div>
    // 						<div class="home-front-item">
    // 				<div class="title"><a href="#!/ownthesky/" class="">WE OWN THE SKY</a></div>
    // 				<div class="description">Shape the mystery and romance of a brand</div>
    // 			</div>
    // 						<div class="home-front-item selected">
    // 				<div class="title"><a href="#!/citroen/" class="">CITROEN</a></div>
    // 				<div class="description">If you can imagine it you can build it</div>
    // 			</div>
    // 						<div class="home-front-item">
    // 				<div class="title"><a href="#!/contact/" class="">CONTACT</a></div>
    // 				<div class="description">Say hello to Blacknegative!</div>
    // 			</div>
    // 					</div>
    // 	</div>

    // </div>

    // <script type="text/javascript" src="js/section/home/init.js"></script></div>

    // 			</div>

    // 			<div id="nav" style="display: block;">
    // 				<img src="skins/blacknegative/images/logo.png" id="logo" style="bottom: 17px; opacity: 1;">

    // 				<!-- Add paginator -->
    // <div id="nav-container" class="" style="height: 63px;">
    // 	<div id="navigator-container">
    // 		<div id="navigator" style="width:421px">
    // 			<div id="first-navigator-item"></div>
    // 						<div class="navigator-item hover"></div>
    // 						<div class="navigator-item hover"></div>
    // 						<div class="navigator-item hover"></div>
    // 						<div class="navigator-item hover"></div>
    // 						<div class="navigator-item hover"></div>
    // 						<div class="navigator-item hover"></div>
    // 						<div class="navigator-item hover"></div>
    // 						<div class="navigator-item hover"></div>
    // 						<div class="navigator-item hover"></div>
    // 						<div class="navigator-item hover"></div>
    // 						<div class="navigator-item hover"></div>
    // 						<div class="navigator-item hover"></div>
    // 						<div class="navigator-item hover selected"></div>
    // 						<div class="navigator-item hover"></div>
    // 						<div id="navigator-drag" style="left: 360px;"></div>
    // 		</div>
    // 	</div>
    // 	<div id="mask-nav" style="bottom: -34px;"></div>
    // 	<div id="mask-hover" class="hover" style="display: none; bottom: -34px;"></div>
    // 	<div id="mask-menu" style="bottom: -24px; opacity: 1;"></div>
    // </div>
    // 				<div id="social" style="bottom: 23px; opacity: 1;">
    // 					<ul>
    // 						<li id="social-facebook"><a href="http://www.facebook.com"><img src="skins/blacknegative/images/home/facebook.png" class="hover"></a></li>
    // 						<li id="social-twitter"><a href="http://www.twitter.com"><img src="skins/blacknegative/images/home/twitter.png" class="hover"></a></li>
    // 						<li id="sound-control"><img src="skins/blacknegative/images/home/sound.png" class="hover"></li>
    // 					</ul>
    // 				</div>

    // 				<div id="credit" style="display: block;">
    // 					<div id="credit-content">
    // 						<span>Production:</span> Blacknegative<br>
    // 						<span>Design:</span> Dilshan Arukatti<br>
    // 						<span>Development:</span> <a href="http://www.sylvaintran.fr" target="_blank">Sylvain Tran</a>
    // 					</div>
    // 					<div id="credit-title">Credits</div>
    // 				</div>
    // 			</div>

    // 		</div>
    <></>
  );
};

export default Nav;
