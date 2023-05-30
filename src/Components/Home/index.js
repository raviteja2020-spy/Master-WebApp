import React, { useState } from "react";
import Header from "../Header";
import Subjects from "../Subjects";
import "./index.css";
import StepsProcess from "../StepsProcess";

function Home() {
  const [popUpToggle, setPopUpToggle] = useState(false);

  return (
    <div className="home-container">
      <Header />
      <div className="desktop-view-landing-page">
        <div className="desktop-view-landing-left">
          <h1 className="desktop-view-main-quote">Find Your Master</h1>
          <p className="desktop-view-main-content-1">Clear your query!</p>
          <p className="desktop-view-main-content-1">Online or Face to Face</p>
          <p className="desktop-view-main-content-1">
            Choose your Master at your Pace
          </p>
          <div>
            <button className="desktop-view-home-btn">Get started</button>
          </div>
        </div>
        <div className="desktop-view-landing-right">
          <img
            src="https://master-webapp.s3.ap-south-1.amazonaws.com/home-img-1.png"
            alt="home-img"
            className="desktop-view-home-img"
          />
        </div>
      </div>
      <Subjects />
      <StepsProcess />
      <div className="saraswati-img-view">
        <img
          src="https://master-webapp.s3.ap-south-1.amazonaws.com/saraswati-book.png"
          className="saraswati-img"
          alt="saraswati-book-img"
        />
        <h1 className="saraswati-text">Knowledge is divine</h1>
      </div>
      {popUpToggle && (
        <div className="pop-up-container">
          <div className="pop-up-body">
            <div className="pop-up-header">
              <h1 className="close-btn">X</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
