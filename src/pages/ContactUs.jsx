import React from "react";
import "./Styles/ContactUs.css";
import contact from "./../Assets/Images/contact.jpg";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rt1zqob",
        "template_p0pbq5r",
        e.target,
        "user_vOvDD2RVYI2Kn3UjoNc9Y"
      )
      .then(
        (result) => {
          alert(
            "Thankyou for the message...\n We will get back to you soon 🙂"
          );
        },
        (error) => {
          alert("Something went wrong.\n Please try again later");
        }
      );
    e.target.reset();
  };
  return (
    <section className="contact" id="contactus">
      <div className="cHead">
        <h1 className="contactHead">Contact Us</h1>
      </div>
      <div className="contact-section" id="contactus">
        <div className="contact-container">
          <div className="contactImg">
            <img src={contact} alt="contactus" />
          </div>
          <div className="contactForm">
            <h2>Send us a message</h2>
            <form onSubmit={sendEmail}>
              <div className="formBox">
                <div className="inputBox w50">
                  <input type="text" required name="name" />
                  <span>Name</span>
                </div>
                <div className="inputBox w50">
                  <input type="email" required name="email" />
                  <span>Email</span>
                </div>
                <div className="inputBox w50">
                  <input type="text" required name="mobile" />
                  <span>Mobile</span>
                </div>
                <div className="inputBox w100">
                  <textarea required name="message"></textarea>
                  <span>Write your message here...</span>
                </div>
                <div className="inputBox w100">
                  <input type="submit" value="Send" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
