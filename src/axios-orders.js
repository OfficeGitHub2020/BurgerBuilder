import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://my-burger-builder-7d2c2.firebaseio.com/'
});
export default instance;