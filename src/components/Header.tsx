import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import IconInput from "./UI/Input";
import ButtonSettings from "./UI/ButtonSettings";
import GeoLocation from "./UI/GeoLocation";
import "../styles/Header.css";

const Header = () => {
  const inputKeyUphandler = function (e) {
    if (e.key === "Enter") {
      console.log("Searching");
    }
  };
  return (
    <header>
      <GeoLocation label={"Your Location"}></GeoLocation>
      <div className="input-location">
        <IconInput
          value=""
          onKeyUp={inputKeyUphandler}
          placeholder="Search..."
        ></IconInput>
      </div>
      <ButtonSettings></ButtonSettings>
    </header>
  );
};

export default Header;
