import React from 'react'
import { TrendingTopics } from '../../TrendingTopics';

const Trend = () => {
  return (
    <div>
        {TrendingTopics.map((trend) => {
        return (
          <TrendCard
            key={trend.id}
            area={trend.area}
            no_of_tweets={trend.no_of_tweets}
            topic={trend.topic}
          />
        );
      })}
    </div>
  )
}

export default Trend