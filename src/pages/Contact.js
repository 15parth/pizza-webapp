import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form" method="POST" action="">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="" placeholder="Enter Full Name" />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your e-mail..."
          />

          <label htmlFor="message">Enter Message</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit"> Send Message </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
