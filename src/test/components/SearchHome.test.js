import React from 'react'
import listSearchStore from '../../actions/searchHome'

const products = [
    {
        nombre: "Peli",
        title:'Jackson'
    },
    {
        nombre: 'Playa',
        title: 'Jorge',
    }
]

describe('Test barra de busqueda home', () => {
    test('Devuelve coincidencia en array', () => {
        expect(listSearchStore("Jackson", products )).toEqual([products[0]])
    })
    test('Si busco un string vacio', () => {
        expect(listSearchStore('', products)).toEqual(products)
    })
    test('Si busco por numeros', () => {
        expect(listSearchStore(12, products)).toEqual(undefined)
    })
    test('Si busco pero no escuentro coincidencia', () => {
        expect(listSearchStore("guerrero vega", products)).toEqual([])
    })
})
