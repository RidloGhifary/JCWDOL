import React from "react";

const TeamsSection = React.lazy(() => import("../components/Teams"));

const Teams: React.FC = () => {
  return (
    <React.Fragment>
      <React.Suspense fallback={<p className="text-center">Loading...</p>}>
        <TeamsSection />
      </React.Suspense>
    </React.Fragment>
  );
};

export default Teams;
