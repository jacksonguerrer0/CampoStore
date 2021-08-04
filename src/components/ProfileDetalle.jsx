import React, { useState } from 'react'
import {  ContainerBody, ContainerDetalle, ContainerFooter, ContainerHeader, ImgProfile,  ContentAcordeon, ToggleAcordeon, ContentImg, ContentInfo, H2, ContainerBanner, TextInfo, PRinfo } from './profile-detalle-styles/ProfileDetalleStyled'

import ButtonBack from './ButtonBack';
import StarRaiting from './StarRaiting';
import { Link } from 'react-router-dom';
import ButtonGreen from './ButtonGreen';
import EditInfoProfile from './EditInfoProfile';
import ModalCampo from './ModalCampo';

const DataPersona = {
        imgProfile: "https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600114/29213224-hombre-foto-de-perfil-silueta-avatar.jpg?ver=6",
        imgBanner: 'https://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2020/06/06/15914565469629.jpg',
        nameUser: "Jackson Guerrero",
        city: "Arauca",
        stars: 4,
        salesRealized: 45,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero repellendus, optio eos nostrum ipsa obcaecati ratione odit, commodi unde amet accusantium distinctio dicta voluptates possimus eaque magni officiis nam pariatur Iusto unde tempore temporibus recusandae veniam totam odio nobis dolores eveniet repudiandae eligendi consequatur qui quasi suscipit iure, a tempora dolorem cupiditate neque autem non facere provident dolore necessitatibus'
}

const {imgProfile, imgBanner, nameUser, city, stars, salesRealized, description} = DataPersona
const imgFail = {
    imgPrifile2: 'https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600114/29213224-hombre-foto-de-perfil-silueta-avatar.jpg?ver=6',
    imgBanner2: 'https://www.publicdomainpictures.net/pictures/280000/nahled/dusky-grey-sky-background.jpg'
}


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
                    <StarRaiting stars={stars}/>
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
                    <p>{ description }</p>
                </ToggleAcordeon>
                </ContentAcordeon>
            </ContainerFooter>
        </ContainerDetalle>
    )
}

export default ProfileDetalle
