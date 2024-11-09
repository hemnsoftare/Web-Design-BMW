"use client";
import BlogCard from "@/components/BlogCard";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "";

  return (
    <div
      className={`${
        (type === "float" || type === "flexbox") && " w-full grid grid-cols-4"
      } h-full  gap-3 py-20 px-[100px]`}
    >
      {type === "grid" && (
        <h2 className="font-bold text-[24px]">floated sidebar + blog</h2>
      )}

      <div
        className={`${
          (type === "float" || type === "flexbox") && "col-span-3"
        }  ${
          type === "grid"
            ? "grid grid-cols-2 "
            : "flex  justify-start flex-col items-start "
        }    h-full gap-4`}
      >
        {type !== "grid" && (
          <h2 className="font-bold text-[24px]">floated sidebar + blog</h2>
        )}
        <BlogCard number={1} type={type} image="/bmw-home-2.webp" />
        <BlogCard number={2} type={type} image="/bmw-home-1.webp" />
        <BlogCard number={3} type={type} image="/bmw-home-3.webp" />
        <BlogCard number={4} type={type} image="/bmw-home-4.jpg" />
      </div>

      <div
        className={`${type === "flexbox" && "h-full "} ${
          (type === "grid" || type === "d") && "hidden"
        } ${
          type === "float" && "h-fit"
        } flex flex-col col-span-1  bg-orange-50 border-t-4 border-orange-400`}
      >
        <h2 className="text-[20px] w-full px-2 my-4 text-teal-600 font-bold">
          Layout Design
        </h2>
        <ul className="text-teal-600 w-full flex items-start flex-col justify-start gap-3 text-[18px]">
          <li className="w-full hover:bg-orange-100 px-2 duration-300 cursor-pointer transition-all text-teal-800">
            Float layout with side new
          </li>
          <li className="w-full hover:bg-orange-100 px-2 duration-300 cursor-pointer transition-all text-teal-800">
            FlexBox layout with side new
          </li>
          <li className="w-full hover:bg-orange-100 px-2 duration-300 cursor-pointer transition-all text-teal-800">
            Grid layout with side new
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
