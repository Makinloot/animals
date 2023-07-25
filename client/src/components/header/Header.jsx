/* eslint-disable react/prop-types */
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import "./Header.css";
import { useAppContext } from "../../context/ContextProvider";
import geo from "/langIcons/geo.svg";
import eng from "/langIcons/eng.svg";
import rus from "/langIcons/rus.svg";

export default function Header() {
  const { changeTheme, darkMode } = useAppContext();
  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex h-20 items-center justify-between px-2 text-lg font-bold capitalize">
          <div>
            <div className="Header-logo flex items-center justify-center gap-1 rounded-full bg-yellow-500 p-1 text-white">
              <span className="rounded-full bg-white p-1 text-black">
                animal
              </span>
              <span>world</span>
            </div>
            .
          </div>
          <div className="Header-buttons relative flex gap-x-2">
            <button className="btn btn-circle">
              <FaUser size={19} />
            </button>
            <button onClick={changeTheme} className="btn btn-circle">
              {darkMode ? <FaSun size={19} /> : <FaMoon size={19} />}
            </button>

            <div className="Header-language-dropdown dropdown rounded-full">
              <label tabIndex="0" className="btn m-1 rounded-full">
                <img src={geo} alt="georgian" />
              </label>
              <ul
                tabIndex="0"
                className="Header-dropdown-content menu dropdown-content rounded-box z-[1] w-52 overflow-hidden bg-base-200 p-2 shadow"
              >
                <li>
                  <img src={eng} alt="english" />
                </li>
                <li>
                  <img src={rus} alt="russian" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
