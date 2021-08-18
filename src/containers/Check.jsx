import React, { useEffect, useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import ButtonBack from '../components/ButtonBack'
import ButtonGreen from '../components/ButtonGreen'
import { getSaleByReference, updateSale } from '../services'
import { ContainerCheck, ContentCheck } from './check-styled/CheckStyled'

const checkState = {
    approved: true,
    declined: false,
    error: false
}
const {approved, declined,  error} = checkState;

const productId = 32
const Check = () => {

    const location = useLocation()
    const query = new URLSearchParams(location.search);
    const idTransaction = query.get('id')

    const [status, setStatus] = useState('')
    const [idSaleWompi, setIdSaleWompi] = useState('')
    const [sale, setSale] = useState({})

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_WOMPI}transactions/${idTransaction}`, {
            method: 'GET'
        }).then((response) => {
            response.json().then((data) => {
                console.log(data)
                setStatus(data?.data?.status)
                setIdSaleWompi(data?.data?.id)
                getSaleByReference(data?.data?.reference).then((responseSale) => {
                    setSale(responseSale?.data?.data[0])
                })
            })
        })
    }, [])

    useEffect(() => {
        if (sale?.id) {
            const dataUpdate = {
                status: status,
                id_transaction: idSaleWompi
            }
            updateSale(dataUpdate, sale.id).then((response) => {
                console.log('update',response)
            })
        }
    }, [sale])

    const checkStateFunction = () => {

    if(status === 'APPROVED'){  
    return (
        <> 
        <div className='status status-approved'>
            <h3 className=' status-approved'>¡Tu pago fue exitoso!</h3>
        </div>
        <img src="https://i.pinimg.com/originals/5f/4f/c7/5f4fc77eeccfae9501d9c2c9f4c80dda.jpg" alt="CampoStore" />
        <p>Ahora hay una nueva familia feliz. Gracias por apoyar el campo Colombiano.</p>
        <span>Puedes ver y calificar tus compras en el historial de tu perfil</span>
        <ButtonGreen url={`/history/me/${10}`} text='Mi Perfil' />
        </>
    )
    }
    if(status === 'DECLINED'){
        return(
            <>
            <div className='status status-declined'>
                <h3 className='status-declined'>¡Tu pago fue declinado!</h3>
            </div>
            <i className="fas fa-exclamation-triangle i-declined"></i>
            <p>Lo sentimos, el metodo de pago no está disponible.</p>
            <span>Selecciona otro método de pago.</span>
            <ButtonGreen url={`/pay/${productId}`} text='Volver a Intentar' />
            </>
        )
    }
    if(status === 'PENDING'){
        return(
            <>
            <div className='status status-declined'>
                <h3 className='status-declined'>¡Tu pago se encuentra pendiente!</h3>
            </div>
            <i className="fas fa-exclamation-triangle i-declined"></i>
            <p>No completaste el proceso del pago.</p>
            <span>Completa tu pago.</span>
            <ButtonGreen url={`/pay/${productId}`} text='Volver a Intentar' />
            </>
        )
    }
    if(status === 'ERROR'){
        return(
            <>
            <div className='status status-error'>
                <h3 className=' status-error'>¡Error de pago!</h3>
            </div>
            <i className="fas fa-exclamation-circle i-error"></i>
            <p>Lo sentimos, hubo un error al pagar.</p>
            <span>Vuelve a ejecutar la compra</span>
            <ButtonGreen url={`/pay/${productId}`} text='Volver a Intentar' />
            </>
        )
    }
    }

    if(location.search.length === 0){
        return (<Redirect  to='home'/>)
    }
    

    return (
        <ContainerCheck>
            <ContentCheck>
            <ButtonBack/>
            {
                checkStateFunction()
            }
            </ContentCheck>
        </ContainerCheck>
    )
}

export default Check
