import styled from 'styled-components'
import variables from '../../styles/variables'


export const ContentInfoProduct = styled.div`
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
        cursor: pointer;
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