/* eslint-disable react/prop-types */
import Search from "../search/Search";
import HeaderButtons from "./HeaderButtons";
import "./Header.css";
import { FaCat } from "react-icons/fa";

export default function Header() {
  return (
    <div className="Header bg-neutral py-2">
      <div className="container">
        <div className="Header-wrapper flex h-20 items-center justify-between px-2 text-lg font-bold capitalize">
          <div className="flex items-center justify-center">
            <a
              href="/"
              className="Header-logo flex items-center justify-center rounded-full bg-base-200 p-3"
            >
              <FaCat size={24} />
            </a>
            <div className="ml-5">
              <Search />
            </div>
          </div>
          <HeaderButtons />
        </div>
      </div>
    </div>
  );
}
