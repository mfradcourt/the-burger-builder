import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8c4c8.firebaseio.com/'
});

export default instance;
