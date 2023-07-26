import { FaSearch } from "react-icons/fa";

import "./Search.css";

export default function Search() {
  return (
    <form className="Search relative flex items-center overflow-hidden font-robotoLight">
      <div className="">
        <input
          type="text"
          placeholder="დაიწყე ძიება"
          className="input input-bordered h-[2.5rem] w-[250px] rounded-none border-none"
        />
      </div>
      <button className="btn btn-square h-[2.5rem] min-h-fit rounded-none">
        <FaSearch />
      </button>
    </form>
  );
}
