import React, { useState } from 'react'
import {  ContainerBody, ContainerDetalle, ContainerFooter, ContainerHeader, ImgProfile,  ContentAcordeon, ToggleAcordeon, ContentImg, ContentInfo } from './profile-detalle-styles/ProfileDetalleStyled'

import ButtonBack from './ButtonBack';
import StarRaiting from './StarRaiting';
import { Link } from 'react-router-dom';



const imgProfile = "https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600114/29213224-hombre-foto-de-perfil-silueta-avatar.jpg?ver=6";

const nameUser = "Jackson Guerrero"
const rolUser = "Vendedor" || "Comprador"
const city = "Arauca"
const salesRealized = 45
const ProfileDetalle = () => {
    const [activeAcordeon, setActiveAcordeon] = useState(false)
    const handlePAcordeon = () => {
        setActiveAcordeon(!activeAcordeon)
    }
    return (
        <ContainerDetalle>
            <ContainerHeader>
                <ButtonBack />
                <h2>Perfil</h2>
            </ContainerHeader>
            <ContainerBody>
                <ContentImg>
                    <ImgProfile src={imgProfile} alt="" />
                    <p>{nameUser} <br />Soy {rolUser}</p>
                </ContentImg>
                <ContentInfo>
                    <StarRaiting />
                    <p>Ciudad: {city} <br />Ventas Exitosas: {salesRealized} </p>  
                    <Link to="/messages">
                        Contactar
                    </Link>
                </ContentInfo>
            </ContainerBody>

            <ContainerFooter>
                <ContentAcordeon>
                <h3 onClick={handlePAcordeon}>Ver más información<i className="fas fa-hand-pointer"></i></h3>
                <ToggleAcordeon status={activeAcordeon.toString()}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta provident totam sapiente tempore odio voluptatum doloremque sequi laborum voluptates.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias quia ipsum velit quis unde exercitationem modi, vero autem vitae?
                </ToggleAcordeon>
                </ContentAcordeon>
            </ContainerFooter>
        </ContainerDetalle>
    )
}

export default ProfileDetalle
