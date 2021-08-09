import styled from 'styled-components'
import variables from '../../styles/variables'


export const ContentInfoProduct = styled.form`
    display: grid;
    grid-template-columns: 1fr 2.3fr;
    padding: 1rem;
    row-gap: 1rem;
    column-gap: 0.5rem;
    background-color: ${variables.white};
    border-radius: 1rem;
    padding: 2rem;
    input{
        border: 0.01rem solid gray;
        padding: 0.7rem;
        border-radius: 10px;
        background-color: ${variables.background};
        box-shadow: ${variables.boxShadownBotttom};
    }
    label{
        margin: auto auto auto 0;
        text-align: left;
    }
    div{
        display: flex;
        justify-content: space-between;
        select{
            border-radius: 10px;
        }
    }
`

export const ButtonPublicar = styled.button`
    padding: 1rem 0;
    cursor: pointer;
    width: 50%;
    background: ${variables.gradiant};
    border: 1px;
    border-radius: 10px;
    color: ${variables.white};
    font-size: 1rem;
    margin: 0.5rem auto;
    box-shadow: ${variables.boxShadown};
    grid-column: 1/3;
    &:hover {
        filter:brightness(0.97);
    }
`
