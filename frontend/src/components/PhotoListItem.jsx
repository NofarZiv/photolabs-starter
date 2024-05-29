import {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"



const PhotoListItem = (props) => {

  const { photoId, imageSource, profile, name, city, country, handlingFavorites, favorites, showModal } = props

  const handleClick = () => {
    const photo = {
      id: photoId,
      imageSource: imageSource,
      profile: profile,
      name: name,
      city: city,
      country: country
    }
    showModal(photo)
  }


  return (
    <article onClick={handleClick} className="photo-list__item">
      <PhotoFavButton favorites={favorites} handlingFavorites={handlingFavorites} photoId={photoId}/>
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
