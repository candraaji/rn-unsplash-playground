import axios from 'axios';
import {Config} from 'react-native-config';

const ApiManager = axios.create({timeout: 150000});

ApiManager.interceptors.request.use(async config => {
  config.baseURL = Config.BASE_URL;
  config.headers.set(
    'Authorization',
    `Client-ID ` + Config.UNSPLASH_ACCESS_KEY,
  );
  return config;
});

ApiManager.interceptors.response.use(
  response => {
    console.log(`[Services] ${response.config.url} ${response.status}`);
    return response;
  },
  async error => {
    console.log(
      `[Services] ERROR - ${error.config.url} ${JSON.stringify(error)}}`,
    );
    return Promise.reject(error.message);
  },
);

export default ApiManager;
