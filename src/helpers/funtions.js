

export const unitExp = (unit) => {
    let exp = /\(([^)]+)\)/;
    let matches = exp.exec(unit);
    return matches[1]
}

export const thousandPoint = (str) => {
    let thousand = str.toLocaleString('en-US');
    return thousand
}

export const calculatorQuantityByPrice = (priceUnit, totalPrice) => {
    let quantity = totalPrice / priceUnit;
    return quantity
}

export const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

export const newDateCreatedOn = (str) => {
    let newDate = new Date(str)
    // let format = moment(newDate).format('DD/MM/YYYY')
    console.log(newDate)
    // return 
}