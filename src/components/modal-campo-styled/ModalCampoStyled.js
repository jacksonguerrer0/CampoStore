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
        margin-bottom:2rem;
    }
`
export const ContentInputModal = styled.form`
    display: grid;
    grid-template-columns: 1.5fr 2.5fr;
    padding: 1rem;
    row-gap: 1rem;
    column-gap: 0.5rem;
    input{
        border: 0.01rem solid gray;
        padding: 0.7rem;
        border-radius: 10px;
        background-color: ${variables.background};
        box-shadow: ${variables.boxShadownBotttom};
    }
    label{
        margin: auto auto auto 0;
    }
    textarea{
        background-color: ${variables.background};
        max-width: 256px;
        min-width: 256px;
    }
    button{
        padding: 1rem 0;
        width: 50%;
        background: ${variables.gradiant};
        border: 1px;
        border-radius: 10px;
        color: ${variables.white};
        font-size: 1rem;
        margin: 0.5rem auto;
        box-shadow: ${variables.boxShadown};
        &:hover {
            filter:brightness(0.97);
        }
    }
`

export const ErrorFormik = styled.p`
    font-size: ${variables.white};
    background-color: #ff00009c;
    border-radius: 1rem;
    padding: 0.5rem;
    height: 1.5rem;
`
export const IconSuccesHappy  = styled.i`
    color: ${variables.greenHight};
    font-size: 2rem;
    padding: 0.5rem;
    height: 1.5rem;
`