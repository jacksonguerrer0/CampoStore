import React, { useState } from 'react'
import { ButtonBack, ContainerBody, ContainerDetalle, ContainerFooter, ContainerHeader, ContentButtonBack, ImgProfile, PAcordeon } from './profile-detalle-styles/ProfileDetalleStyled'
import './profile-detalle-styles/profileDetalleStyle.css'



const imgProfile = "https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600114/29213224-hombre-foto-de-perfil-silueta-avatar.jpg?ver=6";

const nameUser = "Jackson Guerrero"
const rolUser = "Vendedor" || "Comprador"
const stars = 3
const iconStar = <i className="fas fa-heart"></i>

const ProfileDetalle = () => {
    const [activeAcordeon, setActiveAcordeon] = useState(false)
    const handlePAcordeon = () => {
        setActiveAcordeon(!activeAcordeon)
    }
    return (
        <ContainerDetalle>
            <ContainerHeader>
                <ContentButtonBack>
                    <ButtonBack>
                        Atrás
                    </ButtonBack>
                </ContentButtonBack>
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
                <div >
                <h3 onClick={handlePAcordeon}>Ver más información</h3>
                <p className={activeAcordeon ? "activeAcordeon" : "desactiveAcordeon"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta provident totam sapiente tempore odio voluptatum doloremque sequi laborum voluptates.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias quia ipsum velit quis unde exercitationem modi, vero autem vitae?
                </p>
                </div>
            </ContainerFooter>

        </ContainerDetalle>
    )
}

export default ProfileDetalle
