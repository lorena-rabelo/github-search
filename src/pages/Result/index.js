import React, { Component } from 'react'
import Api from "../../api/service"
import "./styles.css";

class Result extends Component {
  constructor() {
    super();

    this.state = {
      user: {}     
    };
  }
  render() {
    const { user} = this.state;

    return (
      <main className="result--container">
        <div className="content">
          <h1>Oi</h1>
        </div>
      </main>
    );
  }


}

export default Result;