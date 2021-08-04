import React, { useState } from 'react'
import {  ContainerBody, ContainerDetalle, ContainerFooter, ContainerHeader, ImgProfile,  ContentAcordeon, ToggleAcordeon, ContentImg, ContentInfo, H2, ContainerBanner, TextInfo, PRinfo } from './profile-detalle-styles/ProfileDetalleStyled'

import ButtonBack from './ButtonBack';
import StarRaiting from './StarRaiting';
import { Link } from 'react-router-dom';
import ButtonGreen from './ButtonGreen';
import EditInfoProfile from './EditInfoProfile';
import ModalCampo from './ModalCampo';



const imgProfile = "https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600114/29213224-hombre-foto-de-perfil-silueta-avatar.jpg?ver=6";
const imgBanner = 'https://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2020/06/06/15914565469629.jpg'
const nameUser = "Jackson Guerrero"
const rolUser = "Vendedor" || "Comprador"
const city = "Arauca"
const salesRealized = 45
const ProfileDetalle = () => {

    const [activeAcordeon, setActiveAcordeon] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [dataModal, setDataModal] = useState({}) 

    const handlePAcordeon = () => {
        setActiveAcordeon(!activeAcordeon)
    }

    const handleModal = (data) => {
        setShowModal(true)
        setDataModal(data)
    }
    return (
        <ContainerDetalle>
            <ContainerBanner>
                <ButtonBack />
                <ContainerHeader src={imgBanner} alt="Portada" >
                </ContainerHeader>
            </ContainerBanner>
            <ContainerBody>
                <ContentImg>
                    <ImgProfile src={imgProfile} alt="Perfil"/>
                    <p>{nameUser}</p>
                    <p>#soyCampo</p>
                    <EditInfoProfile handleModal={handleModal}/>
                    {
                    showModal && <ModalCampo  
                    dataModal={dataModal} 
                    setShowModal={setShowModal}
                    />
                    }
                </ContentImg>
                <ContentInfo>
                    <StarRaiting />
                    <TextInfo>
                        <p>Ciudad:</p><PRinfo>{city}</PRinfo>
                        <p>Ventas Exitosas:</p><PRinfo>{salesRealized}</PRinfo>
                    </TextInfo>
                    <ButtonGreen />
                </ContentInfo>
            </ContainerBody>

            <ContainerFooter>

                <ContentAcordeon>
                <h3 onClick={handlePAcordeon}>Ver más información<i className="fas fa-hand-pointer"></i></h3>
                <ToggleAcordeon status={activeAcordeon.toString()}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta provident totam sapiente tempore odio voluptatum doloremque sequi laborum voluptates.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias quia ipsum velit quis unde exercitationem modi, vero autem vitae?
                    </p>
                </ToggleAcordeon>
                </ContentAcordeon>
            </ContainerFooter>
        </ContainerDetalle>
    )
}

export default ProfileDetalle
