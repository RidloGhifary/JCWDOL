import React from "react";

interface Props {
  subTitle: string;
  title: string;
  description: string;
}

const SectionTitle: React.FC<Props> = ({ subTitle, title, description }) => {
  return (
    <article className="mx-auto text-center md:max-w-[50%]">
      <span className="text-lg font-bold">{subTitle}</span>
      <h1 className="text-4xl font-bold text-mainColor">{title}</h1>
      <p className="mt-3 text-secondaryTextGray">{description}</p>
    </article>
  );
};

export default SectionTitle;
