"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoArrowBackOutline } from "react-icons/io5";

const Hero = () => {
  const car = ["/BMWCar1.png", "/BMWCar2.png", "/BMWCar3.png"];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < car.length - 1 ? prevCount + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [car.length]);

  const nextImage = () => {
    setCount((prevCount) => (prevCount < car.length - 1 ? prevCount + 1 : 0));
  };

  const prevImage = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : car.length - 1));
  };

  return (
    <div className="flex items-center w-full justify-center flex-col">
      <div className="flex flex-col items-center justify-center w-full relative">
        <Image
          src={car[count]}
          alt="car image"
          width={600}
          height={300}
          className="object-contain transition-all duration-1000 "
          key={count}
        />
        <GrLinkNext
          className="absolute top-1/2 right-[200px] hover:bg-cyan-100 rounded-full p-3 box-content duration-300 transition-all"
          size={40}
          onClick={nextImage}
        />
        <IoArrowBackOutline
          className="absolute top-1/2 left-[200px] hover:bg-cyan-100 rounded-full p-3 box-content duration-300 transition-all"
          size={40}
          onClick={prevImage}
        />
        <div className=" flex items-center justify-center gap-3 ">
          <span
            className={`${
              count === 0 ? "bg-orange-300 scale-[1.4]" : "bg-cyan-500"
            } w-4 h-4 duration-300 transition-all  rounded-full`}
          ></span>
          <span
            className={`${
              count === 1 ? "bg-orange-300 scale-[1.4]" : "bg-cyan-500"
            } w-4 h-4 duration-300 transition-all  rounded-full`}
          ></span>
          <span
            className={`${
              count === 2 ? "bg-orange-300 scale-[1.4]" : "bg-cyan-500"
            } w-4 h-4 duration-300 transition-all  rounded-full`}
          ></span>
        </div>
      </div>
      <div className="flex items-center gap-4   mt-4   justify-center">
        <button className="p-4 rounded-lg hover:border-blue-300 hover:-rotate-[720deg]  font-bold border-black hover:shadow-inner shadow-slate-950 px-9 bg-cyan-300 border-2   duration-700 transition-all">
          Home{" "}
        </button>
        <button className="p-4 rounded-lg hover:border-blue-300 hover:-rotate-[720deg]  font-bold border-black hover:shadow-inner shadow-slate-950 px-9 bg-cyan-300 border-2   duration-700 transition-all">
          Simnar Schdule{" "}
        </button>
        <button className="p-4 rounded-lg hover:border-blue-300 hover:-rotate-[720deg]  font-bold border-black hover:shadow-inner shadow-slate-950 px-9 bg-cyan-300 border-2   duration-700 transition-all">
          Sign Up
        </button>
        <button className="p-4 rounded-lg hover:border-blue-300 hover:-rotate-[720deg]  font-bold border-black hover:shadow-inner shadow-slate-950 px-9 bg-cyan-300 border-2   duration-700 transition-all">
          Sign In{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
