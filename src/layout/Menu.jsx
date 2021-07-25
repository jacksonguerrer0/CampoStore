import React, { useState } from 'react'
import { Item, MenuContainer, ItemTitle, ItemIcon } from './menu-styles/MenuStyles'
import { useHistory } from 'react-router-dom'


const Menu = ({listMenu, handleMenu}) => {

   const history = useHistory()

   function handleClick(menuItem) {
      history.push(menuItem.path)
      handleMenu(menuItem)
   }

   return (
      <MenuContainer>
         {
            listMenu.map((menuItem) => (
               <Item key={menuItem.name} status={menuItem.status} onClick={(e) => { handleClick(menuItem) }}>
                  <ItemIcon src={menuItem.icon} alt={menuItem.name} />
                  <ItemTitle>{menuItem.name}</ItemTitle>
               </Item>
            ))
         }
      </MenuContainer>
   )
}

export default Menu
