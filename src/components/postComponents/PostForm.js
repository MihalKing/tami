import React from 'react';
import {useState} from "react";

import {MyInput} from "../UI/input/MyInput";
import {MyButton} from "../UI/button/MyButton";

const PostForm = ({create}) => {
    const [post,setPost] = useState({title:'',body:''});

   const addNewPost = (e) => {
       e.preventDefault()
       const newPost = {
           ...post,id:Date.now()
       }
       create(newPost)
       setPost({title:'',body:''})
   }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post,title: e.target.value})}
                type='text'
                placeholder='name of title'
            />

            <MyInput
                onChange={e => setPost({...post,body: e.target.value})}
                value={post.body}
                type='text'
                placeholder='name of body'/>
            <MyButton onClick={addNewPost}>create post</MyButton>
        </form>
    );
};

export {PostForm};