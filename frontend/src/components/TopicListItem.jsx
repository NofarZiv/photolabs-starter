import React from "react";
import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {

  const { id, title, handlePhotos } = props

  const handleClickTopic = () => {
    handlePhotos(id);
  }


  return (
    <div onClick={handleClickTopic} className="topic-list__item">
      <span> {title}</span>
    </div>
  );
};

export default TopicListItem;
