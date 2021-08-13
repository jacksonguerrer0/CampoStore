import React from 'react'
import { calculatorQuantityByPrice, thousandPoint, unitExp } from '../helpers/funtions'

const TrHistoryDataRating = ({ data, checkStateFunction, setSeller, setShowModal }) => {
    const handleModal = () => {
        setShowModal(true)
        setSeller({data})
    }
console.log(data)
    return (
        <>
        <tr key={data.id}>
            <td>{data.date}</td>
            <td>{data.product.name}</td>
            <td>{calculatorQuantityByPrice(data.product.price, data.product.total)} {unitExp(data.product.unit)}</td>
            <td>${thousandPoint(data.product.total)}</td>
            <td>{checkStateFunction(data.state)}</td>
            <td><button onClick={handleModal}>Calificar</button></td>
        </tr>
        </>
    )
}

export default TrHistoryDataRating
