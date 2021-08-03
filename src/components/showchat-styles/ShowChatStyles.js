import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: calc(100vh - 74px);
`;

export const Title = styled.h1`

`;

export const MessageReceived = styled.div`
    background: ${variables.white};
    border-radius: 13px;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.5px;
    color: #181818;
    opacity: 0.8;
    display: flex;
    align-items: center;
    max-width: 180px;
    padding: 10px;
`;

export const MessageSended = styled.div`
    background: ${variables.gradiant};
    align-self: flex-end;
    display: flex;
    align-items: center;
    max-width: 180px;
    padding: 10px;
    border-radius: 13px;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.5px;
    color: ${variables.white};
`;

export const InputMessage = styled.input`
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
    width: 100%;
    border: none;
    outline: none;
    box-shadow: 0px 0px 50px rgba(90, 108, 234, 0.1);
    border-radius: 22px;
    background: ${variables.white};
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.5px;
    color: #181818;
    opacity: 0.8;
    padding: 20px 10px;
`;