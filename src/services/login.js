import axios from "axios";

export const loginEmail = (data) => {
    return new Promise(function (resolve, reject) {
      axios.post(`${process.env.REACT_APP_URL_API}auth/authenticate`,data)
        .then((response) => {
          resolve(response);
        }).catch((err) => {
          reject(err)
        })
    });
};

export const createUser = (data) => {
  return new Promise(function (resolve, reject) {
    axios.post(`${process.env.REACT_APP_URL_API}users`,data)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};

export const getUser = () => {
  return new Promise(function (resolve, reject) {
    axios.get(`${process.env.REACT_APP_URL_API}users/me?fields=*.*`)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};

export const getUserById = (id) => {
  return new Promise(function (resolve, reject) {
    axios.get(`${process.env.REACT_APP_URL_API}users/${id}?fields=*.*`)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};