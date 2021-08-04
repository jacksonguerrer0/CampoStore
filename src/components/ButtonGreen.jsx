import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerButtonGreen } from './button-green-styled/ButtonGreenStyled'

const url2 = '/messages'
const text2 = 'Contactar'


const ButtonGreen = ({ url = url2 , text = text2 }) => {
    return (
        <ContainerButtonGreen>
            <Link to={ url }>
                { text }
            </Link>
        </ContainerButtonGreen>
    )
}

export default ButtonGreen
