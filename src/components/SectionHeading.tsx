import React from "react";

const SectionHeading = (props: any) => {
  return (
    <div className="flex pb-7 justify-center">
      <h1 className="text-3xl">{props.title}</h1>
    </div>
  );
};

export default SectionHeading;
