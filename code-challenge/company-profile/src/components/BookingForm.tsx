import React from "react";
import { Toast } from "../utils/Toast";

const BookingForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    carType: "",
    pickUpDate: "",
    pickUpLocation: "",
    dropOffDate: "",
    useDriver: false,
  });

  const initialFormData = {
    carType: "",
    pickUpDate: "",
    pickUpLocation: "",
    dropOffDate: "",
    useDriver: false,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [name]: target.checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { carType, pickUpDate, pickUpLocation, dropOffDate } = formData;

    if (!carType || !pickUpDate || !pickUpLocation || !dropOffDate) {
      Toast.fire({
        icon: "error",
        title: "All fields must be filled out",
      });
      return;
    }

    Toast.fire({
      icon: "success",
      title: "Please check your email for further instructions",
    });
    setFormData(initialFormData);
  };

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

        <form
          className="my-6 grid grid-cols-2 items-end justify-end gap-2 md:grid-cols-3"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="carType" className="font-medium text-mainColor">
              Car Type
            </label>
            <select
              name="carType"
              id="carType"
              className="h-[50px] w-full border border-mainColor p-2 text-mainColor focus:outline-none"
              value={formData.carType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select your car type
              </option>
              <option value="bmw5series">BMW 5 Series</option>
              <option value="bmw320i">BMW 320i</option>
              <option value="bmwx3">BMW X3</option>
              <option value="SUV">Lexus RX 300</option>
              <option value="VOXY">TOYOTA VOXY</option>
              <option value="daihatsuayla">Daihatsu Ayla</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="pickUpDate" className="font-medium text-mainColor">
              Pick Up Date
            </label>
            <input
              type="date"
              name="pickUpDate"
              id="pickUpDate"
              className="h-[50px] w-full border border-mainColor p-2 text-mainColor focus:outline-none"
              value={formData.pickUpDate}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="pickUpLocation"
              className="font-medium text-mainColor"
            >
              Pick Up Location
            </label>
            <input
              type="text"
              name="pickUpLocation"
              id="pickUpLocation"
              placeholder="Pick Location"
              className="placeholder-orange h-[50px] w-full border border-mainColor p-2 text-mainColor placeholder:text-mainColor focus:outline-none"
              value={formData.pickUpLocation}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dropOffDate" className="font-medium text-mainColor">
              Drop Off Date
            </label>
            <input
              type="date"
              name="dropOffDate"
              id="dropOffDate"
              className="h-[50px] w-full border border-mainColor p-2 text-mainColor focus:outline-none"
              value={formData.dropOffDate}
              onChange={handleChange}
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
              className="accent-orange scale-150 text-white"
              checked={formData.useDriver}
              onChange={handleChange}
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
