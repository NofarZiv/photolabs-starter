import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {

  const { photos, handlingFavorites, favorites, showModal } = props

  const items = photos.map(photo => {
    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        favorites={favorites}
        handlingFavorites={handlingFavorites}
        showModal={showModal}
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
