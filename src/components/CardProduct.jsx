import React from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to='/detalleProducto'>
                        Ver el Producto
                    </Link>
                </ContentDetailInfo>
            </ContentProduct>
        </>
    )
}

export default CardProduct
