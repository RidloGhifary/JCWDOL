import React from "react";
import SectionTitle from "../SectionTitle";
import TestimonialDatas from "../../assets/testimonial.json";
import { Quote } from "lucide-react";

const Testimonial: React.FC = () => {
  return (
    <section className="-mt-16 space-y-12 bg-backgroundLightGray p-4 py-16 md:px-14">
      <SectionTitle
        title="Client's Testimonials"
        subTitle="Reviewed by People"
        description="Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you."
      />

      <div className="grid grid-cols-2 items-center justify-center gap-4">
        {TestimonialDatas?.map((data, index) => (
          <div key={index} className="rounded-md bg-white p-8 shadow-md">
            <p className="line-clamp-3 font-medium text-black">
              {data.comment}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={data.photo}
                  alt="customer-1"
                  width="50px"
                  height="50px"
                  className="h-[50px] w-[50px] rounded-full object-cover object-center"
                />
                <div>
                  <p className="text-lg font-medium">{data.name}</p>
                  <span className="block text-sm text-secondaryTextGray">
                    {data.date}
                  </span>
                </div>
              </div>
              <Quote size={60} color="#f47920" weight="bold" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
