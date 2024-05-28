import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {

  const { photos, handlingHeart } = props

  const items = photos.map(item => {
    return (
      <PhotoListItem
        key={item.id}
        imageSource={item.urls.regular}
        profile={item.user.profile}
        name={item.user.name}
        city={item.location.city}
        country={item.location.country}
        handlingHeart={handlingHeart}
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
