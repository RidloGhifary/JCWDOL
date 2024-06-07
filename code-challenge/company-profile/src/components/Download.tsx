import React from "react";
import AppStoreButton from "../assets/download-sec/appstore.webp";
import PlayStoreButton from "../assets/download-sec/googleapp.webp";
import FooterPhoneBg from "../assets/download-sec/bg02.webp";

const Download: React.FC = () => {
  return (
    <section className="relative mx-auto w-full bg-backgroundLightGray p-4 py-16 md:px-14">
      <div className="grid lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight text-black md:text-5xl">
            Download our app to get most out of it
          </h1>
          <p className="text-lg font-normal text-secondaryTextGray md:text-xl">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex items-center gap-10">
            <img
              src={AppStoreButton}
              alt="App Store"
              width="160"
              height="100"
              loading="lazy"
              className="select-none"
            />
            <img
              src={PlayStoreButton}
              alt="Google Play"
              width="160"
              height="100"
              loading="lazy"
              className="select-none"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 hidden lg:block">
          <img
            src={FooterPhoneBg}
            alt="Footer background"
            width="100%"
            height="100%"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
