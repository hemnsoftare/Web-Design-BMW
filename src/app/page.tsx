import CardHome from "@/components/CardHome";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Hero />
      <h2 className="text-cyan-700 text-[24px] font-bold text-center">
        Recent Aritcal
      </h2>
      <CardHome type="left" image="/bmw-home-2.webp" />
      <br />
      <CardHome type="right" image="/bmw-home-1.webp" />
    </div>
  );
}
