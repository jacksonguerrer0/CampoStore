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
   .active{
      background: ${variables.gradiant};
      span{
         color: #EAFAF2;
         font-size: 0.8rem;
      }
      i{
         color: #EAFAF2;
      }
   }
   a{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 5px 10px;
      background-color: ${props => props.status ? variables.greenDown : variables.active};
      width: 85px;
      height:50px;
      border-radius: 10px;
      text-decoration: none;
   }

   @media (max-width: 500px) {
      a{
         width: 70px;
      }
   }
   @media (max-width: 400px){
      a{
         width: 70px;
      }
   }
`

export const ItemIcon = styled.i`
   font-size: 24px;
   margin-right: 5px;
   color: ${variables.greenHight}; 
   @media (max-width: 500px) {
      max-width: 500px;
      font-size: 20px;
   }
   @media (max-width: 400px) {
      max-width: 500px;
      font-size: 15px;
   }
`
export const ItemTitle = styled.span`
   color: ${variables.black};
   font-weight: normal;
   font-size: 12px;
   text-align: center;
   @media (max-width: 400px) {
      font-size: 0.7rem;
   }
`
