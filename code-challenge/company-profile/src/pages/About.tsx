import React from "react";

const CompanyOverview = React.lazy(
  () => import("../components/HomePage/CompanyOverview"),
);
const TimeLine = React.lazy(() => import("../components/AboutPage/TimeLine"));
const Teams = React.lazy(() => import("../components/Teams"));
const Values = React.lazy(() => import("../components/AboutPage/Values"));

const About: React.FC = () => {
  return (
    <React.Fragment>
      <React.Suspense fallback={<p className="text-center">Loading...</p>}>
        <CompanyOverview
          reverse={true}
          additionalDesc="Car Rental was founded in 2015 by John Doe, who saw a gap in the market for a car rental company that truly prioritized customer convenience and satisfaction. Starting with a modest fleet of economy cars in a single location, the company quickly gained a reputation for reliability and excellent service."
        />
        <TimeLine />
        <Teams />
        <Values />
      </React.Suspense>
    </React.Fragment>
  );
};

export default About;
