import React from "react";
import styles from "../../styles/Loader.module.css";

export const Loader: React.FC = () => {
  return (
    <div className={styles.wrapper} data-testid="loader">
      <div className={styles.spinner}></div>
    </div>
  );
};
