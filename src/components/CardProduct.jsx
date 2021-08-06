import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonGreen from './ButtonGreen'
import { ButtonEdit, ContentDetailInfo, ContentPDetail, ContentProduct, Pr } from './card-product-styled/CardProductStyled'
import { ContentModal, Modal } from './modal-campo-styled/ModalCampoStyled'

const CardProduct = ({ modeMyProfile }) => {
    const [showModal, setShowModal] = useState(false)
    const [dataModal, setDataModal] = useState({}) 

    const handleModalX = () => {
        setShowModal(false)
    }
    return (
        <>
            <ContentProduct>
                    {
                        modeMyProfile && 
                        <>
                        <ButtonEdit onClick={() => setShowModal(true)}><i className="fas fa-edit"></i>Editar</ButtonEdit>
                            {
                                showModal &&
                                <Modal>
                                <ContentModal>
                                    <p onClick={handleModalX}>X</p>
                                </ContentModal>
                                </Modal>
                            }
                        </>
                    }
                <img src="https://productmanagementfestival.com/wp-content/uploads/2017/01/sell-your-product-online.jpg" alt="" />
                <ContentDetailInfo>
                    <h3>Producto</h3>
                    <ContentPDetail>
                        <p>Precio:</p><Pr>Soy precio</Pr>
                        <p>Cantidad:</p><Pr>Soy cantidad</Pr>
                    </ContentPDetail>
                    <ButtonGreen url='/detail' text='Ver el producto' />
                </ContentDetailInfo>
            </ContentProduct>
        </>
    )
}

export default CardProduct
