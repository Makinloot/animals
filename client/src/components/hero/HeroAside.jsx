import { FaCat } from "react-icons/fa";
import "./Hero.css";

export default function HeroAside() {
  const handleList = () => {
    const data = Array.from({ length: 12 });
    return data.map((item, i) => (
      <li
        className="aside-list-item cursor-pointer px-7 py-2 text-neutral-content hover:text-info"
        key={i}
      >
        <a href="#" className="flex items-center">
          <FaCat /> <p className="ml-2">ცხოველები</p>
        </a>
      </li>
    ));
  };

  return (
    <div className="Hero-aside col-span-1 rounded-md bg-neutral">
      <ul className="aside-list flex flex-col font-helveticaCaps">
        {handleList()}
      </ul>
    </div>
  );
}
