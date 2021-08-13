import React, { useState } from 'react'
import Toastify from 'toastify-js'
import listSearchStore from '../actions/searchHome'
import { removeAccents } from '../helpers/funtions'
import { ButtonSearch, FormSearch, InputSearch } from './serach-home-styled/SearchHomeStyled'

const SearchHome = ({ setDataProducts, dataProductsReading }) => {

    const [search, setSearch] = useState('')

    const handleSearchChange = async (e) => {
        e.persist();
        await setSearch(e.target.value)
    }
    const handleSearchClick = (e) => {
        e.preventDefault()
        const filterSearch = dataProductsReading.filter(ele =>{
            return (removeAccents(ele.name.toLowerCase()).includes(removeAccents(search.toLowerCase())))
        })
        if(filterSearch.length !== 0 ){
            setDataProducts(filterSearch)
        }else{
            Toastify({
                text: "No hay coincidencias",
                backgroundColor: "linear-gradient(to right, #b93c1d, #f81808)",
                duration: 2000
            }).showToast();
        }
        console.log(filterSearch)
    }
    return (
        <FormSearch onSubmit={handleSearchClick}>
            <ButtonSearch 
            type='submit'
            ><i className="fas fa-search"></i></ButtonSearch>
            <InputSearch 
            type="text" 
            placeholder='Buscar...' 
            name='search'
            vale={search}
            onChange={handleSearchChange}
            />
        </FormSearch>
    )
}

export default SearchHome