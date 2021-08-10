import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import ButtonBack from '../components/ButtonBack';
import { getProductById } from '../services';
import { ContainerPay, ContentHeaderProduct } from './pay-styled/PayStyled';

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
                <p>{dataProduct.price}</p>
                <p>{dataProduct.quantity}</p>
            </ContentHeaderProduct>
            <form>
                <label htmlFor="quantityPay">Cantidad a comprar</label>
                <input type="number" id='quantityPay' placeholder='Cantidad a comprar' />
                <p>Total a pagar:</p><h3>{'precio total'}</h3>
                <button type='submit'>Confirmar compra</button>
            </form>
        </ContainerPay>
    )
}

export default Pay
