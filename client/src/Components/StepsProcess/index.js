import React from "react";
import steps from "./steps";
import "./index.css";
const StepsProcess = () => {
  return (
    <div className="process-steps-view">
      <h1 className="steps-heading">Learning is a lifelong process</h1>
      <div className="steps-view">
        <div>
          <h1 className="step-heading">{steps[0].stepHeading}</h1>
          <p className="step-content">{steps[0].stepContent}</p>
        </div>
        <img src={steps[0].stepImg} className="step-image" alt="step1-img" />
      </div>
      {/* <div className="steps-view">
        <div>
          <h1 className="step-heading">{steps[1].stepHeading}</h1>
          <p className="step-content">{steps[1].stepContent}</p>
        </div>
        <img src={steps[1].stepImg} className="step-image" alt="step1-img" />
      </div>
      <div className="steps-view">
        <div>
          <h1 className="step-heading">{steps[2].stepHeading}</h1>
          <p className="step-content">{steps[2].stepContent}</p>
        </div>
        <img src={steps[2].stepImg} className="step-image" alt="step1-img" />
      </div>
      <div className="steps-view">
        <div>
          <h1 className="step-heading">{steps[3].stepHeading}</h1>
          <p className="step-content">{steps[3].stepContent}</p>
        </div>
        <img src={steps[3].stepImg} className="step-image" alt="step1-img" />
      </div> */}
      <div className="steps-view">
        <img
          src={steps[1].stepImg}
          className="step-image-even"
          alt="step2-img"
        />
        <div>
          <h1 className="step-heading">{steps[1].stepHeading}</h1>
          <p className="step-content">{steps[1].stepContent}</p>
        </div>
      </div>
      <div className="steps-view">
        <div>
          <h1 className="step-heading">{steps[2].stepHeading}</h1>
          <p className="step-content">{steps[2].stepContent}</p>
        </div>
        <img src={steps[2].stepImg} className="step-image" alt="step3-img" />
      </div>
      <div className="steps-view">
        <img
          src={steps[3].stepImg}
          className="step-image-even"
          alt="step4-img"
        />
        <div>
          <h1 className="step-heading">{steps[3].stepHeading}</h1>
          <p className="step-content">{steps[3].stepContent}</p>
        </div>
      </div>
    </div>
  );
};

export default StepsProcess;
