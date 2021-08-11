import React from 'react'
import CardProduct from './CardProduct'
import Loader from './Loader'
import { ContainerProductsHome } from './products-home-styled/ProductsHomeStyled'

const ProductsHome = ({ modeMyProfile, dataProducts }) => {
    return (
        <ContainerProductsHome>
            {console.log(dataProducts.length !== 0)}
            {
                dataProducts.length !== 0 ?
                dataProducts.map((product, index) => (
                    <CardProduct 
                        key={index} 
                        modeMyProfile={modeMyProfile}
                        product={product}
                    />
                ))
                : <Loader />
            }
        </ContainerProductsHome>
    )
}

export default ProductsHome
