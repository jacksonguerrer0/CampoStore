import React from 'react'
import { Link } from 'react-router-dom'
import ButtonGreen from './ButtonGreen'
import { ContentDetailInfo, ContentPDetail, ContentProduct, Pr } from './card-product-styled/CardProductStyled'

const CardProduct = () => {
    return (
        <>
            <ContentProduct>
                <img src="https://productmanagementfestival.com/wp-content/uploads/2017/01/sell-your-product-online.jpg" alt="" />
                <ContentDetailInfo>
                    <h3>Producto</h3>
                    <ContentPDetail>
                        <p>Precio:</p><Pr>Soy precio</Pr>
                        <p>Cantidad:</p><Pr>Soy cantidad</Pr>
                    </ContentPDetail>
                    <ButtonGreen url='/detalleProducto' text='Ver el producto' />
                </ContentDetailInfo>
            </ContentProduct>
        </>
    )
}

export default CardProduct
