import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../../styles/IconInput.module.css";

interface IconInputProps {
  value: string;
  onKeyUp: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const IconInput: React.FC<IconInputProps> = function ({
  placeholder,
  onKeyUp,
}) {
  let [value, setValue] = useState<string>();
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>
        <FaSearch color="#ecf0f1" />
      </span>
      <input
        type="text"
        value={value}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default IconInput;
