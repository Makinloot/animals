import "./FilterMenu.css";
import RadioGroup from "./RadioGroup";

export default function FilterMenu() {
  return (
    <div className="Filter-menu px-7 py-2">
      {/* location */}
      <div className="form-control w-full max-w-xs focus:outline-none">
        <label className="label focus:outline-none">
          <span className="">მდებარეობა</span>
        </label>
        <select className="select select-bordered focus:outline-none">
          <option disabled selected>
            აირჩიე მდებარეობა
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </div>
      {/* buy online? */}
      <RadioGroup title="ონლაინ ყიდვა" radioName="buy-online" />
      {/* buy ganvadeba */}
      <RadioGroup title="განვადებით ყიდვა" radioName="buy-postponed" />

      {/* price up-to */}
      <div className="form-control my-8">
        <span className="my-2">ფასი</span>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="დან"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
          <input
            type="number"
            placeholder="მდე"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
      </div>
      {/* item quality */}
      <RadioGroup title="ნივთის მდგომარეობა" radioName="item-quality" />
      {/* item type */}
      <RadioGroup title="განცხადების ტიპი" radioName="item-type" />
    </div>
  );
}
