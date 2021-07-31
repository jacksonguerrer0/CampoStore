import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContentProduct = styled.div`
    width: auto;
    height: 12rem;
    display: grid;
    margin-bottom: 1rem;
    grid-template-columns: 1fr 1fr;
    background-color: ${variables.white};
    box-shadow: ${variables.boxShadown};
    border-radius: 10px;
    padding: 1rem;
    img{
        width: 12rem;
        height:12rem;
        margin: auto;
        border-radius: 10px;
    }
    a{
        width: 50%;
        color: ${variables.black};
        text-decoration: none;
        cursor: pointer;
        border-left: 2px solid black;
        border-right: 2px solid black;
        padding: 0.5rem 1rem;
        text-align: center;
        border-radius: 10px;
        background: ${variables.gradiant};
        margin-top: 1rem;
        margin: auto auto 0 auto;
        &:active{
            transition: all 0.1s ease-in-out;
            box-shadow: ${variables.boxShadown};
            color: ${variables.black};
        }
    }
    p{
        margin: 0;
    }
`
export const ContentPDetail = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 4rem;

`
export const ContentDetailInfo = styled.div`
    display: flex;
    flex-flow: wrap column;

`
export const Pr = styled.p`
    text-align: right;
    color: #0000006b;
`