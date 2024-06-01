import React from "react";
import SectionTitle from "./SectionTitle";
import CarsModelData from "../assets/carsModel.json";

const CarsModel: React.FC = () => {
  const [carIndex, setCarIndex] = React.useState<number>(1);

  return (
    <section className="space-y-6 p-4 py-16 md:px-14">
      <SectionTitle
        subTitle="Vehicle model"
        title="Our rental fleet"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque deserunt culpa dolorem autem explicabo accusantium!"
      />

      <div className="grid grid-cols-1 justify-center gap-2 lg:grid-cols-4">
        <div className="border-t border-mainColor">
          {CarsModelData?.map((car, index) => (
            <p
              onClick={() => setCarIndex(car.id)}
              key={index}
              className={`${car.id === carIndex && "bg-mainColor text-white"} cursor-pointer border-x border-b border-mainColor p-4 text-center transition-all hover:bg-mainColor hover:text-white`}
            >
              {car.name}
            </p>
          ))}
        </div>
        <div className="col-span-2">
          <img
            src={CarsModelData[carIndex - 1].image}
            alt="cars-name"
            width="100%"
            height="100%"
          />
        </div>
        <div className="">
          <table className="w-full border-collapse border border-mainColor">
            <caption className="w-full caption-top bg-mainColor p-4 text-xl font-semibold text-white">
              ${CarsModelData[carIndex - 1].price} / day
            </caption>
            <tbody>
              <tr>
                <td>Seats</td>
                <td>{CarsModelData[carIndex - 1].seats}</td>
              </tr>
              <tr>
                <td>Transmition</td>
                <td>{CarsModelData[carIndex - 1].transmission}</td>
              </tr>
              <tr>
                <td>Fuel</td>
                <td>{CarsModelData[carIndex - 1].fuel}</td>
              </tr>
              <tr>
                <td>Bagage</td>
                <td>{CarsModelData[carIndex - 1].baggage}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{CarsModelData[carIndex - 1].year}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CarsModel;