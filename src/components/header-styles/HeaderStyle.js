import styled from "styled-components";
import variables from "../../styles/variables";

export const HeaderContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background: ${variables.gradiant}; 
   width: 100%;
   height: 6rem;
   margin-bottom: 15px;
   border-radius: 0 0 10px 10px;
`

export const HeaderTitle = styled.h1`
   color: ${variables.white};
   text-align: center;
   padding: 8px 0; 
`