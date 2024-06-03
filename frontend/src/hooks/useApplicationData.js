import { useReducer, useEffect, useState} from "react";

export const ACTIONS = {
  SHOW_MODAL: 'SHOW_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};


const {SHOW_MODAL, CLOSE_MODAL, TOGGLE_FAVORITE, SET_PHOTO_DATA, SET_TOPIC_DATA, GET_PHOTOS_BY_TOPICS} = ACTIONS


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

const [showPhotos, setshowPhotos] = useState(null);
  const handlePhotos = (topic_id) => {
    setshowPhotos(topic_id);
  };


useEffect(() => {
  fetch("/api/photos")
    .then(res => res.json())
    .then(data => dispatch({ type: SET_PHOTO_DATA, payload: data }))
}, []);

useEffect(() => {
  fetch("/api/topics")
    .then(res => res.json())
    .then(data => dispatch({ type: SET_TOPIC_DATA, payload: data }))
}, []);

useEffect(() => {
  fetch(`/api/topics/photos/${showPhotos}`)
   .then(res => res.json())
   .then(data => dispatch({ type: GET_PHOTOS_BY_TOPICS, payload: data }))
}, [showPhotos]);


const initialState = {
  modal: null,
  favorites: [],
  photoData: [],
  topicData: [],
  topicPhotos: []
};


const reducer = (state, action) => {
  switch (action.type) {
    case SET_PHOTO_DATA:
      return { ...state, photoData: action.payload }
    case SET_TOPIC_DATA:
      return { ...state, topicData: action.payload }
    case GET_PHOTOS_BY_TOPICS:
      return {...state, topicPhotos: action.payload}
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
  };
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
    handlePhotos
  };
};



export default useApplicationData;