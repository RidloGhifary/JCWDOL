import React from "react";

const CarsModel = React.lazy(() => import("../components/CarsModel"));
const BookingForm = React.lazy(() => import("../components/BookingForm"));

const Cars: React.FC = () => {
  return (
    <React.Fragment>
      <React.Suspense fallback={<p className="text-center">Loading...</p>}>
        <CarsModel />
        <BookingForm />
      </React.Suspense>
    </React.Fragment>
  );
};

export default Cars;
