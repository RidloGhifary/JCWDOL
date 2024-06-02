import React from "react";
import AppStoreButton from "../assets/download-sec/appstore.svg";
import PlayStoreButton from "../assets/download-sec/googleapp.svg";
import FooterPhoneBg from "../assets/download-sec/bg02.webp";
import { Mail, PhoneCall } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer>
      <section className="relative mx-auto w-full bg-backgroundLightGray p-4 py-16 md:px-14">
        <div className="grid lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-black md:text-5xl">
              Download our app to get most out of it
            </h1>
            <p className="text-lg font-normal text-secondaryTextGray md:text-xl">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="flex items-center gap-10">
              <img
                src={AppStoreButton}
                alt="download-store-button"
                width="160px"
                height="100%"
              />
              <img
                src={PlayStoreButton}
                alt="download-store-button"
                width="160px"
                height="100%"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-0 right-0 hidden lg:block">
            <img
              src={FooterPhoneBg}
              alt="download-store-button"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>

      <section className="p-4 py-16 md:px-14">
        <div className="mx-auto grid max-w-[1240px] gap-16 sm:grid-cols-2 md:grid-cols-4">
          <article className="md:col-span-2">
            <h1 className="text-4xl font-semibold text-mainColor">
              Car Rental
            </h1>
            <p className="my-3 font-normal text-secondaryTextGray">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
            <div className="mt-6 flex items-center gap-4 font-medium text-mainColor">
              <PhoneCall size={28} color="#f4791f" />
              <span>(123)-123-456</span>
            </div>
            <div className="flex items-center gap-4 font-medium text-mainColor">
              <Mail size={28} color="#f4791f" />
              <span>carRental@gmail.com</span>
            </div>
          </article>

          <article className="text-left text-secondaryTextGray">
            <h1 className="text-3xl font-bold text-black">Company</h1>
            <ul className="mt-3 cursor-pointer space-y-3 font-normal text-secondaryTextGray hover:underline">
              <li>Jakarta</li>
              <li>Malaysia</li>
              <li>Singapore</li>
              <li>Australia</li>
              <li>New York</li>
            </ul>
          </article>

          <article className="text-left">
            <h1 className="text-3xl font-bold">Working Hours</h1>
            <ul className="mt-3 cursor-pointer space-y-3 font-normal text-secondaryTextGray hover:underline">
              <li>Mon-Fri: 9:00AM - 9:00PM</li>
              <li>Sat-Sun: 24 Hours</li>
            </ul>
          </article>

          <div className="md:col-span-2">
            <article className="text-center sm:text-left">
              <h1 className="text-3xl font-bold">Subscription</h1>
              <p className="my-3 cursor-pointer font-normal text-secondaryTextGray hover:underline">
                Subscribe your Email address for latest news & updates.
              </p>
            </article>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                className="w-full bg-neutral-200 p-4 font-normal text-secondaryTextGray focus:outline-none"
              />
              <input
                type="submit"
                value="Submit"
                className="mt-3 w-full cursor-pointer bg-mainColor p-4 font-semibold text-white shadow-2xl transition hover:bg-mainColor/80"
              />
            </form>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
