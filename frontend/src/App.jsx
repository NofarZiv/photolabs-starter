import {useState} from 'react';
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


  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} showModal={showModal}/>
      {modal === true && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto}/>}
    </div>
  );
};

export default App;
