import React from "react";
import CEO from "../../assets/ceo-photo.webp";
import TeamsDatas from "../../assets/dataJson/teams.json";

interface Props {
  reverse?: boolean;
  teams?: boolean;
  additionalDesc?: string;
}

const CompanyOverview: React.FC<Props> = ({
  reverse,
  teams,
  additionalDesc,
}) => {
  return (
    <section className="p-4 py-16 md:px-14">
      <div className="grid items-center justify-center md:grid-cols-2">
        <div className={`mx-auto ${reverse && "order-2"}`}>
          <img
            src={CEO}
            alt="ceo-photo"
            width="300px"
            height="100%"
            loading="lazy"
            className="rounded-full border-8 border-mainColor"
          />
        </div>
        <div className="space-y-5">
          <h1 className="text-3xl font-bold leading-tight">
            <span className="text-mainColor">Car rental</span> prides itself on
            having a diverse and experienced team dedicated to providing
            exceptional service.
          </h1>
          <p className="text-secondaryTextGray">
            Founded in 2015, Car Rental began with a small fleet of economy cars
            in a single location. Over the years, the company expanded its
            offerings to include a wide range of vehicles and services, becoming
            a trusted name in the car rental industry. Today, Car Rental
            operates multiple locations nationwide, with a commitment to
            customer satisfaction and innovation.
          </p>
          {teams ? (
            <div className="grid grid-cols-2 gap-4">
              {TeamsDatas?.map((data, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <img
                    src={data.photo}
                    alt="name"
                    width="50px"
                    height="50px"
                    className="rounded-full object-fill"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-mainColor">{data.name}</p>
                    <span className="text-sm text-secondaryTextGray">
                      {data.position}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-secondaryTextGray">{additionalDesc}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
