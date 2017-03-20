import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SummaryDaily from "./summary-daily";
import SummaryWeekly from "./Summary-weekly";
import SummaryMonthly from "./summary-monthly";
import SummaryAnnually from "./summary-annually";

const Summary = () => {
  return (
    <div className="summary">
      <h4>Summary</h4>
      <SummaryDaily />
      <SummaryWeekly />
      <SummaryMonthly />
      <SummaryAnnually />
    </div>
  )
};

export default Summary;
