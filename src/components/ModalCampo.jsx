import React,{ useState } from 'react'
import { ContentModal, Modal } from './modal-campo-styled/ModalCmapoStyled'

const ModalCampo = ({ dataModal, setShowModal }) => {
    
    const handleModalX = () => {
        setShowModal(false)
    }
    return (
        <Modal>
            <ContentModal>
            <i className="fas fa-times" onClick={handleModalX}></i>
            soy el modal del campo
            </ContentModal>
        </Modal>
    )
}

export default ModalCampo
