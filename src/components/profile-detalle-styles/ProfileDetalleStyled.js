import styled, {css} from 'styled-components'
import variables from '../../styles/variables'


const ActiveAcordeon =  css`
    height: auto;
    overflow: hidden;
    transition: all .5s ease;
`
const DesactiveAcordeon = css`
    height: 0;
    overflow: hidden;
    transition: all .5s ease;
`
// 
export const ContainerDetalle = styled.div`
    background-color: ${variables.white};
    /* padding: 1rem; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto);
    border-radius: 0 0 3rem 3rem;
    border-radius: 1rem 2rem 1rem 2rem;
`
// 
export const ContainerHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    background: ${variables.gradiant};
`
export const H2 = styled.h2`
    text-align: center;
`
// 


export const ContainerBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const ContentImg = styled.div`
    text-align: center;
    padding: 1rem;
`
export const ImgProfile = styled.img`
    width: 9rem;
    height: auto;
    background: #eee;
    border-radius: 100%;
    border: 0.8rem solid ${variables.greenDown} ;
`
export const ButtonContact = styled.div`

`
export const ContentInfo = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    padding: 1rem;
    a{
        color: ${variables.black};
        text-decoration: none;
        cursor: pointer;
        border-left: 2px solid black;
        border-right: 2px solid black;
        padding: 1rem;
        text-align: center;
        border-radius: 10px;
        background: ${variables.gradiant};
        &:active{
            transition: all 0.1s ease-in-out;
            box-shadow: ${variables.boxShadown};
            color: ${variables.black};
        }
    }
`



// 
export const ContainerFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`
export const ContentAcordeon = styled.div`
    max-width: 100%;
    text-align: justify;
    padding: 0 1rem 1rem 1rem;
    h3{
        cursor: pointer;
        text-align: center;
        width: 13rem;
        margin: auto;
        color: ${variables.greenHight};
    }
`
export const ToggleAcordeon = styled.div`
    ${({status}) => status === 'true' ? ActiveAcordeon: DesactiveAcordeon}
`

