import React, { Component } from "react";
import Accordian from "./accordian/accordian";
import Header from "./header/header";
import Summary from "./summary/summary";
import Display from "./display/display";


class Body extends Component {
  render() {
    const { userName, dailyWorkout } = this.props
    return (
      <div className="main">
        <Header />
        <Accordian />
        <Summary />
        <Display />
      </div>
    )
  }
};

export default Body;
