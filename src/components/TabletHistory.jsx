import React from 'react'
import { calculatorQuantityByPrice, thousandPoint, unitExp } from '../helpers/funtions'
import ButtonGreen from './ButtonGreen'
import { ButtonBuy } from './detail-product-styled/DetailProductStyled'
import { Table, Thead } from './tablet-history-styled/TabletHistoryStyled'


const infoProductBuySale = [
    {   
        id: 1,
        date: '22/07/2021',
        product: {
            name: 'Tomates',
            price: 3000,
            unit: 'Kilo(kg)',
            total: 30000,
        },
        buyerId: 1,
        sellerId: 9,
        state: 'pending'
    },
    {   
        id: 2,
        date: '22/07/2021',
        product: {
            name: 'Pepinos',
            price: 3000,
            unit: 'Kilo(kg)',
            total: 30000,
        },
        buyerId: 10,
        sellerId: 9,
        state: 'paid'
    },
    {
        id: 3,
        date: '22/07/2021',
        product: {
            name: 'Zanahoria',
            price: 3000,
            unit: 'Kilo(kg)',
            total: 30000,
        },
        buyerId: 10,
        sellerId: 9,
        state: 'unPaid'
    }

]

const TabletHistory = ({headerTablet, modeTablet}) => {

    const checkStateFunction = (state) => {
        if(state === 'paid'){  
        return <p className='status status-paid'>Pagado</p>
    }
        if(state ===  'pending'){
        return <p className='status status-pending'>Pendiente</p>
    }
        if(state ===  'unPaid'){
        return <p className='status status-unpaid'>No pagado</p>
    }
    }
    const modeTabletFunction = () => {
        if(modeTablet === 'rating'){
            return (
                infoProductBuySale.map(ele => (
                    <tr key={ele.id}>
                        <td>{ele.date}</td>
                        <td>{ele.product.name}</td>
                        <td>{calculatorQuantityByPrice(ele.product.price, ele.product.total)} {unitExp(ele.product.unit)}</td>
                        <td>${thousandPoint(ele.product.total)}</td>
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
                        <td>{ele.date}</td>
                        <td>{ele.product.name}</td>
                        <td>{calculatorQuantityByPrice(ele.product.price, ele.product.total)} {unitExp(ele.product.unit)}</td>
                        <td>${thousandPoint(ele.product.total)}</td>
                        <td>{checkStateFunction(ele.state)}</td>
                        <td>
                            <ButtonGreen 
                            url={`/profile/${ele.buyerId}`} 
                            text='Ver perfil'
                            />
                        </td>
                    </tr>
                ))
            )
        }
        if(modeTablet === 'sales'){
            return (
                infoProductBuySale.map(ele => (
                    <tr key={ele.id}>
                        <td>{ele.date}</td>
                        <td>{ele.product.name}</td>
                        <td>{calculatorQuantityByPrice(ele.product.price, ele.product.total)} {unitExp(ele.product.unit)}</td>
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
