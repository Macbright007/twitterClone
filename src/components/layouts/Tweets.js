import React from "react";
import TweetCard from "./TweetCard";
import { Feeds } from "../../Data";


const Tweets = () => {
  return (
    <div>
      {Feeds.map((feed) => {
        return (
          <TweetCard
            key={feed.id}
            user_name={feed.user_name}
            full_name={feed.full_name}
            img={feed.img}
            content= {feed.content}
          />
        );
      })}
    </div>
  );
};

export default Tweets;
