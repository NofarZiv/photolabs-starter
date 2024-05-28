import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
// import photos from "mocks/photos";


const PhotoList = (props) => {

  const { photos } = props

  const items = photos.map(item => {
    return (
      <PhotoListItem
        key={item.id}
        imageSource={item.urls.regular}
        profile={item.user.profile}
        name={item.user.name}
        city={item.location.city}
        country={item.location.country}
      />
    );
  });


  return (
    <ul className="photo-list">
      {items}
    </ul>
  );
};

export default PhotoList;
