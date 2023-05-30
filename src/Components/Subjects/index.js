import React from "react";
import subjectsList from "./subjectsData";
import "./index.css";
const Subjects = () => {
  return (
    <div className="subjects-view">
      {subjectsList.map((eachSubject) => (
        <div className="subject-box" key={eachSubject.text}>
          <img
            src={eachSubject.subjectImg}
            className="subject-img"
            alt={eachSubject.text}
          />
          <h1 className="subject-text">{eachSubject.text}</h1>
        </div>
      ))}
    </div>
  );
};

export default Subjects;
