"use client";
import BlogCard from "@/components/BlogCard";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.get("type") || "";

  // Function to update search params
  const updateType = (newType: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("type", newType);
    router.push(`?${params.toString()}`);
  };

  return (
    <div
      className={`${
        (type === "float" || type === "flexbox") && "w-full grid grid-cols-4"
      } h-full gap-2 py-20 xl:px-[120px] lg:px-[120px]`}
    >
      {type === "grid" && (
        <h2 className="font-bold text-[24px]">Floated Sidebar + Blog</h2>
      )}

      <div
        className={`${
          (type === "float" || type === "flexbox") && "col-span-3"
        } ${
          type === "grid"
            ? "grid grid-cols-2"
            : "flex flex-col items-start justify-start"
        } h-full gap-6`}
      >
        {type !== "grid" && (
          <h2 className="font-bold text-[24px]">Floated Sidebar + Blog</h2>
        )}
        <BlogCard number={1} type={type} image="/bmw-home-2.webp" />
        <BlogCard number={2} type={type} image="/bmw-home-1.webp" />
        <BlogCard number={3} type={type} image="/bmw-home-3.webp" />
        <BlogCard number={4} type={type} image="/bmw-home-2.webp" />
      </div>

      <div
        className={`${type === "flexbox" && "h-full"} ${
          (type === "grid" || type === "d") && "hidden"
        } ${
          type === "float" && "h-fit"
        } flex flex-col col-span-1 bg-orange-50 border-t-4 border-orange-400`}
      >
        <h2 className="text-[20px] w-full px-2 my-4 text-teal-600 font-bold">
          Layout Design
        </h2>
        <ul className="text-teal-600 w-full flex flex-col items-start justify-start gap-3 lg:text-[14px]">
          <li
            onClick={() => updateType("float")}
            className="w-full hover:bg-orange-100 px-2 duration-300 cursor-pointer transition-all text-teal-800"
          >
            Float layout with side new
          </li>
          <li
            onClick={() => updateType("flexbox")}
            className="w-full hover:bg-orange-100 px-2 duration-300 cursor-pointer transition-all text-teal-800"
          >
            FlexBox layout with side new
          </li>
          <li
            onClick={() => updateType("grid")}
            className="w-full hover:bg-orange-100 px-2 duration-300 cursor-pointer transition-all text-teal-800"
          >
            Grid layout with side new
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
