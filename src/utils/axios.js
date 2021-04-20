import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://dry-wash.herokuapp.com'
})

export default instance;


