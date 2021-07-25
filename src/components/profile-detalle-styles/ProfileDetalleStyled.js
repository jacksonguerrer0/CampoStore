import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContainerDetalle = styled.div`
    background-color: ${variables.white};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
`
export const ContainerHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
`
export const ContainerBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const ContainerFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`



export const ImgProfile = styled.img`
    width: 200px;
    height: auto;
`