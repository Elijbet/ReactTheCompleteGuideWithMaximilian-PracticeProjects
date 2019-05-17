import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://interactive-burger-builder.firebaseio.com/'
});

export default instance;