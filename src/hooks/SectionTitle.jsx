import React from "react";

const SectionTitle = ({heading}) => {
  return (
    <div className="text-center flex flex-col items-center justify-center mx-auto my-4">
      <h3 className="text-4xl uppercase font-[curve] md:w-6/12 italic border-y-4 py-4 ">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
