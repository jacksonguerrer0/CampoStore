import React from 'react'
import { Container, InputMessage, MessageReceived, MessageSended, Title } from './showchat-styles/ShowChatStyles'

const ShowChat = () => {
    return (
        <Container>
            <Title>Chat</Title>

            <MessageReceived>
                Hola Pepito
            </MessageReceived>
            <MessageSended>
                Buenas tardes
            </MessageSended>
            <MessageReceived>
                Necesito los tomates que estás vendiendo
            </MessageReceived>


            <InputMessage 
                type="text"
                placeholder="Escriba su mensaje"
            />
        </Container>
    )
}

export default ShowChat
