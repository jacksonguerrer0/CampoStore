import React, { useState } from 'react'
import listSearchStore from '../actions/searchHome'
import { ButtonSearch, FormSearch, InputSearch } from './serach-home-styled/SearchHomeStyled'

const SearchHome = () => {
    const [search, setSearch] = useState('')

    const handleSearchSubmit = (e) => {
        e.preventDefault()
    }
    const handleSearchChange = ({ target }) => {
        setSearch(target.value)
    }
    console.log(listSearchStore())

    return (
        <FormSearch onSubmit={handleSearchSubmit}>
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