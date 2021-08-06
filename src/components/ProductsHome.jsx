import React from 'react'
import CardProduct from './CardProduct'
import { ContainerProductsHome } from './products-home-styled/ProductsHomeStyled'

const ProductsHome = ({ modeMyProfile }) => {
    return (
        <ContainerProductsHome>
            <CardProduct modeMyProfile={modeMyProfile}/>
            <CardProduct modeMyProfile={modeMyProfile}/>
            <CardProduct modeMyProfile={modeMyProfile}/>
            <CardProduct modeMyProfile={modeMyProfile}/>
            <CardProduct modeMyProfile={modeMyProfile}/>
            <CardProduct modeMyProfile={modeMyProfile}/>
        </ContainerProductsHome>
    )
}

export default ProductsHome
