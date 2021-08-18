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
    @media (max-width: 500px) {
      max-width: 500px;
      min-width: 300px;
      img{
        width: 10rem;
        height:10rem;
        border-radius: 10px;
        }
        p{
            margin: 0;
            font-size: 0.8rem;
        }
        a{
            width: 9rem;
        }
    }
    @media (max-width: 400px) {
        padding: 0 0.5rem;
      img{
        width: 9rem;
        height:9rem;
        border-radius: 10px;
        }
        p{
            margin: 0;
            font-size: 0.7rem;
        }
        a{
            width: 8rem;
            font-size: 0.8rem;
            padding: 1rem 0.5rem;
        }
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
    padding: 0 0.3rem;
    h3{
        text-align: center;
    }
    @media (max-width: 500px) {
        h3{
            font-size: 1rem;
        }
   }

`
export const Pr = styled.p`
    text-align: right;
    color: #0000006b;
`
export const ContainerCrudCardProduct = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`
export const ButtonEdit = styled.button`
    padding: 0.8rem 1rem;
    text-decoration: none;
    cursor:  pointer;
    border: none;
    border-radius: 10px;
    background: #c8c8cb;
    color: ${variables.white};
    font-size: 0.8rem;
`
export const ButtonDelete = styled.button`
    padding: 0.8rem 1rem;
    text-decoration: none;
    cursor:  pointer;
    border: none;
    border-radius: 10px;
    background: #ff4967;
    color: ${variables.white};
    font-size: 0.8rem;
`

