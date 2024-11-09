import Image from "next/image";
import React from "react";

const CardHome = ({ type, image }: { type: string; image: string }) => {
  return (
    <div
      className={` ${
        type === "left" ? "flex-row" : "flex-row-reverse"
      } flex  px-[100px] h-[250px] overflow-hidden items-start gap-2`}
    >
      <Image
        src={image}
        alt="image bmw"
        width={400}
        height={240}
        className="min-w-[400px] min-h-[240px] rounded-lg"
      />
      <div className="flex flex-col items-start justify-start">
        <h2 className="font-bold text-[20px]">
          topic : Lorem ipsum dolor sit amet.
        </h2>
        <p className="font-[200] text-neutral-400 text-[14px] ">
          By{" "}
          <span className="text-cyan-700 underline underline-offset-2 cursor-pointer">
            {" "}
            Himdad Hasan{" "}
          </span>{" "}
          on Monday, 30/11/2020 12:00 PM
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
          rem. Officiis esse odio, delectus cupiditate quia non veritatis
          aperiam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolores, rem. Officiis esse odio, delectus cupiditate quia non
          veritatis aperiam? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Dolores, rem. rem. Officiis esse odio, delectus cupiditate quia
          non veritatis aperiam? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dolores, rem. Officiis esse odio, delectus
          cupiditate quia non veritatis aperiam? Officiis esse odio, delectus
          cupiditate quia non veritatis aperiam?
        </p>
      </div>
    </div>
  );
};

export default CardHome;
