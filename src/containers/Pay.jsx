import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import ButtonBack from '../components/ButtonBack';
import useForm from '../hooks/useForm';
import { getProductById, postSale } from '../services';
import { ContainerPay, ContentFormPay, ContentHeaderProduct, PRightPay } from './pay-styled/PayStyled';
import { unitExp, thousandPoint } from '../helpers/funtions.js'
import { getUser } from '../services/login';

const Pay = () => {
    const [dataProduct, setDataProduct] = useState({});
    const [totalPay, setTotalPay] = useState(0)
    const [dataProfile, setDataProfile] = useState({})
    const { idProductPay } = useParams();

    const getDataProfile = async () => {
        const data = await getUser();
        const user = data.data.data
        setDataProfile({
            id: user.id
        })
    }

    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://checkout.wompi.co/widget.js";
        script.async = true;

        document.body.appendChild(script);
        getDataProfile()
    }, [])

    const handleChangeTotalPay = async (e) => {
        setTotalPay(e.target.value * dataProduct.price)
    }

    const handleBlur = (e) => {
        if (e.target.value >= 1 && e.target.value <= dataProduct.quantity) {
            setTotalPay(e.target.value * dataProduct.price)
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puedes exceder de la cantidad disponible!'
            })
            e.target.value = 1
            setTotalPay(e.target.value * dataProduct.price)
        }
    }

    console.log(dataProduct)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const date = new Date()
        const string = date.toLocaleString()
        const reference = btoa(string)

        //Save the transaction
        const dataSend = {
            product: dataProduct.id,
            quantity: totalPay / dataProduct.price,
            id_transaction: null,
            status: 'PENDING',
            total: totalPay,
            seller: dataProduct.owner.id,
            buyer: dataProfile.id,
            reference: reference
        }
        const response = await postSale(dataSend)
        console.log(response)
        
        console.log(dataProduct, totalPay)
        let checkout = new window.WidgetCheckout({
            currency: 'COP',
            amountInCents: totalPay*100,
            reference: reference,
            publicKey: process.env.REACT_APP_PUBLIC_KEY_WOMPI,
            redirectUrl: `${process.env.REACT_APP_URL_FRONT}check` // Opcional
        })
        checkout.open( async ( result ) => {
            //Guardar en la base de datos
            let transaction = result.transaction
            console.log('Transaction ID: ', transaction.id)
            console.log('Transaction object: ', transaction)
        })
    }

    const getData = async () => {
        const {data} = await getProductById(idProductPay);
        setDataProduct(data.data)
        setTotalPay(data.data.price)
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
                    <p>Precio: </p><PRightPay>${thousandPoint(dataProduct?.price)} X  {dataProduct.unit}</PRightPay>
                    <p>Cantidad disponible:</p><PRightPay>{dataProduct.quantity} {unitExp(dataProduct?.unit)}</PRightPay>
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
                        max={dataProduct.quantity}
                        defaultValue={1}
                        onBlur={handleBlur}
                        onChange={(e) => {
                            handleChangeTotalPay(e)
                        }}/>
                        <p>Total a pagar:</p><h3>{'$' + totalPay.toLocaleString('en-US')}</h3>
                        <button type='submit'>Confirmar compra</button>
                    </>
                }
            </ContentFormPay>
        </ContainerPay>
    )
}

export default Pay
