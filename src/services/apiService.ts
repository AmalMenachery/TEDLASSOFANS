import axios from 'axios';
import { TV_MAZE_BASE_URL } from '../constants/common';


const apiClient = axios.create({
  baseURL: TV_MAZE_BASE_URL,
  timeout: 5000,
});

export default apiClient;