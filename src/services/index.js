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
    axios.post(`${process.env.REACT_APP_URL_API}items/products`, data)
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

export const deleteProduct = (id) => {
  return new Promise(function (resolve, reject) {
    axios.delete(`${process.env.REACT_APP_URL_API}items/products/${id}`)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
}
export const deleteFile = (id) => {
  return new Promise(function (resolve, reject) {
    axios.delete(`${process.env.REACT_APP_URL_API}files/${id}`)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};

export const getSalesInfo = (idUser) => {
  return new Promise(function (resolve, reject) {
    axios.get(`${process.env.REACT_APP_URL_API}items/sales?fields=*.*
    `)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};

export const getSalesSeller = (idUser) => {
  return new Promise(function (resolve, reject) {
    axios.get(`${process.env.REACT_APP_URL_API}items/sales?fields=*.*&filter[seller]=${idUser}
    `)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};
export const getBuyBuyer = (idUser) => {
  return new Promise(function (resolve, reject) {
    axios.get(`${process.env.REACT_APP_URL_API}items/sales?fields=*.*&filter[buyer]=${idUser}
    `)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};
export const postSale = (data) => {
  return new Promise(function (resolve, reject) {
    axios.post(`${process.env.REACT_APP_URL_API}items/sales`, data)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};

export const getSaleByReference = (reference) => {
  return new Promise(function (resolve, reject) {
    axios.get(`${process.env.REACT_APP_URL_API}items/sales?filter[reference]=${reference}`)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};

export const updateSale = (data, idSale) => {
  return new Promise(function (resolve, reject) {
    axios.patch(`${process.env.REACT_APP_URL_API}items/sales/${idSale}`, data)
      .then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err)
      })
  });
};