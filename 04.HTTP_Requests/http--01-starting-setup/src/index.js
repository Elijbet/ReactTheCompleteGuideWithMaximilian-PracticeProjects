import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'

//Interceptors used to edit config globally by say adding a header.
axios.interceptors.request.use(requestConfig => {
	// Edit request config.
	return requestConfig;
	//this is for internet connectivity errors, say if request sending fails.
}, error => { 
		console.log(error);
		return Promise.reject(error);
})
//this will handle the response 
axios.interceptors.response.use(response => {
	return response;
}, error => { 
		console.log(error);
		return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
