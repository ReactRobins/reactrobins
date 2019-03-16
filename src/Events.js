import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./Events.css";

class Events extends Component {
  render() {
    return (
      <div className="Events">
        <div className="title">Upcoming Events</div>
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
            There are no upcoming just yet! But watch this space!{" "}
            <span role="img" aria-label="sunflower">
              🌻
            </span>
          </p>
          <p>
            Sign up to our{" "}
            <a
              href="https://reactrobins.typeform.com/to/y8lxaf"
              target="_blank"
            >
              mailing list
            </a>{" "}
            to be notified about upcoming events (we won't spam you, we
            promise!).
          </p>
        </div>
        <div className="left-bottom" />
        <div className="right-bottom" />
      </div>
    );
  }
}

export default Events;
