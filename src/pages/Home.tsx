import { CheckCircle, ChevronRight } from "lucide-react";
import React from "react";
import CarHeader from "../assets/car-for-header.webp";
import BackgroundCity from "../assets/header-bg.png";
import Button from "../components/ui/Button";
import Services from "../components/HomePage/Services";
import CompanyOverview from "../components/HomePage/CompanyOverview";
import BookingForm from "../components/BookingForm";
import CarsModel from "../components/CarsModel";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";
import Testimonial from "../components/HomePage/Testimonial";
import Faq from "../components/HomePage/Faq";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <section className="h-[85dvh] items-center justify-center p-4 py-16 md:px-14">
        <div className="grid gap-2 lg:grid-cols-2">
          <div className="space-y-4">
            <span className="text-base font-semibold md:text-lg">
              Plan your trip now
            </span>
            <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
              Save big with our <br />
              <b className="text-mainColor">Car rental</b>
            </h1>
            <p className="text-base font-medium text-secondaryTextGray">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="flex gap-2">
              <Button icon={<CheckCircle size={25} weight="bold" />}>
                Book
              </Button>
              <button className="flex items-center gap-3 border border-black bg-black px-6 py-4 font-bold text-white transition">
                Learn more
                <ChevronRight size={25} color="#ffffff" weight="bold" />
              </button>
            </div>
          </div>

          <div className="relative hidden select-none lg:block">
            <img src={CarHeader} width="100%" height="100%" />
            <div>
              <img
                src={BackgroundCity}
                width="100%"
                height="100%"
                className="absolute right-0 top-0 -z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <Services />
      <CompanyOverview teams={true} />
      <BookingForm />
      <CarsModel />
      <WhyChooseUs />
      <Testimonial />
      <Faq />
    </React.Fragment>
  );
};

export default Home;
