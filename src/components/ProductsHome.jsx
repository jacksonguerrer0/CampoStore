import React from 'react'
import CardProduct from './CardProduct'
import { ContainerProductsHome } from './products-home-styled/ProductsHomeStyled'

const ProductsHome = () => {
    return (
        <ContainerProductsHome>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
        </ContainerProductsHome>
    )
}

export default ProductsHome
