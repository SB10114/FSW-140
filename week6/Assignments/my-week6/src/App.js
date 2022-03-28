import './App.css';
import axios from "axios";
import React from "react";

const baseURL = "/avengers";

export default function App() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [])

  console.log('post: ', post)

  return (
    <>
      {post.map((item, index) => {
        return <div key={index} class = "display">
          <h1>{item.name}</h1>
          <h3>Current character: {item.current}</h3>
          <h3>Number of appearances: {item.appearances}</h3>

        </div>
      })}
    </>
  )

};

