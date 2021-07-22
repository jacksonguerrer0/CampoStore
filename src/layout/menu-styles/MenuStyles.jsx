import styled from "styled-components";
import variables from "../../styles/variables";

export const MenuContainer = styled.div`
   display: flex;
   flex-direction: row;
   background-color: ${variables.white};
   height: 74px;
   border-radius: 20px;
   box-shadow: 0px 0px 50px rgba(90, 108, 234, 0.1);
   align-items: center;
   justify-content: space-between;
   box-sizing: border-box;
   padding: 0 10px;
   position: fixed;
   bottom: 0;
   width: 100%;
   max-width: 600px;
`
export const Item = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   padding: 5px 10px;
   background-color: ${props => props.status ? variables.greenDown : variables.active};
   width: 85px;
   height:50px;
   border-radius: 10px;
   
`
export const ItemIcon = styled.img`
   width: 24px;
   height: 24px;
   margin-right: 5px;
`
export const ItemTitle = styled.span`
   color: ${variables.black};
   font-weight: normal;
   font-size: 12px;
   text-align: center;
`
