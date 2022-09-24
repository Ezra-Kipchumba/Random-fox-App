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
        <button onClick={IncreaseLikes}>Likes:{likes}</button>
        <button onClick={NewImage}>New Fox</button>
      </div>
      <img src={image} alt=""></img>
      <Comments CommentsAdded="Liza: Wow, really cute foxes" />
      <Comments CommentsAdded="Liza: How do we sign up to your website though?" />
      <Comments CommentsAdded="Meme: Y'all should visit this place" />
      <Comments CommentsAdded="Chris: Awesome" />
      <Comments CommentsAdded="Kyle: some nice wallpapers you should download, haha" />
      <Comments />
    </div>
  );
}
function Comments(props) {
  return (<div>{props.CommentsAdded}</div>)
}

export default App;
