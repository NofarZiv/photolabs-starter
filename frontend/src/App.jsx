import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {


  const {
    state,
    showModal,
    closeModal,
    handlingFavorites,
    handlePhotos,
  } = useApplicationData();

  

  return (
    <div className="App">
      <HomeRoute topics={state.topicData} photos={state.photoData} showModal={showModal} favorites={state.favorites} handlingFavorites={handlingFavorites} handlePhotos={handlePhotos} topicPhotos={state.topicPhotos}/>
      {state.modal !== null &&  <PhotoDetailsModal closeModal={closeModal} selectedPhoto={state.modal} favorites={state.favorites} handlingFavorites={handlingFavorites}/>}
    </div>
  );
};


export default App;
