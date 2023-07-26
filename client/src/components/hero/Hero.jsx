import "./Hero.css";
import HeroAside from "./HeroAside";

export default function Hero() {
  return (
    <div className="Hero py-8">
      <div className="container">
        <div className="Hero-wrapper grid min-h-[500px] grid-cols-4 gap-4">
          <HeroAside />
          <div className="Hero-primary col-span-3 rounded-md bg-neutral"></div>
        </div>
      </div>
    </div>
  );
}
