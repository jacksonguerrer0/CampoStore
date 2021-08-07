import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContentProduct = styled.div`
    width: auto;
    height: 14rem;
    display: grid;
    margin-bottom: 1rem;
    grid-template-columns: 1fr 1fr;
    background-color: ${variables.white};
    box-shadow: ${variables.boxShadown};
    border-radius: 10px;
    padding: 1rem;
    position: relative;
    img{
        width: 12rem;
        height:12rem;
        margin: auto;
        border-radius: 10px;
    }
    p{
        margin: 0;
    }
    a{
        width: 10rem;
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
    justify-content: center;
    h3{
        text-align: center;
    }

`
export const Pr = styled.p`
    text-align: right;
    color: #0000006b;
`

export const ButtonEdit = styled.button`
    padding: 0.8rem 1rem;
    text-decoration: none;
    cursor:  pointer;
    border: none;
    border-radius: 10px;
    position: absolute;
    right: 0;
    top: 0;
    background: #c8c8cb;
    color: ${variables.white};
    font-size: 0.8rem;

`