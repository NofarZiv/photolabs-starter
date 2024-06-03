import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

  const { photos, topics, showModal, favorites, handlingFavorites, handlePhotos, topicPhotos} = props

  

  return (
    <div className="home-route">
       <TopNavigation topics={topics} favorites={favorites} handlePhotos={handlePhotos}/>
       { topicPhotos !== null ? <PhotoList photos={topicPhotos} favorites={favorites} handlingFavorites={handlingFavorites} showModal={showModal}/> : <PhotoList photos={photos} favorites={favorites} handlingFavorites={handlingFavorites} showModal={showModal}/>}
    </div>
  );
};

export default HomeRoute;
