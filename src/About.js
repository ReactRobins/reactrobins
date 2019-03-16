import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="title">About React Robins</div>
        <div className="left-top">
          <Link className="link" to="/">
            {"<"}
          </Link>
        </div>
        <div className="right-top" />
        <div className="left-middle" />
        <div className="right-middle" />
        <div className="middle">
          <p>
            ReactRobins aims to provide an inclusive space for underrepresented
            groups to learn React. Our events are open to anybody who considers
            themselves underrepresented in the tech industry. Every ReactRobins
            event will follow a strict Code of Conduct which will be enforced.
          </p>
          <p>
            We run one-day workshops where attendees follow our Tutorial with
            the help of volunteer mentors. ReactRobins was created by{" "}
            <a href="https://emily.mears.dev" target="_blank">
              Emily Mears
            </a>{" "}
            and{" "}
            <a href="https://niha.dev" target="_blank">
              Niharika Khanna
            </a>{" "}
            in October 2018. If you have any questions, please contact us at{" "}
            <a href="mailto:reactrobins@gmail.com">reactrobins@gmail.com</a>.
          </p>
        </div>
        <div className="left-bottom" />
        <div className="right-bottom" />
      </div>
    );
  }
}

export default About;
