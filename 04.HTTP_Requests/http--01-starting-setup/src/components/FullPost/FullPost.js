import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    //If you open network tab you will see that we're running requests
    //endlessly, it's because as soon as we update the state the component is
    //updated, and so the componentDidUpdate hook runs again and we enter an
    //infinite loop. Make sure we send an http request if we actually loaded a
    //new post. So check props.id against loadedPost.id.
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadedPost || this.state.loadedPost && this.state.loadedPost.id !== this.props.id){
                axios.get('/posts/' + this.props.id)
                    .then(response => {
                        // console.log('response', response)
                        this.setState({loadedPost: response.data});
                    })
            }
        }
    }
    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = <p style={{textAlign: 'center'}}>Loading... !</p>;
        }
        if(this.state.loadedPost){
          post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                </div>
            </div>
            );  
        }
        
        return post;
    }
}

export default FullPost;