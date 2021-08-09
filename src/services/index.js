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

export const getListProductsByUser = (idUser) => {
  return new Promise(function (resolve, reject) {
    axios.get(`${process.env.REACT_APP_URL_API}items/products?fields=*.*&filter[owner]=${idUser}`)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};

export const getProductById = (idProduct) => {
  return new Promise(function (resolve, reject) {
    axios.get(`${process.env.REACT_APP_URL_API}items/products/${idProduct}?fields=*.*`)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('data', file)

  return new Promise(function (resolve, reject) {
    axios.post(`${process.env.REACT_APP_URL_API}files`,formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};

export const postProduct = (data) => {
  return new Promise(function (resolve, reject) {
    axios.post(`${process.env.REACT_APP_URL_API}items/products/`, data)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};

export const updateProduct = (data, idProduct) => {
  return new Promise(function (resolve, reject) {
    axios.patch(`${process.env.REACT_APP_URL_API}items/products/${idProduct}`, data)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};