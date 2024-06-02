import React from "react";
import ValuesImage from "../../assets/work-undraw.webp";
import SectionTitle from "../SectionTitle";

const Values: React.FC = () => {
  return (
    <section className="p-4 py-16 pb-28 md:px-14">
      <SectionTitle
        title="Built On a Foundation Of"
        subTitle="Our Values"
        description="Our fleet includes a growing number of electric and hybrid vehicles, and we continuously seek ways to reduce our carbon footprint."
      />

      <div className="mt-16 grid justify-items-center gap-20 md:grid-cols-2 md:gap-4">
        <img
          src={ValuesImage}
          alt="values-image"
          loading="lazy"
          width="400px"
          height="100%"
        />
        <div className="space-y-4">
          <h2 className="text-5xl font-bold text-mainColor md:text-6xl">
            Our Culture
          </h2>
          <p className="leading-relaxed text-secondaryTextGray">
            Car Rental is more than just a car rental company; it’s a place
            where dedicated professionals come together to make travel easier,
            more enjoyable, and more accessible for everyone. Our values and
            culture reflect our commitment to providing the best service
            possible, fostering a positive work environment, and making a
            positive impact on the world.
          </p>
          <p className="leading-relaxed text-secondaryTextGray">
            At Car Rental, our culture is built on a foundation of
            customer-centric values, innovation, integrity, teamwork, and
            sustainability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
