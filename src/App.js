import React, {useState} from 'react';

import './App.css';
import './styles/App.css'

import {PostList} from "./components/postComponents/PostList";
import {PostForm} from "./components/postComponents/PostForm";
import {MySelect} from "./components/UI/select/MySelect";
import {MyInput} from "./components/UI/input/MyInput";


const App = ( ) => {
    let [posts,setPosts] = useState([
        {id:1,title:'JavaScript-1',body:'JavaScript - мова програмування'},
        {id:2,title:'JavaScript-2',body:'JavaScript - мова програмування'},
        {id:3,title:'JavaScript-3',body:'JavaScript - мова програмування'}
    ]);

    const createPost = (newPost) => {
        setPosts([...posts,newPost])
    }

     const removePost = (post) => {
     setPosts(posts.filter(p => p.id !== post.id))
    }

    const [selectedSort,setSelectedSort] = useState('');
    const [searchQuery,setSearchQuery] = useState('');

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
        console.log(sort);
    }

    return (
        <div className='App'>

            <MyInput
                value={searchQuery}
                onChehge={e => setSearchQuery(e.target.value)}
            placeholder='select post...'
            />

            <PostForm create={createPost}/>

            <MySelect
                key={selectedSort.value}
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='select'
                options={[
                    {value: 'body',name:'by name'},
                    {value: 'title',name:'by description'}
                ]}
            />

            {posts.length
                ? <PostList remove={removePost} posts={posts} title={'Список постів '}/>
                : <h1 className={'warning'}>List of post doesnt find</h1>
            }
        </div>
    );
};

export {App};