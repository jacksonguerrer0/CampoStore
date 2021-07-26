import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
    width: 100%;
`;

export const Header = styled.div`
    background: ${variables.gradiant};
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 10px 10px;
`;

export const Title = styled.h1`
    text-align: center;
`;

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
`;

export const InputForm = styled.input`
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.5px;
    opacity: 0.6;
    color: ${variables.black};
    font-family: 'Otomanopee One';
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: ${variables.white};
    height: 61px;
`;

export const InputFormPhoto = styled.input`
    display: none;
`;

export const ButtonPhoto = styled.button`
    background: ${variables.greenDown};
    border: none;
    border-radius: 10px;
    color: ${variables.white};
    padding: 10px 15px;
    cursor: pointer;
    font-weight: bold;
`;

export const LabelInput = styled.label`
    margin-right: 10px;
`;

export const ButtonPrimary = styled.button`
    background: ${variables.gradiant};
    border: none;
    border-radius: 10px;
    color: ${variables.white};
    padding: 10px 15px;
    cursor: pointer;
    font-weight: bold;
    width: 100%
`;