import * as axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_URL_API;

axios.interceptors.request.use(
  config => {
      const token = JSON.parse(sessionStorage.getItem("token"));
      const user = JSON.parse(sessionStorage.getItem("user"));

      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }

    return config;
  },
  error => Promise.reject(error)
);