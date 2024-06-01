import React from "react";
import Time from "../../assets/icons/time.png";
import PayLater from "../../assets/icons/paylater.png";
import Rating from "../../assets/icons/rating.png";
import SectionTitle from "../SectionTitle";

const Services: React.FC = () => {
  return (
    <section className="space-y-12 p-4 py-16 md:px-14">
      <SectionTitle
        title="Quick & easy car rental"
        subTitle="Plan your trip now"
        description="Experience quick and easy car rentals with us! Seamlessly book your
          ride for a hassle-free journey. Your next adventure is just a click
          away."
      />

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center text-center">
          <img src={Time} alt="time icon" width={120} height={120} />
          <h1 className="my-3 text-2xl font-bold text-mainColor">
            Flexible time
          </h1>
          <p className="w-[70%] text-secondaryTextGray md:w-full">
            Enjoy flexibility in your schedule! With our services, choose the
            time that suits you best. Your convenience, your way.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <img src={Rating} alt="rating icon" width={90} height={90} />
          <h1 className="my-3 text-2xl font-bold text-mainColor">
            Real customer rating
          </h1>
          <p className="w-[70%] text-secondaryTextGray md:w-full">
            Explore real customer ratings that speak volumes. Trust the
            experiences of our satisfied customers – your journey, backed by
            authenticity.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <img src={PayLater} alt="paylater icon" width={100} height={100} />
          <h1 className="my-3 text-2xl font-bold text-mainColor">Paylater</h1>
          <p className="w-[70%] text-secondaryTextGray md:w-full">
            Experience the convenience of 'Pay Later.' Secure your booking now
            and pay at your convenience, making travel arrangements stress-free
            and flexible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
