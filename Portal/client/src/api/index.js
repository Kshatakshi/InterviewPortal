import axios from 'axios';

const url = 'http://localhost:5000/action/';

export const fetchList = () => axios.get(url);
export const create = (newInterview) => axios.post(url, newInterview);