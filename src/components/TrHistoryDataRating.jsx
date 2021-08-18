import React from 'react'
import { calculatorQuantityByPrice, newDateCreatedOn, thousandPoint, unitExp } from '../helpers/funtions'

const TrHistoryDataRating = ({ data, checkStateFunction, setSeller, setShowModal }) => {
    const handleModal = () => {
        setShowModal(true)
        setSeller({data})
    }
    return (
        <>
        <tr key={data.id}>
        <td>{newDateCreatedOn(data.created_on)}</td>
        <td>{data.product.name}</td>
        <td>{data.product.quantity} {unitExp(data.product.unit)}</td>
        <td>${thousandPoint(data.total)}</td>
        <td>{checkStateFunction(data.status)}</td>
            <td><button onClick={handleModal}>Calificar</button></td>
        </tr>
        </>
    )
}

export default TrHistoryDataRating
