import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "mocks/topics";
import photos from "mocks/photos";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {

  const {
    state,
    showModal,
    closeModal,
    handlingFavorites,
  } = useApplicationData();



  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} showModal={showModal} favorites={state.favorites} handlingFavorites={handlingFavorites}/>
      {state.modal !== null &&  <PhotoDetailsModal closeModal={closeModal} selectedPhoto={state.modal} favorites={state.favorites} handlingFavorites={handlingFavorites}/>}
    </div>
  );
};


export default App;
