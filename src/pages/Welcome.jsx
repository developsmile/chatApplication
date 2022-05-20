import React from "react";
import "../css/Welcome.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Welcome = () => {
  return (
    <>
      <div className="welcome-container">
        <div className="left-welcome">
          <div className="img-container">
            <Carousel infiniteLoop={true} showArrows={false} showThumbs={false} showIndicators={false} showStatus={false} transitionTime={2000} autoPlay>
              <img src="/assets/slide1.jpg" alt="" />
              <img src="/assets/slide2.jpg" alt="" />
              <img src="/assets/slide3.jpg" alt="" />
              <img src="/assets/slide4.jpg" alt="" />
            </Carousel>
          </div>
        </div>
        <div className="right-welcome">
          <img src="assets/splash-image.png" alt="" />
          <h1>Welcome to Chat App</h1>
          <div className="welcome-link">
            <a href="/signin">Sign In </a>
            <a href="/signin">Sign Up </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
