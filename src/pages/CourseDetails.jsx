import React from "react";
import "./Styles/CourseDetails.css";
import NavBar from "../Components/NavBar";
import course from "../Assets/Images/course.png";
import { coursedetails } from "./Data/CourseDetailsData";
import Footer from "../Components/Footer";

const CourseDetails = () => {
  return (
    <>
      <NavBar data="coursedetails" />
      <section id="coursedetails">
        <div className="courseWrapper">
          <div className="courseDetails">
            <div className="courseImg">
              <img src={course} alt="course" />
            </div>
            <div className="coursedata">
              <h1 className="ctitle">{coursedetails.title}</h1>
              <h2 className="csubtitle">Contents</h2>
              <ul>
                {coursedetails.contents.map((content, index) => {
                  return <li key={index}>{content}</li>;
                })}
              </ul>
            </div>
          </div>
          <hr />
          <div className="courseModules">
            <h2 className="msubtitle">Modules</h2>
            <div className="moduleWrapper">
              {coursedetails.modules.map((module) => {
                return Object.entries(module).map(([key, value]) => {
                  return (
                    <div className="modules">
                      <h2 key={key}>{key}</h2>
                      {value.map((m) => {
                        return <p>{m}</p>;
                      })}
                    </div>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CourseDetails;
