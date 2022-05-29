import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3333/api';

export function initAxios(toast){
    axios.interceptors.response.use(function (config) {
        return config;
      }, function (error) {
          toast({title: "System Error. Try again", status: 'error'});
        return Promise.reject(error);
      });
}