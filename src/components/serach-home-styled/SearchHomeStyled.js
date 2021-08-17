import styled from 'styled-components'
import variables from '../../styles/variables'

export const FormSearch  = styled.form`
    display: grid;
    grid-template-columns: 1fr 5fr;
    padding: 1rem 5rem;
    background-color: ${variables.background};
    position: sticky;
    top: 0;
    margin-bottom: 2rem;
    z-index: 1;
    @media (max-width: 500px){
        padding:  1rem 3rem;
    }
    @media (max-width: 400px){
        padding:  1rem 2rem;
    }
`
export const InputSearch = styled.input`
    border: none;
    padding: 0.6rem;
    border-radius: 0 2rem 2rem 0;
    color: black;
    background:  ${variables.white};
    box-shadow: ${variables.boxShadown};
`
export const ButtonSearch = styled.button`
    color: ${variables.greenDown};
    background:  ${variables.white};
    box-shadow: ${variables.boxShadown};
    font-size: 1.3rem;
    border: none;
    padding: 0.6rem;
    border-radius: 2rem 0 0 2rem;
    cursor: pointer;
`