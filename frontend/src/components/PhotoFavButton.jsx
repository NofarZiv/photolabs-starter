import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [like, setLike] = useState(false)
  const showLike = () => {
   setLike(!like);
  }

    return (
      <div onClick={showLike} className="photo-list__fav-icon">
        <div className="photo-list__fav-icon-svg">
          <FavIcon like={like}/>
        </div>
      </div>
      
    );
}

export default PhotoFavButton;

