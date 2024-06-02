import React from "react";
import CompanyOverview from "../components/HomePage/CompanyOverview";
import TimeLine from "../components/AboutPage/TimeLine";
import Teams from "../components/Teams";
import Values from "../components/AboutPage/Values";

const About: React.FC = () => {
  return (
    <React.Fragment>
      <CompanyOverview
        reverse={true}
        additionalDesc="Car Rental was founded in 2015 by John Doe, who saw a gap in the market for a car rental company that truly prioritized customer convenience and satisfaction. Starting with a modest fleet of economy cars in a single location, the company quickly gained a reputation for reliability and excellent service."
      />
      <TimeLine />
      <Teams />
      <Values />
    </React.Fragment>
  );
};

export default About;
