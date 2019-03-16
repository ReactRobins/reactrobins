import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";

class FAQ extends Component {
  render() {
    return (
      <div className="FAQ">
        <div className="title">FAQ</div>
        <div className="left-top">
          <Link className="link" to="/">
            {"<"}
          </Link>
        </div>
        <div className="right-top" />
        <div className="left-middle" />
        <div className="right-middle" />
        <div className="middle">
          <ul>
            <li>Are ReactRobins events free?</li>
            ReactRobins events are free, and always will be free.
            <li>
              Do I have to know how to know JavaScript to attend a ReactRobins
              event?
            </li>
            We do ask that attendees have previously used JavaScript before
            attending a ReactRobins event. This is because React relies on
            plenty of JavaScript concepts so it is easier to learn React in a
            day if you have previously used JavaScript. In the future, we are
            hoping to be able to accommodate complete beginners to JavaScript.
            <li>What do I have to bring to a ReactRobins event?</li>
            You will need your Laptop, a charger, and possibly a notebook and
            pen if that helps you learn. We will provide food at all ReactRobins
            events!
            <li>How can I register for a ReactRobins event?</li>
            Any upcoming ReactRobins events will be put on our site as soon as
            they are confirmed. Anybody who is on the mailing list will receive
            an email updating them about upcoming events. Sign up to our mailing
            list here.
            <li>I want to coach or sponsor an event</li>
            That's awesome! Just reach out to the organisers at
            reactrobins@gmail.com with the event you would like to sponsor/coach
            at.
            <li>What will I learn at a ReactRobins event?</li>
            By the end of the event, you will have made your first React web
            application. The tutorial will cover fundamental concepts React
            relies upon, as well as implementation details.
            <li>Who can attend a ReactRobins event?</li>
            Anybody who considers themselves underrepresented in the tech
            industry, this includes, but is not limited to people who are
            members of a gender or racial minority.
            <li>When is the tutorial going to be released?</li>
            We are working hard to release the tutorial by the end of April.
            <li>When will the next ReactRobins event happen?</li>
            ReactRobins events will run every 3 months, with the first event
            being held in June.
          </ul>
        </div>
        <div className="left-bottom" />
        <div className="right-bottom" />
      </div>
    );
  }
}

export default FAQ;
