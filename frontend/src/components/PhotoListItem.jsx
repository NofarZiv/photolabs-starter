import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"



const PhotoListItem = (props) => {

  const { sampleDataForPhotoListItem } = props

  

  return (
    <article className="photo-list__item">
      <PhotoFavButton />
    <img className="photo-list__image" src={sampleDataForPhotoListItem.imageSource} />
    <div className="photo-list__user-details">
    <img className="photo-list__user-profile" src={sampleDataForPhotoListItem.profile} />
    <p className="photo-list__user-info"> {sampleDataForPhotoListItem.username}
    </p>
    <p className="photo-list__user-location"> {sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country} </p>
    </div>
    </article>
  );
};

export default PhotoListItem;
