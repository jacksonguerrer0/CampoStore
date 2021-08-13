import React from 'react'
import { useHistory } from 'react-router-dom'
import { ContentBackSession, BackSession } from './button-back-session-styled/ButtonBackSessionStyled'

const ButtonBackSession = () => {
    const history = useHistory()
    const handleRemoveSession = () => {
        sessionStorage.removeItem('token')
        history.go(0)
    }
    return (
        <ContentBackSession >
            <BackSession onClick={handleRemoveSession}><i className="fas fa-sign-out-alt"></i></BackSession>
        </ContentBackSession>
    )
}

export default ButtonBackSession
