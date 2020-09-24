
import axios from 'axios';

const api = axios.create({
   baseURL:"https://uploadimagem.herokuapp.com/"
});
export default api;