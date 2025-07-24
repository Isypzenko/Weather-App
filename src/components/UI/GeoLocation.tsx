import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import "../../styles/GeoLocation.css";
interface Props {
  label: string;
}

const GeoLocation: React.FC<Props> = ({ label }) => {
  return (
    <div className="container-geo">
      <div className="container-geo-icon">
        <FaLocationDot size="20" color="#d3d1d1"></FaLocationDot>
      </div>
      <div className="container-text-location">{label}</div>
    </div>
  );
};

export default GeoLocation;
