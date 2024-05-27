import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {

  const { sampleDataForPhotoListItem } = props
  
  return (
    <article className="item">
    <img src={sampleDataForPhotoListItem.imageSource} />
    <img src={sampleDataForPhotoListItem.profile} />
    <p> {sampleDataForPhotoListItem.username}</p>
    <p> {sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country} </p>
    </article>
  );
};

export default PhotoListItem;
