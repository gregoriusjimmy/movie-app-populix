import axios from 'axios';

// TODO: handle undefined extra
axios.defaults.baseURL = 'https://api.themoviedb.org/4';
axios.defaults.headers.post['Content-Type'] = 'application/json';
