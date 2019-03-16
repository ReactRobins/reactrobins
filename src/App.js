import React, { Component } from 'react'
import './App.css'
import robin from './robin.png'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="box1" />
        <div className="box2" />
        <div className="box3" />
        <div className="box4" />
        <div className="title1">
          <p>React</p>
        </div>
        <div className="title2">
          <p>Robins</p>
        </div>
        <div className="box5" />
        <div className="box6" />
        <div className="box7" />
        <div className="box8" />
        <div className="box9" />
        <div className="box10">
          React Robins aims to create a diverse and inclusive environment for
          underrepresented groups in tech to learn React.js.
        </div>
        <div className="box11">
          <Link className="link" to="/about">
            About us
          </Link>
          <Link className="link" to="/faq">
            FAQ
          </Link>
          <Link className="link" to="/events">
            Events
          </Link>
        </div>
        <div className="box12" />
        <div className="box13" />
        <div className="box14" />
        <div className="box15" />
        <div className="box16" />
        <div className="box17" />
        <div className="box18" />
        <div className="box19" />
        <div className="box20">Based in London, UK</div>
        <div className="robin">
          <img src={robin} className="robin" alt="logo" />
        </div>
      </div>
    )
  }
}

export default App
