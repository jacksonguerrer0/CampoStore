import React, { useState, useEffect } from 'react'
import {  ContainerBody, ContainerDetalle, ContainerFooter, ContainerHeader, ImgProfile,  ContentAcordeon, ToggleAcordeon, ContentImg, ContentInfo, H2, ContainerBanner, TextInfo, PRinfo, IconPhotoPerfil, HeaderCopy, ImgProfileCopy } from './profile-detalle-styles/ProfileDetalleStyled'

import ButtonBack from './ButtonBack';
import StarRaiting from './StarRaiting';
import { Link, useHistory } from 'react-router-dom';
import ButtonGreen from './ButtonGreen';
import EditInfoProfile from './EditInfoProfile';
import ModalCampo from './ModalCampo';
import InputFile from '../layout/input-file-styles/InputFileProfile';
import InputFileBanner from '../layout/input-file-styles/InputFileBanner';
import InputFileProfile from '../layout/input-file-styles/InputFileProfile';
import variables from '../styles/variables';


const ProfileDetalle = ({ modeMyProfile, dataProfile }) => {
    const [activeAcordeon, setActiveAcordeon] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [dataModal, setDataModal] = useState({}) 

    const handlePAcordeon = () => {
        setActiveAcordeon(!activeAcordeon)
    }

    const handleModal = () => {
        setShowModal(true)
        setDataModal(dataProfile)
    }

    return (
        <ContainerDetalle>
            { !modeMyProfile && <ButtonBack /> }
            <ContainerBanner>
                {
                    dataProfile?.cover ? <ContainerHeader src={dataProfile?.cover} alt="Portada" />
                    : <HeaderCopy src='' alt="Portada" />
                }
                { modeMyProfile && <InputFileBanner  />}
            </ContainerBanner>
            <ContainerBody>
                <ContentImg>
                    <div style={{position:'relative'}}>
                        {
                            dataProfile.avatar ? <ImgProfile src={dataProfile.avatar} alt="Perfil"/>
                            : <ImgProfileCopy/>
                        }
                        { modeMyProfile && <InputFileProfile />}
                    </div>
                    {
                        dataProfile?.id &&
                        <>
                        <p>{dataProfile.first_name}</p>
                        <p>{dataProfile.title}</p>
                        { modeMyProfile && <EditInfoProfile handleModal={handleModal}/> }
                        {
                        showModal && <ModalCampo  
                        dataModal={dataModal} 
                        setShowModal={setShowModal}
                        />
                        }
                        </>
                    }
                </ContentImg>
                <ContentInfo>
                    {
                        dataProfile?.id &&
                        <>
                        <StarRaiting stars={dataProfile?.rating}/>
                        <TextInfo>
                            <p>Ciudad:</p><PRinfo>{`${dataProfile.city} - ${dataProfile.department}`}</PRinfo>
                            <p>Ventas:</p><PRinfo>{dataProfile.sales_number ? dataProfile.sales_number : 0 }</PRinfo>
                        </TextInfo>
                        { !modeMyProfile && <ButtonGreen /> }
                        </>
                    }
                </ContentInfo>
            </ContainerBody>

            <ContainerFooter>
                <ContentAcordeon>
                {
                        dataProfile?.id &&
                        <>
                    <h3 onClick={handlePAcordeon}>Ver más información<i className="fas fa-hand-pointer"></i></h3>
                    <ToggleAcordeon status={activeAcordeon.toString()}>
                        <p>{ dataProfile.description }</p>
                    </ToggleAcordeon>
                    </>
                }
                </ContentAcordeon>
            </ContainerFooter>
        </ContainerDetalle>
    )
}

export default ProfileDetalle
