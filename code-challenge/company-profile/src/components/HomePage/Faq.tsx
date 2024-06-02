import React from "react";
import SectionTitle from "../SectionTitle";
import FaqCar from "../../assets/car-for-faq-section.webp";
import AccordionItem from "../Accordion/AccordionItem";
import FaqDatas from "../../assets/dataJson/faq.json";

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="relative p-4 py-16 md:px-14">
      <SectionTitle
        subTitle="FAQ"
        title="Frequently Asked Questions"
        description="Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries."
      />

      <img
        src={FaqCar}
        alt="faq-car"
        loading="lazy"
        width={360}
        height={160}
        className="absolute bottom-0 left-0 -z-10"
      />

      <div className="mx-auto mt-12 w-[80%] rounded-md bg-white shadow-lg">
        {FaqDatas.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={index === openIndex}
            toggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
