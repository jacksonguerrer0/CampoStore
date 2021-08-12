import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContainerPay = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 3rem;
    background-color: ${variables.white};
`
export const ContentHeaderProduct = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 5rem 2rem 3rem 1rem;
    background: ${variables.gradiant};
    border-radius: 0 0 10px 10px;
    padding: 0 1rem 1rem 1rem;
    z-index: 1;
    p{
        font-size: 0.8rem;
        margin: 0;
        color: ${variables.gray};
        border-bottom: 1px ${variables.gray} inset;
    }
    h2{
        grid-column: 1/4;
        text-align: center;
        color: ${variables.white};
    }
    h3{
        color: ${variables.gray};
        border-bottom: 1px solid black;
        grid-row: 2/5;
        grid-column: 2/4; 
        text-align: center;
        width: 100%;
        margin: auto auto 1rem auto;
    }
    img{
        width: 180px;
        height: 180px;
        grid-row: 2/9;
        grid-column: 1/2;
        margin: auto;
        object-fit: cover;
        border-radius: 1rem;
        background: ${variables.gradiant};
    }
`

export const PRightPay = styled.p`
    text-align: right;
    width: 10rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

export const ContentFormPay =styled.form`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 3rem 4rem 4rem;
    padding: 2rem 2rem 7rem 2rem;
    background: ${variables.white};
    margin-top: -1rem;
    z-index: 0;
    label{
        margin: auto 0;
    }
    input{
        background: ${variables.background};
        border: none;
        border-radius: 10px;
        padding: 0.5rem;
        grid-column: 2/4;
    }
    button{
        grid-column: 2/4;
        background: ${variables.gradiant};
        color: ${variables.white};
        font-size: 1.2rem;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        box-shadow: ${variables.boxShadown};
        :hover{
            filter:brightness(0.97);
        }
    }
    p{
        display: flex;
        grid-column: 2/3;
        justify-content: space-between;
        width: 100%;
    }
    h3{
            color: ${variables.greenHight};
            margin: auto 0 auto auto ;
    }
`