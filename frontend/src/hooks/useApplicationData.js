// import { useState} from "react"
import {useReducer} from "react"

export const ACTIONS = {
  SHOW_MODAL: 'SHOW_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE'
}

const {SHOW_MODAL, CLOSE_MODAL, TOGGLE_FAVORITE} = ACTIONS


function useApplicationData() {
//   const [modal, setModal] = useState(null)
//   const showModal = (photo) => {
//     setModal(photo)
//   }
//   const closeModal = () => {
//     setModal(null)
//   }

//   const [favorites, setFavorites] = useState([])
//   const handlingFavorites = (photoId) => {
//     if (favorites.includes(photoId)) {
//       setFavorites(favorites.filter(id => id !== photoId));
//     } else {
//       setFavorites([...favorites, photoId]);
//     };
//   };

//   const state = {
//     modal,
//     favorites,
//   }


const initialState = {
  modal: null,
  favorites: [],
};


const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, modal: action.payload };
    case CLOSE_MODAL:
      return { ...state, modal: null };
    case TOGGLE_FAVORITE:
      const isFavorite = state.favorites.includes(action.payload);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};


  const [state, dispatch] = useReducer(reducer, initialState);


  const showModal = (photo) => {
    dispatch({ type: SHOW_MODAL, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const handlingFavorites = (photoId) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: photoId });
  };



  return {
    state,
    showModal,
    closeModal,
    handlingFavorites,
  }
}



export default useApplicationData;