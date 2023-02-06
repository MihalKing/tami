import React, {useState} from 'react';
import './App.css';

import './styles/App.css'

import {PostList} from "./components/PostList";
import {MyButton} from "./components/UI/button/MyButton";
import {MyInput} from "./components/UI/input/MyInput";

const App = ( ) => {
    let [posts,setPost] = useState([
        {id:1,title:'JavaScript-1',body:'JavaScript - мова програмування'},
        {id:2,title:'JavaScript-2',body:'JavaScript - мова програмування'},
        {id:3,title:'JavaScript-3',body:'JavaScript - мова програмування'}
    ]);

const [title,setTitle] = useState('text');
const [body,setBody] = useState('text');

const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
        id:Date.now(),
        title,
        body
    }
    setPost([...posts,newPost])
}
    return (
        <div className='App'>
            <form>
                <MyInput
                    onChange={e => setTitle(e.target.value)}
                    props={posts}
                    value={title}
                    type='text'
                    placeholder='name of post'/>


                <MyInput
                    onChange={e => setBody(e.target.value)}
                    props={posts}
                    value={body}
                    type='text'
                    placeholder='name of post'/>/>
                <MyButton onClick={addNewPost}>create post</MyButton>
            </form>
            <PostList posts={posts} title={'Список постів '}/>
        </div>
    );
};

export {App};