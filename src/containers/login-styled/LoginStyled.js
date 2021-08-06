import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContainerForm = styled.div`
    margin: 0 auto;
    width: 350px;
    border-radius: 1rem;
    box-shadow: inset 2px 18px 0 rgb(0 0 0 / 1%), 0 0 0px 0px rgb(255 255 255), 0px 0 16px 4px rgb(0 0 0 / 10%);
    text-align: center;
    background-color: ${variables.white};
    margin-bottom: 90px;
    p{
        color: ${variables.primary};
        text-decoration: underline;
        color: ${variables.greenDown};
        font-size: 15px;
        margin-top: 0;
        cursor: pointer;
    }
    div{
        border-top: 2px solid ${variables.greenDown};
        padding-top: 10px;
        padding-bottom: 1rem;
        width: 80%;
        margin: auto;
    }
`

export const FormLogin = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    padding: 1rem 2rem 1rem 2rem; 
`
export const FormRegister = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    padding: 1rem 2rem 1rem 2rem; 
`
export const Input = styled.input`
    padding: 0.8rem;
    border-radius: 10px;
    border: none;
    background: ${variables.background};
    margin-bottom: 1rem;
`
export const Select = styled.select`
    padding: 0.8rem;
    border-radius: 10px;
    border: none;
    background: ${variables.background};
    margin-bottom: 1rem;
`
export const ErrorP  = styled.span`
    color: red;
    font-size: 0.7rem;
`
export const Button = styled.button`
    width: 8rem;
    margin: auto;
    padding: 0.6rem 0;
    background: ${variables.gradiant};
    font-size: 17px;
    color: ${variables.white};
    border-radius: 10px;
    margin-top: 1rem;
    border: none;
    cursor: pointer;


`
export const IconSocial = styled.img`
    width: 30px;
    margin: 0 0.5rem;
    cursor: pointer;
`
export const HeaderForm = styled.h3`
    background: ${variables.gradiant};
    color: ${variables.white};
    padding: 1.5rem 2rem;
    border-radius: 1rem 1rem 0 0;
`
