import React, {useState } from 'react';
import './App.css';



function App() {

  const [image, setImage] = useState("https://randomfox.ca/images/116.jpg");
  const [likes, setLikes] = useState(0);

  function NewFork() {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then(({ image }) => {
        setImage(image);
      });
  }
  function NewImage() {
  setImage(NewFork)
  }
  function IncreaseLikes() {
    setLikes(likes+1);
  }


  return (
    <div>
      <h1>Random Cute Fox</h1>
      <div className="buttons">
        <button onClick={IncreaseLikes}>Likes:{ likes }</button>
        <button onClick={NewImage}>New Fox</button>
      </div>
      <img src={image} alt=""></img>
    </div>
  );
}

export default App;
