import React from "react";
import IconInput from "./UI/Input";
import ButtonSettings from "./UI/ButtonSettings";
import GeoLocation from "./UI/GeoLocation";
import "../styles/Header.css";

interface HeaderProps {
  label: string;
  fetchDataCityWeather: (city: string) => void;
  inputError: boolean;
}

const Header: React.FC<HeaderProps> = ({
  fetchDataCityWeather,
  label,
  inputError,
}) => {
  return (
    <header>
      <GeoLocation label={inputError ? "Error" : label}></GeoLocation>
      <div className="input-location">
        <IconInput
          inputError={inputError}
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
