import React from 'react'
import CardProduct from './CardProduct'
import { ContainerProductsHome } from './products-home-styled/ProductsHomeStyled'

const ProductsHome = ({ modeMyProfile, dataProducts }) => {
    return (
        <ContainerProductsHome>
            {
                dataProducts.map((product, index) => (
                    <CardProduct 
                        key={index} 
                        modeMyProfile={modeMyProfile}
                        product={product}
                    />
                ))
            }
        </ContainerProductsHome>
    )
}

export default ProductsHome
