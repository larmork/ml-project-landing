import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/input/MyInput";
import addNewPost from "../App"

const PostForm = () => {
    const [post, setPost] = useState({title: '', body: ''})
    const [posts, setPosts] = useState([
        {id: 1, title: 'Python', body: 'Description'},
        {id: 2, title: 'Go Lang', body: 'Description'},
        {id: 3, title: 'C++', body: 'Description'}
      ])
    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
      }
    return (
        <form>
        <MyInput
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text" 
        placeholder="Post name"/>
        <MyInput
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text" 
        placeholder="Post description"/>
        <MyButton onClick={addNewPost}> Create post </MyButton>
        </form>
    );
}

export default PostForm;