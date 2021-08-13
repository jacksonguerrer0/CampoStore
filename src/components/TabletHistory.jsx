import React, { useRef, useState } from 'react'
import { calculatorQuantityByPrice, thousandPoint, unitExp } from '../helpers/funtions'
import ButtonGreen from './ButtonGreen'
import { ButtonBuy } from './detail-product-styled/DetailProductStyled'
import ModalRating from './ModalRating'
import { Table, Thead } from './tablet-history-styled/TabletHistoryStyled'
import TrHistoryDataRating from './TrHistoryDataRating'
import TrHistoryData from './TrHistoryDataRating'
import TdHistoryData from './TrHistoryDataRating'


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
        seller: {
            id: 10,
            name: 'Jackson'
        },
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
        seller: {
            id: 1,
            name: 'Admin'
        },
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
        seller: {
            id: 2,
            name: 'Mailer Martinez'
        },
        state: 'unPaid'
    }

]

const TabletHistory = ({headerTablet, modeTablet}) => {
    const [showModal, setShowModal] = useState(false)
    const [seller, setSeller] = useState({})


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
    console.log(seller)
    const modeTabletFunction = () => {

        if(modeTablet === 'rating'){
            return (
                <>
                {
                infoProductBuySale.map((ele, index) => (
                    <TrHistoryDataRating
                    key={index}
                    data={ele}
                    checkStateFunction={checkStateFunction}
                    setSeller={setSeller}
                    setShowModal={setShowModal}
                    />
                ))
                }
                </>
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
                        <td>${thousandPoint(ele.product.total)}</td>
                    </tr>
                ))
            )
        }
    }
    return (
    <>
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
    {
        showModal &&  
        <ModalRating  setShowModal={setShowModal}  seller={seller}/> 
    }
    </>

    )
}

export default TabletHistory
