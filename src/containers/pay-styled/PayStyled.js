import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContainerPay = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 5rem;
`
export const ContentHeaderProduct = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 5rem 3rem 2rem 2rem repeat(4, 2rem);
    background: ${variables.gradiant};
    border-radius: 0 0 10px 10px;
    padding: 0 1rem 1rem 1rem;
    p{
        margin: 0;
    }
    h2{
        grid-column: 1/4;
        text-align: center;
        color: ${variables.white};
    }
    h3{
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
    }
`

export const PRightPay = styled.p`
    text-align: right;
    width: 10rem;
`

export const ContentFormPay =styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3rem 4rem 4rem;
    padding: 2rem;
    input{
        background: ${variables.white};
        border: none;
        border-radius: 10px;
        padding: 0.5rem;
    }
    button{
        grid-column: 1/3;
        background: ${variables.gradiant};
        color: ${variables.white};
        font-size: 1rem;
        border: none;
        border-radius: 1rem;
        :hover{

        }
    }
    p{
        display: flex;
        grid-column: 1/3;
        justify-content: flex-end;
        width: 100%;
        h3{
            color: ${variables.greenHight};
            margin: 0  0 0 1rem ;
        }
    }
`