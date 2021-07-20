import styled from "styled-components";
import variables from "../../styles/variables";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${variables.white};
    height: 74px;
    margin: 0 10px;
    padding: 10px 15px;
    border-radius: 22px;
    box-shadow: 0px 0px 50px rgba(90, 108, 234, 0.1);
`
export const ActiveItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    background-color: ${variables.active};
    width: 105px;
    border-radius: 10px;
`
export const ActiveItemIcon = styled.img`
    width: 24px;
    height: 24px;
`
export const ActiveItemTitle= styled.span`
    color: ${variables.black};
    font-weight: normal;
    font-size: 12px;
    line-height: 131.02%;
`