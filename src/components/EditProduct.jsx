import React from 'react'
import { ContentModal, HeaderModal, Modal } from './modal-campo-styled/ModalCampoStyled'
import { ContentInfoProduct } from './public-edit-product-styled/PublicEditProductStyled'

const EditProduct = ({ setShowModal }) => {


    return (
        <Modal>
        <ContentModal>
            <HeaderModal>
                <h3>Editar Producto</h3>
                <i className="fas fa-times" onClick={()=>setShowModal(false)}></i>
            </HeaderModal>
            <ContentInfoProduct>
                <label htmlFor="nameProduct">Nombre:</label>
                <input type="text" id='nameProduct' />
                <label htmlFor="precio">Precio:</label><label><input type="text" id='precio'/> por <select name="xd" id=""><option value="">xd</option></select></label>
                <label htmlFor="cantidad">Cantidad disponible:</label>
                <input type="text" id='cantidad' />
                <label htmlFor="image1">Imagen 1:</label>
                <input type="file" id='image1' accept="image/png,image/jpeg"/>
                <label htmlFor="image2">Imagen 2:</label>
                <input type="file" id='image2' accept="image/png,image/jpeg"/>
                <label htmlFor="image3">Imagen 3:</label>
                <input type="file" id='image3' accept="image/png,image/jpeg"/>
            </ContentInfoProduct>
        </ContentModal>
        </Modal>
    )
}

export default EditProduct
