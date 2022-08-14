import React from "react";
import "../css/Trend.css";
import { BsThreeDots } from "react-icons/bs";

const TrendCard = ({ key, area, topic, no_of_tweets }) => {
  return (
      <div className="trendCard-container" key={key}>
        <div className="trendContent-head">
          <h3>{area}</h3>
          <BsThreeDots
            style={{
              marginTop: 20,
              fontSize: 23,
              marginRight: 15,
              color: "gray",
            }}
          />
        </div>
        <h2>{topic}</h2>
        <p>{no_of_tweets}</p>
      </div>
  );
};

export default TrendCard;
