import React from "react";
import "../css/RightSideHeader.css";
import { FiSearch } from "react-icons/fi";
import Trend from "./Trend";

const RightSideHeader = () => {
  return (
    <div>
      <div className="search-container">
        <div className="search-header">
          <FiSearch
            style={{
              fontSize: 25,
              marginRight: 15,
              position: "absolute",
              top: 10,
              left: 10,
            }}
          />
          <input type="search" placeholder="Search Twitter" />
        </div>
      </div>

      <Trend />
    </div>
  );
};

export default RightSideHeader;
