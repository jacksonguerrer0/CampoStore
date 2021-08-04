import styled from 'styled-components'
import variables from '../../styles/variables'


// Modal
export const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.9);
    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom: 0;
    opacity:1;
    transition: all 1s;
    z-index: 100;
`
export const ContentModal = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 450px;
    background-color: ${variables.white};
    position: relative;
    grid-template-columns: 1fr 2fr;
    text-align: center;
    margin:  0 auto ;
    border-radius: 1rem;
    padding: 1rem;
`
export const HeaderModal = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    text-align: right;
    i{
        font-size: 2rem;
        padding: 1rem 1rem 0 0;
        color: ${variables.greenHight};
        cursor: pointer;
        right: 0;
    }
    h3{
    }
`
export const ContentInputModal = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 2.5fr;
    padding: 1rem;
    row-gap: 1rem;
    column-gap: 0.5rem;
    input{
        border: none;
        padding: 0.7rem;
        border-radius: 10px;
        background-color: ${variables.background};
    }
    label{
        margin: auto auto auto 0;
    }
    textarea{
        background-color: ${variables.background};
        max-width: 256px;
        min-width: 256px;
    }
`