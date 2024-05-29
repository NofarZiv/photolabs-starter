import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {

  const like = true;


  return (
    <div className='fav-badge'>
      <FavIcon like={like} displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;