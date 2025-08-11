import React from "react";
import { IoIosSettings } from "react-icons/io";
import "../../styles/ButtonSettings.css";
interface Props {}

const ButtonSettings: React.FC<Props> = ({}) => {
  const [iconSize, setIconSize] = React.useState(
    window.innerWidth <= 500 ? 26 : 36
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth <= 500 ? 26 : 36);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="settings">
      <button>
        <IoIosSettings size={iconSize} color="#d3d1d1" />
      </button>
    </div>
  );
};

export default ButtonSettings;
