import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Item, MenuContainer, ItemTitle, ItemIcon } from './menu-styles/MenuStyles'

const Menu = ({listMenu, handleMenu}) => {


   return (
      <MenuContainer>
         {
            listMenu.map((menuItem) => (
               <NavLink to={menuItem.path} key={menuItem.name} activeClassName='active'>
                  <ItemIcon className={menuItem.icon} />
                  {/* <i class="fas fa-home"></i> */}
                  <ItemTitle>{menuItem.name}</ItemTitle>
               </NavLink>
            ))
         }
      </MenuContainer>
   )
}

export default Menu
