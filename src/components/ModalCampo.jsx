import { ErrorMessage, useFormik } from 'formik'
import * as yup from 'yup'
import React,{ useState } from 'react'
import { ContentInputModal, ContentModal, ErrorFormik, HeaderModal, IconSuccesHappy, Modal } from './modal-campo-styled/ModalCampoStyled'

const ModalCampo = ({ dataModal, setShowModal }) => {

    const handleModalX = () => {
        setShowModal(false)
    }
    
    const formik = useFormik({
        initialValues: {
            name: '',
            city: '',
            description: ''
        },
        validationSchema: yup.object().shape({
            name: yup.string().min(10, 'Escribe tu nombre').max(30, 'Nombre muy largo').required('Escribe tu nombre'),
            city: yup.string().required('Escribe tu ciudad'),
            description: yup.string().min(10, 'Escribe una descripción').required('Escribe una descripción')
        }).required('neces'),
        onSubmit: (data) => {
            console.log(data)
        }
    })
    return (
        <Modal>
            <ContentModal>
            <HeaderModal>
                <h3>Editar</h3>
                <i className="fas fa-times" onClick={handleModalX}></i>
            </HeaderModal>
            {
                formik.errors.name || formik.errors.city || formik.errors.description  ?
                    <ErrorFormik>
                    {
                        formik.errors.name || formik.errors.city || formik.errors.description
                    }
                    </ErrorFormik>
                    : <IconSuccesHappy className="fas fa-laugh-beam"></IconSuccesHappy>
            }
            <ContentInputModal onSubmit={formik.handleSubmit}>
                <label>Nombre:</label><input 
                type="text" 
                name='name'
                onChange={formik.handleChange}
                />
                <label>Ciudad:</label><input 
                type="text"
                name='city'
                onChange={formik.handleChange}
                />
                <label>Descripción:</label>
                <textarea 
                name="description"  
                cols="30" 
                rows="5"
                onChange={formik.handleChange}
                ></textarea>
                <div></div>
                <button type='submit'>Guardar</button>
            </ContentInputModal>
            </ContentModal>
        </Modal>
    )
}

export default ModalCampo
