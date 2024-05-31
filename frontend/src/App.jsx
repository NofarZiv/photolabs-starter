import React, {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "mocks/topics";
import photos from "mocks/photos";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {

  const [selectedPhoto, setSelectedPhoto] = useState(null); 
  const [modal, setModal] = useState(false)
  const showModal = (photo) => {
    setModal(!modal)
    setSelectedPhoto(photo);
  }
  const closeModal = () => {
    setModal(false)
    setSelectedPhoto(null);
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
      {modal === true && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto} favorites={favorites} handlingFavorites={handlingFavorites}/>}
    </div>
  );
};

export default App;
