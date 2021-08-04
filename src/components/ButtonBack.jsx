import React from 'react'
import { useHistory } from 'react-router-dom'
import { ButonBack, ContentButtonBack, IIcon } from './button-back/ButtonBack'

const ButtonBack = () => {
    const history = useHistory()

    return (
        <ContentButtonBack>
            <ButonBack onClick={history.goBack}>
                <IIcon className="fas fa-less-than"></IIcon>
            </ButonBack>
        </ContentButtonBack>
    )
}

export default ButtonBack
