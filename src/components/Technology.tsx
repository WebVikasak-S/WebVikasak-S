import Image from "next/image";
import React from "react";

const Technology = (props: any) => {
  return (
    <div className={props.className}>
      <div className={props.imageClassname}>
        <Image
          width={20}
          height={20}
          layout="fill"
          className="-rotate-12"
          src={props.src}
          alt={props.alt}
          style={{ objectFit: "contain" }}
        />
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default Technology;
