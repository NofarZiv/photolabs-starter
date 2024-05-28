import React from 'react';
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import '../styles/TopNavigationBar.scss'

const like = true;

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavIcon like={like}/>
    </div>
  )
}

export default TopNavigation;