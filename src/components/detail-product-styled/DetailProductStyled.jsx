import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContainerDetail = styled.div`
    padding: 1rem;
    margin-bottom: 60px;
    padding-bottom: 2rem;
    background-color: white;

`
export const ContentInfoDetail = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 2rem);
    width: 80%;
    margin: auto;
    border-top: 0.3rem solid ${variables.greenDown};
    padding: 0 2rem 2rem 2rem;
    border-radius: 0 0 1rem 1rem;
    background-color: ${variables.white};
    box-shadow: ${variables.boxShadown};
`
export const TitleProductDetail = styled.h2`
    text-align: center;
    width: 80%;
    margin:  1rem auto ;
    padding: 1rem 2rem;
`
export const TextRight = styled.p`
    text-align: right;
    color: ${variables.suave};
`

export const ButtonBuy = styled.a`
    display: flex;
    width: 80%;
    padding: 0.5rem 2rem 0.5rem 2rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 1rem;
    background: ${variables.gradiant};
    box-shadow: ${variables.boxShadown};
    border: none;
    border-radius: 10px;
    border-left: 2px solid black;
    border-right: 2px solid black;
    text-decoration: none;
    cursor: pointer;
`

export const ContainerCarrusel = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 4rem;
    div{
        border-radius: 1rem 1rem 1rem 1rem;
        --loader-bar-color: ${variables.greenDown};
        border-bottom: 2px solid ${variables.greenDown};
    }
    nav{
        display: none;
    }
    button{
        width: 2.5rem;
        height: 2.5rem;
        background: ${variables.gradiant};
        border-radius: 50%;
        box-shadow: ${variables.boxShadown};
    }
    span{
        width: 1rem;
        height: 1rem;
        margin: auto;
    }
`
