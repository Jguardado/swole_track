import React, { Component } from "react";
import AccordionPage from "./accordion/accordion";
import Header from "./header/header";
import SummaryDisplayContainer from "./summary-display";

class Body extends Component {
  render() {
    const { userName, dailyWorkout } = this.props
    return (
      <div className="main">
        <Header />
        <AccordionPage />
        <div className="additional-input">
          <input />
        </div>
        <SummaryDisplayContainer />
      </div>
    )
  }
};

export default Body;
