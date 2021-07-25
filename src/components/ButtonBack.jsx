import React from 'react'
import { ButonBack, ContentButtonBack, IIcon } from './button-back/ButtonBack'

const ButtonBack = () => {
    return (
        <ContentButtonBack>
            <ButonBack>
                <IIcon className="fas fa-less-than"> </IIcon>Atrás
            </ButonBack>
        </ContentButtonBack>
    )
}

export default ButtonBack
