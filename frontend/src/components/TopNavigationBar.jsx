import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'



const TopNavigation = (props) => {

  const { topics, favorites, handlePhotos} = props


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} handlePhotos={handlePhotos}/>
      <FavBadge isFavPhotoExist={favorites.length > 0 ? true : false}/>
    </div>
  )
}

export default TopNavigation;