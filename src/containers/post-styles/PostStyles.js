import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
    margin-bottom: 5rem;
`;
export const Header = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background: ${variables.gradiant}; 
   width: 100%;
   height: 6rem;
   margin-bottom: 15px;
   border-radius: 0 0 10px 10px;
`;

export const Title = styled.h1`
    text-align: center;
    color: ${variables.white};
`;

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto auto auto;
`;
export const ContainerUnit = styled.div`
    display: flex;
    align-items: center;
    justify-content: end !important;
    p{
        text-align: left;
        margin-left: 1rem;
        font-size: 0.8rem;
    }
`
export const MsjError = styled.div`
    text-align: center;
    margin-bottom: 0;
    margin-top: 1rem;
    p{
        font-size: ${variables.white};
        background-color: #ff00009c;
        border-radius: 1rem;
        padding: 0.5rem;
        height: 1.5rem;
        width: 70%;
        margin: auto;
    }
    i{
        color: ${variables.greenHight};
    }
`

// export const InputGroup = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: center;
//     margin-bottom: 10px;
//     width: 100%;
// `;

// export const InputForm = styled.input`
//     font-size: 14px;
//     line-height: 14px;
//     letter-spacing: 0.5px;
//     opacity: 0.6;
//     color: ${variables.black};
//     font-family: 'Otomanopee One';
//     border: none;
//     outline: none;
//     border-radius: 10px;
//     background-color: ${variables.white};
//     height: 61px;
// `;

export const InputFormPhoto = styled.input`
    display: none;
`;

export const ContainerFileText = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        width: 60%;
        margin: auto 0.2rem auto 0.2rem;
        text-align: center;
        font-size: 0.8rem;
    }
`

export const ButtonPhoto = styled.button`
    width: 100%;
    padding: 0.9rem 1rem;
    cursor: pointer;
    background: ${variables.gradiant};
    border: 1px;
    border-radius: 10px;
    color: ${variables.white};
    font-size: 1rem;
    box-shadow: ${variables.boxShadown};
    &:hover {
        filter:brightness(0.97);
    }
`;

// export const LabelInput = styled.label`
//     margin-right: 10px;
// `;
export const ContainerButtonSubmitError = styled.div`
        grid-column: 1/3;
        display: flex;
        flex-flow: column wrap;
        margin: 1rem;
        p{
            color: red;
            font-size: 0.8rem;
            margin: 0 auto;
        }
`
export const ButtonPrimary = styled.button`
    background: ${variables.gradiant};
    border: none;
    border-radius: 10px;
    color: ${variables.white};
    padding: 1rem 15px;
    cursor: pointer;
    font-weight: bold;
    width:50%;
    margin: 0 auto;
    font-size: 1.2rem;
`