import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductsHome from '../components/ProductsHome'
import SearchHome from '../components/SearchHome'
import { getListProducts } from '../services'
import Loader from '../components/Loader'

const Home = () => {

    const [dataProducts, setDataProducts] = useState([])

    const getData = async () => {
        const {data} = await getListProducts()
        setDataProducts(data.data)
    }

    useEffect(() => {
        getData()
    }, [])
    console.log(dataProducts)

    return (
        <div>
            <Header title='CampoStore'/>
            <SearchHome />
            {
                dataProducts.length !== 0
                ?<ProductsHome dataProducts={dataProducts} />
                : <Loader />
            }
        </div>
    )
}
export default Home
