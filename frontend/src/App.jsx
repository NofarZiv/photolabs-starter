import {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "mocks/topics";
import photos from "mocks/photos";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {

  const [modal, setModal] = useState(false)
  const showModal = () => {
    setModal(!modal)
  }
  const closeModal = () => {
    setModal(modal === false)
  }

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} showModal={showModal}/>
      {modal === true && <PhotoDetailsModal closeModal={closeModal}/>}
    </div>
  );
};

export default App;
