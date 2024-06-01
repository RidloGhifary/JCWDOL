import React from "react";
import ThreeCarsImage from "../../assets/three-cars.webp";
import Icon1 from "../../assets/icons/car.png";
import Icon2 from "../../assets/icons/money-and-hand.png";
import Icon3 from "../../assets/icons/money.png";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="w-full space-y-3 bg-black p-4 text-center text-mainColor">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Save big with our cheap car rental!
        </h1>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          repellendus!
        </p>
      </div>
      <section className="p-4 py-16 md:px-14">
        <img
          src={ThreeCarsImage}
          alt="three-cars-image"
          width="100%"
          height="100%"
          loading="lazy"
          className="mx-auto"
        />

        <div className="mx-auto mb-28 grid max-w-[1240px] gap-10 p-4 md:grid-cols-2 md:px-14">
          <div className="space-y-4">
            <p className="text-xl font-semibold text-mainColor">
              Why choose us
            </p>
            <p className="text-5xl font-bold">
              Best valued deals you will ever find
            </p>
            <p className="font-medium text-secondaryTextGray">
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>

            <Link
              to="/about"
              className="hover:shadow-orange mt-3 flex w-[165px] items-center gap-3 rounded-md bg-mainColor px-4 py-2 text-center font-semibold text-white transition hover:scale-105"
            >
              <button>More Detail</button>
              <ChevronRight size={28} color="#ffffff" weight="bold" />
            </Link>
          </div>

          <div className="space-y-8">
            <div className="-ml-2 flex items-center gap-3">
              <img
                src={Icon1}
                alt="icon1"
                width="150px"
                height="150px"
                loading="lazy"
              />
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-bold">Cross Country Drive</p>
                <p className="text-sm font-light text-secondaryTextGray">
                  Embark on the ultimate adventure with a cross-country drive.
                  Discover diverse landscapes, iconic landmarks, and the freedom
                  of the open road. Your journey of a lifetime begins here.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={Icon2}
                alt="icon1"
                width="150px"
                height="150px"
                loading="lazy"
              />
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-bold">All Inclusive Pricing</p>
                <p className="text-sm font-light text-secondaryTextGray">
                  Experience worry-free travel with our all-inclusive pricing.
                  No hidden fees, just straightforward and transparent rates.
                  Enjoy peace of mind as you plan your journey with confidence.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={Icon3}
                alt="icon1"
                width="150px"
                height="150px"
                loading="lazy"
              />
              <div className="flex flex-col gap-2">
                <p className="text-2xl font-bold">No Hidden Charges</p>
                <p className="text-sm font-light text-secondaryTextGray">
                  Transparent and hassle-free – our commitment to you. Enjoy
                  your journey with no hidden charges. What you see is what you
                  get, ensuring a straightforward and reliable experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
