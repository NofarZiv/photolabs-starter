import React from 'react';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';


// Note: Rendering a single component to build components in isolation
const App = () => {

  // const arr = [];
  // for (let i = 0; i < 3; i++) {
  //   arr.push(<PhotoListItem key={i} sampleDataForPhotoListItem={sampleDataForPhotoListItem}/>);
  // }


  return (
    <div className="App">
      {/* {arr} */}
      {/* <TopNavigation />
      <PhotoList /> */}
      <HomeRoute />
    </div>
  );
};

export default App;
