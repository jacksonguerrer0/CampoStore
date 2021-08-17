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
    position: relative;
    background-color: ${variables.white};
    border-radius: 0 0 3rem 3rem;
    border-radius: 1rem 2rem 1rem 2rem;
    box-shadow: ${variables.boxShadownBotttom};
    @media (max-width:500px){
        h3{
            font-size: 1rem;
        }
    }
`
// 
export const ContainerBanner = styled.div`
    position: relative;
    i{
        z-index: 9;
    }
`
export const ContainerHeader = styled.img`
    width: 100%;
    height: 15rem;
    background: ${variables.gradiant};
    box-shadow: ${variables.boxShadownBotttom};
    object-fit: cover;
`
export const HeaderCopy = styled.div`
    width: 100%;
    height: 15rem;
    background: ${variables.gradiant};
    box-shadow: ${variables.boxShadownBotttom};
    object-fit: cover; 
`
export const H2 = styled.h2`
    margin: auto;
    text-align: center;
    color: ${variables.white};
`
// 


export const ContainerBody = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-template-rows: auto;
    position: relative;
    top: -150px;
    box-shadow: ${variables.boxShadownBotttom};
`
export const ContentImg = styled.div`
    text-align: center;
    padding: 1rem;
    height: 330px;
    p{
        margin: inherit;
    }
    a{
        width: 5rem;
        padding: 0.5rem;
        font-size: 0.8rem;
    }
    @media(max-width: 500px){
        p{
            font-size: 0.9rem;
        }
        i{
            font-size: 1.3rem;
        }
    }
`

export const ImgProfile = styled.img`
    width: 9rem;
    height: 9rem;
    background: #eee;
    border-radius: 100%;
    border: 0.5rem #53e88b groove;
    object-fit: cover;
`
export const ImgProfileCopy = styled.div`
    width: 9rem;
    height: 9rem;
    background: ${variables.gradiant};
    border-radius: 100%;
    border: 0.5rem #53e88b groove;
    object-fit: cover;
    margin: auto !important;
`
export const ContentInfo = styled.div`
    height: 250px;
    justify-content: flex-end;
    position: inherit;
    bottom: -50px;
    display: flex;
    flex-flow: column wrap;
    padding: 1rem;
    p{
        margin: 0;
    }
    @media(max-width: 500px){
        padding: 1rem 0.5rem;
    }
`
export const TextInfo = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 1rem 0;
    justify-content: space-between;
    p{
        /* width: 50%; */
        font-size: 0.9rem;
    }
    @media (max-width: 500px){
        p{
            font-size: 0.8rem;
        }
    }
    @media(max-width: 400px){
        display: flex;
        flex-flow: wrap column;
        justify-content: center;
        align-items: center;
        p{
            width: 100%;
        }
    }
`
export const PRinfo = styled.p`
    text-align: center;
    font-size: 0.8rem;
    width: 70%;
    @media (max-width: 500px){
        font-size: 0.74rem !important;
    }
    /* @media (max-width: 400px){
        font-size: 0.5rem !important;
    } */
`
// 
export const ContainerFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-top: -170px;
`
export const ContentAcordeon = styled.div`
    max-width: 100%;
    min-height: 6rem;
    text-align: justify;
    padding: 0 1rem 1rem 1rem;
    h3{
        cursor: pointer;
        text-align: center;
        width: 13rem;
        margin: 2rem auto 1rem auto;
        color: ${variables.greenHight};
    }
`

export const ToggleAcordeon = styled.div`
    ${({status}) => status === 'true' ? ActiveAcordeon: DesactiveAcordeon}
    @media (max-width: 500px){
        p{
        font-size: 0.8rem;
    }
    }
`
