import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import ButtonBack from '../components/ButtonBack';
import useForm from '../hooks/useForm';
import { getProductById } from '../services';
import { ContainerPay, ContentFormPay, ContentHeaderProduct, PRightPay } from './pay-styled/PayStyled';

const Pay = () => {
    const [dataProduct, setDataProduct] = useState({});
    const [totalPay, setTotalPay] = useState(0)
    const { idProductPay } = useParams();

    const handleChangeTotalPay = async (e) => {
        if (e.target.value >= 1) {
            setTotalPay(e.target.value * dataProduct.price)
        }
    }

    console.log(dataProduct)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(dataProduct, totalPay)
    }

    const getData = async () => {
        const {data} = await getProductById(idProductPay);
        setDataProduct(data.data)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <ContainerPay>
            <ContentHeaderProduct>
                <ButtonBack />
                <h2>Comprar</h2>
                <img src={dataProduct.photo?.data.full_url} alt="" />
                {
                    dataProduct?.id &&
                    <>           
                    <h3>{dataProduct.name}</h3>
                    <p>Precio: </p><PRightPay>${dataProduct.price?.toLocaleString('en-US')} el {dataProduct.unit}</PRightPay>
                    <p>Cantidad disponible en {dataProduct.unit}:</p><PRightPay>{dataProduct.quantity}</PRightPay>
                    </>
                }
            </ContentHeaderProduct>
            <ContentFormPay onSubmit={handleSubmit}>
                {
                    dataProduct?.id &&
                    <>
                        <label htmlFor="quantityPay">Cantidad a comprar en {dataProduct.unit}:</label>
                        <input 
                        type="number" 
                        id='quantityPay'
                        name='quantityPay' 
                        placeholder='Cantidad a comprar'
                        min='1'
                        onChange={(e) => {
                            handleChangeTotalPay(e)
                        }}/>
                        <p>Total a pagar: <h3>{'$' + totalPay.toLocaleString('en-US')}</h3></p>
                        <button type='submit'>Confirmar compra</button>
                    </>
                }
            </ContentFormPay>
        </ContainerPay>
    )
}

export default Pay
