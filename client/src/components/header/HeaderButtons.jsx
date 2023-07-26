import { FaUser, FaSun, FaMoon, FaPlus } from "react-icons/fa";
import { useAppContext } from "../../context/ContextProvider";
import geo from "/langIcons/geo.svg";
import eng from "/langIcons/eng.svg";
import rus from "/langIcons/rus.svg";

export default function HeaderButtons() {
  const { changeTheme, darkMode } = useAppContext();
  return (
    <div className="Header-buttons relative flex gap-x-2">
      {/* add item button */}
      <button className="btn btn-circle flex w-auto flex-row items-center justify-center px-3 font-helveticaCaps">
        <div className="rounded-full bg-[#42aebd] p-1">
          <FaPlus color="white" />
        </div>
        <p>დამატება</p>
      </button>

      {/* login & user */}
      <button className="btn btn-circle">
        <FaUser size={19} />
      </button>

      {/* change theme button */}
      <button onClick={changeTheme} className="btn btn-circle">
        {darkMode ? <FaSun size={19} /> : <FaMoon size={19} />}
      </button>

      {/* change language button */}
      <div className="Header-language-dropdown dropdown rounded-full">
        <label tabIndex="0" className="btn m-1 rounded-full">
          <img src={geo} alt="georgian" />
        </label>
        <ul
          tabIndex="0"
          className="Header-dropdown-content menu dropdown-content rounded-box top-[110%] z-[1] w-52 overflow-hidden bg-base-200 p-2 shadow"
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
  );
}
