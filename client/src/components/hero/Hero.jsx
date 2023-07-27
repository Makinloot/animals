import { cardImages } from "../../../testData";
import Card from "../card/Card";
import "./Hero.css";
import HeroAside from "./HeroAside";

// eslint-disable-next-line react/prop-types
export default function Hero({ filter }) {
  return (
    <div className="Hero py-8">
      <div className="container">
        <div className="Hero-wrapper grid min-h-[500px] grid-cols-4 items-start gap-4">
          <HeroAside filter={filter} />
          <div className="Hero-primary col-span-3 grid items-start gap-4 gap-y-16 rounded-md bg-neutral p-2 lg:grid-cols-4">
            <Card
              description=" იყიდება სასწრაფოდ, საუკეთესო ფასად, იყიდება საგამოფენო ხარისხის ამერიკული კოკერ-სპანიელი"
              authorType="ფიზიკური პირი"
              images={cardImages}
              price={500.0}
              isVip
            />
          </div>
        </div>
      </div>
    </div>
  );
}
