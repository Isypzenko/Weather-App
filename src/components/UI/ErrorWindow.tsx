import React from "react";
import "../../styles/ErrorWindow.css";
interface Props {}

const ErrorWindow: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="wrapper-error">
        <div className="wrapper-error-text">
          City is not found. Please try again
        </div>
      </div>
    </>
  );
};

export default ErrorWindow;
