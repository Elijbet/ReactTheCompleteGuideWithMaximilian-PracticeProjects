import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    componentDidMount(){
        //you can't save this in a variable directly, since requests are
        //asynchronous and will block the execution of the next line.
        //Use .then
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log('response', response)
            })
    }
    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;