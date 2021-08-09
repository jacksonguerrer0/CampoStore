import React, { useState, useEffect } from 'react'
import {  ContainerBody, ContainerDetalle, ContainerFooter, ContainerHeader, ImgProfile,  ContentAcordeon, ToggleAcordeon, ContentImg, ContentInfo, H2, ContainerBanner, TextInfo, PRinfo, IconPhotoPerfil } from './profile-detalle-styles/ProfileDetalleStyled'

import ButtonBack from './ButtonBack';
import StarRaiting from './StarRaiting';
import { Link, useHistory } from 'react-router-dom';
import ButtonGreen from './ButtonGreen';
import EditInfoProfile from './EditInfoProfile';
import ModalCampo from './ModalCampo';
import InputFile from '../layout/input-file-styles/InputFileProfile';
import InputFileBanner from '../layout/input-file-styles/InputFileBanner';
import InputFileProfile from '../layout/input-file-styles/InputFileProfile';


const ProfileDetalle = ({ modeMyProfile, dataProfile }) => {
    const [activeAcordeon, setActiveAcordeon] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [dataModal, setDataModal] = useState({}) 

    console.log(modeMyProfile)
    const handlePAcordeon = () => {
        setActiveAcordeon(!activeAcordeon)
    }

    const handleModal = () => {
        setShowModal(true)
        setDataModal(dataProfile)
    }

    console.log(dataProfile)
    return (
        <ContainerDetalle>
            { !modeMyProfile && <ButtonBack /> }
            <ContainerBanner>
                <ContainerHeader src={dataProfile.cover} alt="Portada" >
                </ContainerHeader>
                { modeMyProfile && <InputFileBanner  />}
            </ContainerBanner>
            <ContainerBody>
                <ContentImg>
                    <div style={{position:'relative'}}>
                        <ImgProfile src={dataProfile.avatar} alt="Perfil"/>
                        { modeMyProfile && <InputFileProfile />}
                    </div>
                    <p>{dataProfile.first_name}</p>
                    <p>{dataProfile.title}</p>
                    { modeMyProfile && <EditInfoProfile handleModal={handleModal}/> }
                    {
                    showModal && <ModalCampo  
                    dataModal={dataModal} 
                    setShowModal={setShowModal}
                    />
                    }
                </ContentImg>
                <ContentInfo>
                    <StarRaiting stars={dataProfile?.rating}/>
                    <TextInfo>
                        <p>Ciudad:</p><PRinfo>{`${dataProfile.city} - ${dataProfile.department}`}</PRinfo>
                        <p>Ventas Exitosas:</p><PRinfo>{dataProfile.sales_number}</PRinfo>
                    </TextInfo>
                    { !modeMyProfile && <ButtonGreen /> }
                </ContentInfo>
            </ContainerBody>

            <ContainerFooter>
                <ContentAcordeon>
                <h3 onClick={handlePAcordeon}>Ver más información<i className="fas fa-hand-pointer"></i></h3>
                <ToggleAcordeon status={activeAcordeon.toString()}>
                    <p>{ dataProfile.description }</p>
                </ToggleAcordeon>
                </ContentAcordeon>
            </ContainerFooter>
        </ContainerDetalle>
    )
}

export default ProfileDetalle
