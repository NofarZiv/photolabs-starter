import {useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

  const { photos, topics } = props

  const [heart, setHeart] = useState(0)
  const handlingHeart = () => {
    setHeart(heart + 1)
    console.log(heart)
  }


  return (
    <div className="home-route">
       <TopNavigation topics={topics}/>
       <PhotoList photos={photos} handlingHeart={handlingHeart}/>
    </div>
  );
};

export default HomeRoute;
