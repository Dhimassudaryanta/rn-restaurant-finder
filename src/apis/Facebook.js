import axios from 'axios';

export default axios.create({
    baseURL: 'https://graph.facebook.com'
});


//https://graph.facebook.com/v10.0/{person-id}