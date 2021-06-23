import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer CWmR9uypVSql6HppfzIMfZk7bX2V7KGPU9Dw0034t3rhISv0y8Dj66vpuYQG6yS9FG4Bo_6Xss1SU_XtYptUxudMal6xrI--b8B24a0QXqoPMWIvUFbW2XFZ2xdbYHYx'
    }
});
