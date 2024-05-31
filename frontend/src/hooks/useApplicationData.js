import { useState} from "react"


function useApplicationData() {
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

  const state = {
    modal,
    favorites,
  }


  return {
    state,
    showModal,
    closeModal,
    handlingFavorites,
  }
}


export default useApplicationData;