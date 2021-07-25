import React from 'react'
import { ContainerBody, ContainerDetalle, ContainerFooter, ContainerHeader, ImgProfile } from './profile-detalle-styles/ProfileDetalleStyled'



const imgProfile = "https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600114/29213224-hombre-foto-de-perfil-silueta-avatar.jpg?ver=6";

const nameUser = "Jackson Guerrero"
const rolUser = "Vendedor" || "Comprador"
const stars = 3
const iconStar = <i className="fas fa-heart"></i>
const ProfileDetalle = () => {
    return (
        <ContainerDetalle>
            <ContainerHeader>
                <div>
                    <div>
                        Atrás
                    </div>
                </div>
                <div>
                    <h2>Perfil</h2>
                </div>
            </ContainerHeader>
            <ContainerBody>
                <div>
                    <ImgProfile src={imgProfile} alt="" />
                    <p>{nameUser}</p>
                    <p>Soy {rolUser}</p>
                </div>
                <div>
                    <div>
                        {stars}
                    </div>
                    <div>
                        Contactar
                    </div>
                </div>
            </ContainerBody>
            <ContainerFooter>
                Ver más información
            </ContainerFooter>

        </ContainerDetalle>
    )
}

export default ProfileDetalle
