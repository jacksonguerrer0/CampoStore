import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { ButonBack, ContentButtonBack, IIcon } from './button-back/ButtonBack'

const ButtonBack = () => {
    const history = useHistory()
    const location = useLocation()
    console.log(history)
    console.log(location)
    return (
        <ContentButtonBack>
            <ButonBack>
                <IIcon className="fas fa-less-than"></IIcon>
            </ButonBack>
        </ContentButtonBack>
    )
}

export default ButtonBack
