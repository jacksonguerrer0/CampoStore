import React from 'react'
import { calculatorQuantityByPrice, thousandPoint, unitExp } from '../helpers/funtions'
import { Table, Thead } from './tablet-history-styled/TabletHistoryStyled'


const infoProductBuySale = [
    {   
        id: 1,
        data: '22/07/2021',
        name: 'Tomates',
        price: 3000,
        unit: 'Kilo(kg)',
        total: 30000,
        state: {
            paid: true,
            pending: false,
            unPaid: false
        }
    },
    {   
        id: 2,
        data: '22/07/2021',
        name: 'Pepinos',
        price: 3000,
        unit: 'Kilo(kg)',
        total: 30000,
        state: {
            paid: false,
            pending: true,
            unPaid: false
        }
    },
    {
        id: 3,
        data: '22/07/2021',
        name: 'Zanahoria',
        price: 3000,
        unit: 'Kilo(kg)',
        total: 30000,
        state: {
            paid: false,
            pending: false,
            unPaid: true
        }
    }

]

const TabletHistory = ({headerTablet, modeTablet}) => {

    const checkStateFunction = (state) => {
        if(state.paid){  
        return <p className='status status-paid'>Pagado</p>
    }
        if(state.pending){
        return <p className='status status-pending'>Pendiente</p>
    }
        if(state.unPaid){
        return <p className='status status-unpaid'>No pagado</p>
    }
    }
    const modeTabletFunction = () => {
        if(modeTablet === 'rating'){
            return (
                infoProductBuySale.map(ele => (
                    <tr key={ele.id}>
                        <td>{ele.data}</td>
                        <td>{ele.name}</td>
                        <td>{calculatorQuantityByPrice(ele.price, ele.total)} {unitExp(ele.unit)}</td>
                        <td>${thousandPoint(ele.total)}</td>
                        <td>{checkStateFunction(ele.state)}</td>
                        <td><button>Calificar</button></td>
                    </tr>
                ))
            )
        }
        if(modeTablet === 'state'){
            return (
                infoProductBuySale.map(ele => (
                    <tr key={ele.id}>
                        <td>{ele.data}</td>
                        <td>{ele.name}</td>
                        <td>{calculatorQuantityByPrice(ele.price, ele.total)} {unitExp(ele.unit)}</td>
                        <td>${thousandPoint(ele.total)}</td>
                        <td>{checkStateFunction(ele.state)}</td>
                    </tr>
                ))
            )
        }
        if(modeTablet === 'sales'){
            return (
                infoProductBuySale.map(ele => (
                    <tr key={ele.id}>
                        <td>{ele.data}</td>
                        <td>{ele.name}</td>
                        <td>{calculatorQuantityByPrice(ele.price, ele.total)} {unitExp(ele.unit)}</td>
                        <td>${thousandPoint(ele.total)}</td>
                    </tr>
                ))
            )
        }
    }
    return (
    <Table>
        <Thead>
            <tr>
            {
                    headerTablet.map(ele => (
                        <th key={ele}>{ele}</th>
                    ))
            }
            </tr>
        </Thead>

        <tbody>
            {
                modeTabletFunction()
            }
        </tbody>
    </Table>
    )
}

export default TabletHistory
