import React from 'react'
import CardProduct from './CardProduct'
import Loader from './Loader'
import { ContainerProductsHome } from './products-home-styled/ProductsHomeStyled'

const ProductsHome = ({ modeMyProfile, dataProducts, setRefresh}) => {
    return (
        <ContainerProductsHome>
            {
                dataProducts.map((product, index) => (
                    <CardProduct 
                        key={index} 
                        modeMyProfile={modeMyProfile}
                        product={product}
                        setRefresh={setRefresh}
                    />
                ))
            }
        </ContainerProductsHome>
    )
}

export default ProductsHome
