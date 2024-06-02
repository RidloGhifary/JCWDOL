import React from "react";
import TimeLineData from "../../assets/dataJson/timeLine.json";

const TimeLine: React.FC = () => {
  return (
    <section className="p-4 py-16 md:px-14">
      <ol className="relative mx-auto max-w-[700px] border-s-2 border-mainColor">
        {TimeLineData?.milestones?.map((data, index) => (
          <li className="mb-10 ms-8 space-y-3" key={index}>
            <div className="absolute -start-[17px] h-8 w-8 rounded-full border border-mainColor bg-mainColor"></div>
            <time className="text-xl font-semibold leading-none">
              {data?.date}
            </time>
            <p className="text-base font-normal text-secondaryTextGray">
              {data?.event}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default TimeLine;
