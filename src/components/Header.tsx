import React from "react";
import IconInput from "./UI/Input";
import ButtonSettings from "./UI/ButtonSettings";
import GeoLocation from "./UI/GeoLocation";
import "../styles/Header.css";

interface HeaderProps {
  label: string;
  fetchDataCityWeather: (city: string) => void;
}

const Header: React.FC<HeaderProps> = ({ fetchDataCityWeather, label }) => {
  return (
    <header>
      <GeoLocation label={label}></GeoLocation>
      <div className="input-location">
        <IconInput
          value=""
          onKeyDown={fetchDataCityWeather}
          placeholder="Search..."
        ></IconInput>
      </div>
      <ButtonSettings></ButtonSettings>
    </header>
  );
};

export default Header;
