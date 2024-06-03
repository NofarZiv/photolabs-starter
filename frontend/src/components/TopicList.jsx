import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";



const TopicList = (props) => {

  const { topics, handlePhotos } = props
  
  const topicsArr = topics.map(topic => {
    return (
     <TopicListItem 
      key={topic.id}
      id={topic.id}
      slug={topic.slug}
      title={topic.title}
      handlePhotos={handlePhotos}
    />
    );
  });


  return (
    <div className="top-nav-bar__topic-list">
      {topicsArr}
    </div>
  );
};

export default TopicList;

