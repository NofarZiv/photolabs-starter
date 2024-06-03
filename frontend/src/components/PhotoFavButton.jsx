import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton(props) {

  const {favorites, handlingFavorites, photoId} = props

  const showLike = () => {

   handlingFavorites(photoId);
  }

    return (
      <div onClick={showLike} className="photo-list__fav-icon">
        <div className="photo-list__fav-icon-svg">
          <FavIcon like={favorites.includes(photoId)} />
        </div>
      </div>
      
    );
};

export default PhotoFavButton;

