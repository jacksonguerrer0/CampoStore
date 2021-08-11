import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import ButtonBack from '../components/ButtonBack';
import { getProductById } from '../services';
import { ContainerPay, ContentFormPay, ContentHeaderProduct, PRightPay } from './pay-styled/PayStyled';

const Pay = () => {
    const [dataProduct, setDataProduct] = useState({});

    const { idProductPay } = useParams();

    const getData = async () => {
        const {data} = await getProductById(idProductPay);
        setDataProduct(data.data)
    }
    console.log(dataProduct)
    

    useEffect(() => {
        getData()
    }, [])
    return (
        <ContainerPay>
            <ContentHeaderProduct>
                <ButtonBack />
                <h2>Comprar</h2>
                <img src={dataProduct.photo?.data.full_url} alt="" />
                <h3>{dataProduct.name}</h3>
                <p>Precio: </p><PRightPay>{dataProduct.price} el {dataProduct.unit}</PRightPay>
                <p>Cantidad:</p><PRightPay>{dataProduct.quantity} {dataProduct.unit}</PRightPay>
            </ContentHeaderProduct>
            <ContentFormPay>
                <label htmlFor="quantityPay">Cantidad a comprar en {dataProduct.unit}:</label>
                <input type="number" id='quantityPay' placeholder='Cantidad a comprar' />
                <p>Total a pagar: <h3>{'precio total'}</h3></p>
                <button type='submit'>Confirmar compra</button>
            </ContentFormPay>
        </ContainerPay>
    )
}

export default Pay
