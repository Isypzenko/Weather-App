import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../../styles/IconInput.module.css";

interface IconInputProps {
  value: string;
  onKeyDown: (city: string) => void;
  placeholder?: string;
}

const IconInput: React.FC<IconInputProps> = function ({
  placeholder,
  onKeyDown,
}) {
  interface CheckKeyUpEvent extends React.KeyboardEvent<HTMLInputElement> {}

  let [city, setCity] = useState<string>("");

  const checkKeyDown = function (e: CheckKeyUpEvent) {
    if (e.code === "Enter") {
      onKeyDown(city);
      setCity("");
    }
  };
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>
        <FaSearch color="#ecf0f1" />
      </span>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => checkKeyDown(e)}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default IconInput;
