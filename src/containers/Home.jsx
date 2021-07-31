import React from 'react'
import Header from '../components/Header'
import ProductsHome from '../components/ProductsHome'
import SearchHome from '../components/SearchHome'

const Home = () => {
    return (
        <div>
            <Header title='CampoStore'/>
            <SearchHome />
            <ProductsHome />
        </div>
    )
}
export default Home
