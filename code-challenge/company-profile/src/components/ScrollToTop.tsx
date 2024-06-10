import { ChevronUp } from "lucide-react";
import React from "react";

const ScrollToTop: React.FC<{ showButtonScrollToTop: boolean }> = ({
  showButtonScrollToTop,
}) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={handleScrollToTop}
      className={`group fixed bottom-5 ${showButtonScrollToTop ? "right-5" : "-right-20"} flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-mainColor transition-all hover:scale-105 md:h-12 md:w-12`}
    >
      <ChevronUp
        color="white"
        className="transition-all group-hover:translate-y-[-3px]"
      />
    </div>
  );
};

export default ScrollToTop;
