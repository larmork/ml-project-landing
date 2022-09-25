import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import Postitem from "./components/PostItem";
import PostList from "./components/PostsList";
import "./styles/App.css";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Python', body: 'Description'},
    {id: 2, title: 'Go Lang', body: 'Description'},
    {id: 3, title: 'C++', body: 'Description'}
  ])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = () => {
    }
  }
  return (
    <div className="App">
      <form>
        <MyInput
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="text" 
        placeholder="Post name"/>
        <MyInput
        value={body}
        onChange={e => setBody(e.target.value)}
        type="text" 
        placeholder="Post description"/>
        <MyButton onClick={addNewPost}> Create post </MyButton>
      </form>
      <PostList posts={posts} title="Post list"/>
    </div>
  );
}

export default App;
