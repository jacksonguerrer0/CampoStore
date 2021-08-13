import React from 'react'
import HandleRatingStar from './HandleRatingStar'
import { ContentModal, HeaderModal, Modal } from './modal-campo-styled/ModalCampoStyled'

const ModalRating = ({ setShowModal, seller, setRefresh }) => {
    return (
        <>
            <Modal>
                <ContentModal>
                <HeaderModal>
                    <h3>Calificar</h3>
                    <i className="fas fa-times" onClick={()=>setShowModal(false)}></i>
                </HeaderModal>
                    <h4>Vendedor: <a href={`/profile/${seller.data.seller.id}`}>{seller.data.seller.name}</a></h4>
                    <HandleRatingStar setShowModal={setShowModal}/> 
                    <p>Califica al vendedor por su producto</p>
                </ContentModal>
            </Modal>
        </>
    )
}

export default ModalRating
