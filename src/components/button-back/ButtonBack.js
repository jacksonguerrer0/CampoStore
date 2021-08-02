import styled from "styled-components";
import variables from "../../styles/variables";

export const ContentButtonBack = styled.div`
    margin: auto;
    margin-left: 0;
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
    &:active{
        transition: all 0.1s ease-in-out;
        box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 0 rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
    }
`
export const IIcon = styled.div`
    font-size: 1.3rem;
`