import {useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

  const { photos, topics } = props

  const [favorites, setFavorites] = useState([])
  const handlingFavorites = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites(favorites.filter(id => id !== photoId));
    } else {
      setFavorites([...favorites, photoId]);
    };
  };


  return (
    <div className="home-route">
       <TopNavigation topics={topics}/>
       <PhotoList photos={photos} favorites={favorites} handlingFavorites={handlingFavorites}/>
    </div>
  );
};

export default HomeRoute;
