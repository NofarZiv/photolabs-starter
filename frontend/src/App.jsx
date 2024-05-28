import React from 'react';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {

  // const arr = [];
  // for (let i = 0; i < 3; i++) {
  //   arr.push(<PhotoListItem key={i} sampleDataForPhotoListItem={sampleDataForPhotoListItem}/>);
  // }


  return (
    <div className="App">
      {/* {arr} */}
      <PhotoList />
      <TopicList />
    </div>
  );
};

export default App;
