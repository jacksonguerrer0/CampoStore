import React from 'react'
import { ContainerEditProfile } from './edit-info-profile-styled/EditProfileInfoStyled'

const EditInfoProfile = ({ handleModal }) => {
    return (
        <ContainerEditProfile>
            <i className="fas fa-user-edit" onClick={handleModal}> Editar</i>
        </ContainerEditProfile>
    )
}

export default EditInfoProfile
