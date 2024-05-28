import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import topics from "mocks/topics";


const topicsArr = topics.map(topic => {
  return (
   <TopicListItem 
    key={topic.id}
    slug={topic.slug}
    title={topic.title}
  />
  );
});


const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topicsArr}
    </div>
  );
};

export default TopicList;

