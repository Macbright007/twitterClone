import React from "react";
import "../css/TweetCard.css";
import { BsThreeDots, BsChat } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { MdOutlineFavoriteBorder, MdIosShare } from "react-icons/md";

const TweetCard = ({ key, full_name, user_name, img, content }) => {
  return (
    <div className="card-container" key={key}>
      <img src={img} alt="pic" />
      <div className="tweet-content">
        <div className="content-head">
          <div className="user-details">
            <h2>{full_name}</h2>
            <h5>@{user_name}</h5>
          </div>
          <BsThreeDots style={{ marginTop: 30, fontSize: 23, marginRight: 15, color: "gray" }} />
        </div>

        <p>{content}</p>
        <div className="content-footer">
          <BsChat style={{color: "gray", marginRight: 90, fontSize: 20}}/>
          <AiOutlineRetweet style={{color: "gray", marginRight: 90, fontSize: 20}}/>
          <MdOutlineFavoriteBorder style={{color: "gray", marginRight: 90, fontSize: 20}}/>
          <MdIosShare style={{color: "gray", marginRight: 90, fontSize: 20}}/>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
