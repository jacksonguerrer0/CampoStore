import React, { useState } from 'react'
import { Item, MenuContainer, ItemTitle, ItemIcon } from './menu-styles/MenuStyles'
import { useHistory } from 'react-router-dom'


const Menu = () => {

   const history = useHistory()

   const [home, setHome] = useState(true)
   const [messages, setMessages] = useState(false)
   const [post, setPost] = useState(false)
   const [profile, setProfile] = useState(false)

   function handleClick(path) {
      history.push('/' + path)
   }

   return (
      <MenuContainer>
         <Item status={home} onClick={(e) => { handleClick('home') }}>
            <ItemIcon src='https://i.imgur.com/Zj6wB6H.png' alt='Home' />
            <ItemTitle>Home</ItemTitle>
         </Item>
         <Item status={post} onClick={(e) => { handleClick('post') }}>
            <ItemIcon src='https://i.imgur.com/fNxEJ8g.png' alt='Publicar' />
            <ItemTitle>Publicar</ItemTitle>
         </Item>
         <Item status={messages} onClick={(e) => { handleClick('messages') }}>
            <ItemIcon src='https://i.imgur.com/sNPrfEE.png' alt='Mensajes' />
            <ItemTitle>Mensajes</ItemTitle>
         </Item>
         <Item status={profile} onClick={(e) => { handleClick('profile') }}>
            <ItemIcon src='https://i.imgur.com/NI4icpy.png' alt='Cuenta' />
            <ItemTitle>Mi cuenta</ItemTitle>
         </Item>

      </MenuContainer>
   )
}

export default Menu
