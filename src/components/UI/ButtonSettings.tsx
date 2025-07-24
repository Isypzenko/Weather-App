import React from "react";
import { IoIosSettings } from "react-icons/io";
import "../../styles/ButtonSettings.css";
interface Props {}

const ButtonSettings: React.FC<Props> = ({}) => {
  return (
    <div className="settings">
      <button>
        <IoIosSettings size={36} color="#d3d1d1" />
      </button>
    </div>
  );
};

export default ButtonSettings;
