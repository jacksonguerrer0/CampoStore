

export const unitExp = (unit) => {
    let exp = /\(([^)]+)\)/;
    let matches = exp.exec(unit);
    return matches[1]
}

export const thousandPoint = (str) => {
    let thousand = str.toLocaleString('en-US');
    return thousand
}