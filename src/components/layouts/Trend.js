import React from 'react'
import { TrendingTopics } from '../../TrendingTopics';
import TrendCard from './TrendCard';
import "../css/Trend.css";

const Trend = () => {
  return (
    <div className='trend-container'>
      <h1>Trends for you</h1>
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