import styled from "styled-components";
import variables from "../../styles/variables";

export const ContentButtonBack = styled.div`
    position: absolute;
    top: 1rem;
    z-index: 3;
`
export const ButonBack = styled.div`
    /* color: ${variables.white}; */
    width: 2rem;
    text-align: center;
    cursor: pointer;
    background: ${variables.gradiant};
    border: 2px solid white;
    color: white;
    padding: 0.5rem;
    margin-left: 1rem;
    border-radius: 100%;
    box-shadow: 0px 0px 50px rgba(90, 108, 234, 0.1);
    &:hover {
            filter:brightness(0.97);
    }
`
export const IIcon = styled.div`
    font-size: 1.3rem;
`