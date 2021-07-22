import React from 'react'
import { HeaderContainer, HeaderTitle } from './header-styles/HeaderStyle'

const Header = ({title}) => {
   return (
      <HeaderContainer>
         <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
   )
}

export default Header
