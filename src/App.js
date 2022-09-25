import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import Postitem from "./components/PostItem";
import PostList from "./components/PostsList";
import "./styles/App.css";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Python', body: 'Description'},
    {id: 2, title: 'Go Lang', body: 'Description'},
    {id: 3, title: 'C++', body: 'Description'}
  ])
  const [post, setPost] = useState({title: '', body: ''})

  return (
    <div className="App">
      <PostForm/>
      <PostList posts={posts} title="Post list"/>
    </div>
  );
}

export default App;
