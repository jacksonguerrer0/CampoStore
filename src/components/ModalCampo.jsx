import React,{ useState } from 'react'
import { ContentInputModal, ContentModal, HeaderModal, Modal } from './modal-campo-styled/ModalCampoStyled'

const ModalCampo = ({ dataModal, setShowModal }) => {

    const handleModalX = () => {
        setShowModal(false)
    }
    return (
        <Modal>
            <ContentModal>
            <HeaderModal>
                <h3>Editar</h3>
                <i className="fas fa-times" onClick={handleModalX}></i>
            </HeaderModal>
            <ContentInputModal>
                <label>Nombre:</label><input type="text" />
                <label>Ciudad:</label><input type="text" />
                <label>Foto de perfil:</label><input type="file" />
                <label>Foto de portada:</label><input type="file" />
                <label>Descripción:</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </ContentInputModal>
            </ContentModal>
        </Modal>
    )
}

export default ModalCampo
