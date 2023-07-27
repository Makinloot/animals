import { FaCat } from "react-icons/fa";
import FilterMenu from "../filterMenu/FilterMenu";

import "./Hero.css";
const animalCategoriesData = [
  {
    id: 0,
    name: "ძაღლი",
  },
  {
    id: 1,
    name: "კატა",
  },
  {
    id: 2,
    name: "ეგზოტიკური ცხოველები",
  },
  {
    id: 3,
    name: "ფრინველები",
  },
  {
    id: 4,
    name: "მწერები",
  },
  {
    id: 5,
    name: "მეცხოველეობა",
  },
  {
    id: 6,
    name: "მეფრინველეობა",
  },
  {
    id: 7,
    name: "მეფუტკრეობა",
  },
  {
    id: 8,
    name: "ცხოველთა კვება",
  },
  {
    id: 9,
    name: "აქსესუარები და მოვლა",
  },
  {
    id: 10,
    name: "ვეტ-აფთიაქი",
  },
  {
    id: 11,
    name: "გავაჩუქებ/ვიჩუქებ",
  },
];

// eslint-disable-next-line react/prop-types
export default function HeroAside({ filter }) {
  const handleList = () => {
    return animalCategoriesData.map((item) => (
      <li
        className="aside-list-item cursor-pointer text-neutral-content hover:text-info"
        key={item.id}
      >
        <a href="/results" className="flex w-full items-center px-7 py-2">
          <FaCat /> <p className="ml-2">{item.name}</p>
        </a>
      </li>
    ));
  };

  return (
    <div className="Hero-aside col-span-1 rounded-md bg-neutral">
      <ul className="aside-list flex flex-col font-helveticaCaps">
        {handleList()}
        {filter && <FilterMenu />}
      </ul>
    </div>
  );
}
