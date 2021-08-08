import axios from "axios";

export const getListProducts = () => {
    return new Promise(function (resolve, reject) {
      axios.get(`${process.env.REACT_APP_URL_API}items/products?fields=*.*`)
        .then((response) => {
          resolve(response);
        }).catch((err) => {
          reject(err)
        })
    });
};