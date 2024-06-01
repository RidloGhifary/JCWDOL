import React from "react";

const BookingForm: React.FC = () => {
  return (
    <section className="p-4 py-16 md:px-14">
      <div className="rounded-lg p-6 shadow-xl">
        <article className="space-y-4 md:max-w-[50%]">
          <h1 className="text-4xl font-bold text-mainColor">
            Booking schedule
          </h1>
          <p className="font-medium leading-5 text-secondaryTextGray">
            Simplify your travel plans with our easy booking schedule. Secure
            your ride hassle-free, ensuring a smooth journey ahead.
          </p>
        </article>

        <form className="my-6 grid grid-cols-2 items-end justify-end gap-2 md:grid-cols-3">
          <div className="flex flex-col">
            <label htmlFor="carType" className="font-medium text-mainColor">
              Car Type
            </label>
            <select
              name="carType"
              id="carType"
              className="h-[50px] w-full border border-mainColor p-2 text-mainColor focus:outline-none"
            >
              <option defaultChecked>Select your car type</option>
              <option value="bmw5series">BMW 5 Series</option>
              <option value="bmw320i">BMW 320i</option>
              <option value="bmwx3">BMW X3</option>
              <option value="SUV">Lexus RX 300</option>
              <option value="VOXY">TOYOTA VOXY</option>
              <option value="daihatsuayla">Daihatsu Ayla</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="font-medium text-mainColor">
              Pick up date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="h-[50px] w-full border border-mainColor p-2 text-mainColor focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="location" className="font-medium text-mainColor">
              Pick up location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Pick Location"
              className="placeholder-orange h-[50px] w-full border border-mainColor p-2 text-mainColor placeholder:text-mainColor focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dropdate" className="font-medium text-mainColor">
              Drop of date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="h-[50px] w-full border border-mainColor p-2 text-mainColor focus:outline-none"
            />
          </div>

          <button className="col-span-2 h-[50px] w-full cursor-pointer border border-mainColor p-2 font-medium text-mainColor hover:bg-mainColor hover:text-white focus:outline-none">
            Submit
          </button>

          <div className="flex items-center justify-start pl-1">
            <input
              type="checkbox"
              name="useDriver"
              id="useDriver"
              value="User our driver"
              className="accent-orange scale-150 text-white"
            />
            <label
              htmlFor="useDriver"
              className="ml-2 font-medium text-mainColor"
            >
              Use our driver
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
