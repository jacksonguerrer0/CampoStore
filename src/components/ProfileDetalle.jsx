import React, { useState } from 'react'
import {  ContainerBody, ContainerDetalle, ContainerFooter, ContainerHeader, ImgProfile,  ContentAcordeon, ToggleAcordeon, ContentImg, ContentInfo, ContainerBanner, TextInfo, PRinfo,  HeaderCopy, ImgProfileCopy } from './profile-detalle-styles/ProfileDetalleStyled'

import ButtonBack from './ButtonBack';
import StarRaiting from './StarRaiting';
import ButtonGreen from './ButtonGreen';
import EditInfoProfile from './EditInfoProfile';
import ModalCampo from './ModalCampo';
import InputFileBanner from '../layout/input-file-styles/InputFileBanner';
import InputFileProfile from '../layout/input-file-styles/InputFileProfile';
import ButtonBackSession from './ButtonBackSession';



const ProfileDetalle = ({ modeMyProfile, dataProfile, setRefresh }) => {
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
console.log(dataProfile)

    const modeProfileParams = () => {
        if (modeMyProfile) {
            return 'me'
        }
        else{
            return 'sales'
        }
    }
    return (
        <ContainerDetalle>
            { !modeMyProfile && <ButtonBack /> }
            { modeMyProfile && <ButtonBackSession />}
            <ContainerBanner>
                {
                    dataProfile?.cover ? <ContainerHeader src={dataProfile?.cover} alt="Portada" />
                    : <HeaderCopy src='' alt="Portada" />
                }
                { modeMyProfile && dataProfile?.cover ?  <InputFileBanner setRefresh={setRefresh} /> : ''}
            </ContainerBanner>
            <ContainerBody>
                <ContentImg>
                    <div style={{position:'relative'}}>
                        {
                            dataProfile.avatar ? <ImgProfile src={dataProfile.avatar} alt="Perfil"/>
                            : <ImgProfileCopy/>
                        }
                        { modeMyProfile && dataProfile?.cover ? <InputFileProfile />: ''}
                    </div>
                    {
                        dataProfile?.id &&
                        <>
                        <p>{dataProfile.first_name}</p>
                        <p>{dataProfile.title}</p>
                        { modeMyProfile && 
                        <>
                        <EditInfoProfile handleModal={handleModal}/> 
                        </>
                        }
                        <ButtonGreen url={`/history/${modeProfileParams()}/${dataProfile.id}`}text='Historial'/>
                        {
                        showModal && <ModalCampo  
                        dataModal={dataModal} 
                        setShowModal={setShowModal}
                        setRefresh={setRefresh}
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
                    <h3 onClick={handlePAcordeon}>Ver más información <br /><i className="fas fa-hand-pointer"></i></h3>
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
