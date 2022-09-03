import React from "react";
import "./Styles/CourseDetails.css";
import NavBar from "../Components/NavBar";
import course from "../Assets/Images/course.png";
import vyshak from "../Assets/Images/vyshak.jpg";
import instagramLogo from "../Assets/Images/instagramLogo.png";
import youtubeLogo from "../Assets/Images/youtubeLogo.png";
import telegramLogo from "../Assets/Images/telegramLogo.png";
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
              <div className="cprice">
                <p className="oprice">{coursedetails.oprice}</p>
                <p className="dprice">{coursedetails.price}</p>
              </div>
              <h2 className="csubtitle">Contents</h2>
              <ul>
                {coursedetails.contents.map((content, index) => {
                  return (
                    <li key={index}>
                      <i className="fas fa-angle-right" /> {content}
                    </li>
                  );
                })}
              </ul>
              <a
                href=" https://wa.me/+917012442080?text=I'm%20interested%20in%20knowing%20more%20about%20the%20course."
                className="cbtn"
              >
                Join Now
              </a>
            </div>
          </div>
          <div className="instructorWrapper">
            <div className="iHead">
              <h1 className="instructorHead">Know Your Instructor</h1>
            </div>
            <div className="instructor">
              <div className="instructorImg">
                <img src={vyshak} alt="" />
                <div className="instuctorSocial">
                  <div className="sIcon">
                    <div className="followerCounty">101K</div>
                    <a href="http://youtube.com/vyshakhvijay" target="_blank" rel="noreferrer">
                      <div className="sImg">
                        <img src={youtubeLogo} alt="" />
                      </div>
                    </a>
                    <p>Subscribers</p>
                  </div>
                  <div className="sIcon">
                    <div className="followerCountt">31.5K</div>
                    <a href="http://t.me/vyshakhvijay" target="_blank" rel="noreferrer">
                      <div className="sImg">
                        <img src={telegramLogo} alt="" />
                      </div>
                    </a>
                    <p>Members</p>
                  </div>
                  <div className="sIcon">
                    <div className="followerCounti">10.2K</div>
                    <a
                      href="https://instagram.com/vyshakhvijay?igshid=YmMyMTA2M2Y="
                      target="_blank" rel="noreferrer"
                    >
                      <div className="sImg">
                        <img src={instagramLogo} alt="" />
                      </div>
                    </a>
                    <p>Followers</p>
                  </div>
                </div>
              </div>
              <div className="instructorDetails">
                <ul>
                  <li>Mr.Vyshak Vijay, Co Founder of Finstorlabs</li>
                  <li>7+ Years of experience in the Indian Stock Market</li>
                  <li>M.Tech in Structural Design Engineering</li>
                  <li>Personal Financial Planner and Mutual Fund consultant</li>
                  <li>Certified Investment Planning Specialist</li>
                  <li>Certified Retirement and Tax Planning Specialist</li>
                  <li>Block Chain expert and Crypto miner</li>
                  <li>
                    Leading NFT Collector @ WazirX NFT(Verified Collector)
                  </li>
                  <li>100K YouTube Subscribers</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="courseModules">
            <h2 className="msubtitle">Modules</h2>
            <div className="moduleWrapper">
              {coursedetails.modules.map((module) => {
                return Object.entries(module).map(([key, value]) => {
                  return (
                    <div className="modules">
                      <h2 className="mh" key={key}>
                        <span>{key.split("-")[0]}</span>-{key.split("-")[1]}
                      </h2>
                      {value.map((m) => {
                        return (
                          <p>
                            <i className="fas fa-angle-right" /> {m}
                          </p>
                        );
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
