import {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"



const PhotoListItem = (props) => {

  const { imageSource, profile, name, city, country, handlingHeart } = props


  return (
    <article className="photo-list__item">
      <PhotoFavButton handlingHeart={handlingHeart}/>
    <img className="photo-list__image" src={imageSource} />
    <div className="photo-list__user-details">
    <img className="photo-list__user-profile" src={profile} />
    <p className="photo-list__user-info"> {name}
    </p>
    <p className="photo-list__user-location"> {city}, {country} </p>
    </div>
    </article>
  );
};

export default PhotoListItem;
