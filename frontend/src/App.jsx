import React, {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "mocks/topics";
import photos from "mocks/photos";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {

  const [modal, setModal] = useState(null)
  const showModal = (photo) => {
    setModal(photo)
  }
  const closeModal = () => {
    setModal(null)
  }

  const [favorites, setFavorites] = useState([])
  const handlingFavorites = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter(id => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    };
  };


  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} showModal={showModal} favorites={favorites} handlingFavorites={handlingFavorites}/>
      {modal !== null &&  <PhotoDetailsModal closeModal={closeModal} selectedPhoto={modal} favorites={favorites} handlingFavorites={handlingFavorites}/>}
    </div>
  );
};

export default App;
