"use client";
import CardHome from "@/components/CardHome";
import Hero from "@/components/Hero";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    console.log(" in effect");
  }, []);

  return (
    <div className="flex flex-col pb-20 items-center justify-center gap-4">
      <Hero />
      <h2 className="text-cyan-700 text-[24px] mt-14 font-bold text-center">
        Recent Aritcal
      </h2>
      <CardHome type="left" image="/bmw-home-2.webp" />
      <br />
      <CardHome type="right" image="/bmw-home-1.webp" />
      <br /> <CardHome type="left" image="/bmw-home-3.webp" />
      <br /> <CardHome type="right" image="/bmw-home-4.jpg" />
    </div>
  );
}
