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