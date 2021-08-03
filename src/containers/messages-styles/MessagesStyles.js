import styled from "styled-components";
import variables from "../../styles/variables";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`

`;

export const ContainerHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    background: ${variables.gradiant};
`

export const CardMessage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${variables.white};
    border-radius: 20px;
    padding: 5px;
    cursor: pointer;
    margin: 10px 0;
`;

export const CardMessageLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ImageMessage = styled.img`
    width: 62px;
    height: 62px;
    object-fit: cover;
    border-radius: 16px;
    margin-right: 15px;
`;

export const NameAndMessage = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NameMessage = styled.span`
    color: ${variables.black};
    font-size: 15px;
    line-height: 131.02%;
`;

export const LastMessage = styled.span`
    color: ${variables.gray};
    opacity: 0.3;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.5px;
`;

export const CardMessageRight = styled.div`

`;

export const TimeMessage = styled.span`
    color: ${variables.gray};
    opacity: 0.3;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.5px;
`;