import styled from "styled-components";
import variables from "../../styles/variables";

export const ContentBackSession = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0;
    z-index: 3;
`
export const BackSession = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 1.5rem;
    text-align: center;
    cursor: pointer;
    background: white;
    color: #FFD44D;
    border: 2px solid #FFD44D;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin-left: 1rem;
    border-radius: 1rem 0 0 1rem;
    border-right: none;
    box-shadow: 0px 0px 50px rgb(90 108 234 / 10%);
    i{
        margin: auto;
    }
    &:hover {
            filter:brightness(0.97);
    }
`
export const IIcon = styled.div`
    font-size: 1.3rem;
`