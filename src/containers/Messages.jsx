import React from 'react'
import { useHistory } from 'react-router-dom'
import { ButonBack } from '../components/button-back/ButtonBack'
import { CardMessage, CardMessageLeft, CardMessageRight, Container, ImageMessage, LastMessage, NameAndMessage, NameMessage, TimeMessage, Title } from './messages-styles/MessagesStyles'

const Messages = () => {

   const history = useHistory();

   const handleChat = (id) => {
      history.push(`/messages/${id}`)
   }

   return (
      <Container>
            <Title>Chat</Title>

            <CardMessage onClick={() => {handleChat(1)}}>
               <CardMessageLeft>
                  <ImageMessage 
                     src="https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                  />
                  <NameAndMessage>
                     <NameMessage>Mailer Martínez</NameMessage>
                     <LastMessage>Hola, quiero preguntar por...</LastMessage>
                  </NameAndMessage>
               </CardMessageLeft>
               <CardMessageRight>
                  <TimeMessage>05:04 pm</TimeMessage>
               </CardMessageRight>
            </CardMessage>

            <CardMessage onClick={() => {handleChat(1)}}>
               <CardMessageLeft>
                  <ImageMessage 
                     src="https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                  />
                  <NameAndMessage>
                     <NameMessage>Jackson Guerrero</NameMessage>
                     <LastMessage>Hola, este es un mensaje...</LastMessage>
                  </NameAndMessage>
               </CardMessageLeft>
               <CardMessageRight>
                  <TimeMessage>10:04 am</TimeMessage>
               </CardMessageRight>
            </CardMessage>

      </Container>
   )
}

export default Messages
