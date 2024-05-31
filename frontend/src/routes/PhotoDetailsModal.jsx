import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = (props) => {

  const { closeModal, selectedPhoto, favorites, handlingFavorites } = props

  const { id, urls, user, location, similar_photos } = selectedPhoto

  const { photo2, photo3, photo4, photo5 } = similar_photos
  const arr = [photo2, photo3, photo4, photo5]


  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <article className="photo-details-modal__images">
        <PhotoFavButton favorites={favorites} handlingFavorites={handlingFavorites} photoId={id} />
        <img className="photo-details-modal__image" src={urls.full} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={user.profile} />
          <div className="photo-details-modal__photographer-info"> {user.name}
            <p className="photo-details-modal__photographer-location"> {location.city}, {location.country} </p></div>
        </div>
        <h2 className="photo-details-modal__header">Similar Photos</h2>
        <div className="">
          <PhotoList photos={arr} favorites={favorites} handlingFavorites={handlingFavorites} />
        </div>
      </article>
    </div>
  )
};

export default PhotoDetailsModal;
