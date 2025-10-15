import React from "react";
import { FaMoon } from "react-icons/fa";
import "../../styles/ButtonSettings.css";
import { useTheme } from "../../context/ThemeContext";
interface Props {}

const ButtonSettings: React.FC<Props> = ({}) => {
  const [iconSize, setIconSize] = React.useState(
    window.innerWidth <= 500 ? 26 : 36
  );

  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth <= 500 ? 26 : 36);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="settings">
      <button onClick={toggleTheme}>
        <FaMoon size={iconSize} color="#d3d1d1" />
      </button>
    </div>
  );
};

export default ButtonSettings;
