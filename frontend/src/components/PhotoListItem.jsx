import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"



const PhotoListItem = (props) => {

  const { photo, handlingFavorites, favorites, showModal } = props

  const {id, urls, user, location} = photo
  

  const handleClick = () => {
    showModal(photo)
  }


  return (
    <article  className="photo-list__item">
      <PhotoFavButton favorites={favorites} handlingFavorites={handlingFavorites} photoId={id} />
      <img onClick={handleClick} className="photo-list__image" src={urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} />
        <p className="photo-list__user-info"> {user.name}
        </p>
        <p className="photo-list__user-location"> {location.city}, {location.country} </p>
      </div>
    </article>
  );
};

export default PhotoListItem;
