import { ErrorMessage, useFormik } from 'formik'
import * as yup from 'yup'
import React,{ useState } from 'react'
import { ContentInputModal, ContentModal, ErrorFormik, HeaderModal, IconSuccesHappy, Modal } from './modal-campo-styled/ModalCampoStyled'
import { updateProfile } from '../services/login'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useHistory } from 'react-router-dom'


const ModalCampo = ({ dataModal, setShowModal }) => {

    const handleModalX = () => {
        setShowModal(false)
    }

    const history = useHistory()

    const departamentos = ['Amazonas', 'Antioquía', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá', 'Caldas', 'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare', 'Huila', 'Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander', 'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia','Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada']
    
    const formik = useFormik({
        initialValues: {
            first_name: dataModal.first_name,
            city: dataModal.city,
            department: dataModal.department,
            description: dataModal.description,
            title: dataModal.title
        },
        validationSchema: yup.object().shape({
            first_name: yup.string().min(3, 'Escribe tu nombre').max(30, 'Nombre muy largo').required('Escribe tu nombre'),
            city: yup.string().required('Escribe tu ciudad'),
            department: yup.string().required('Selecciona tu departamento'),
            description: yup.string().min(10, 'Escribe una descripción').required('Escribe una descripción'),
            title: yup.string().required('Selecciona un título'),
        }).required('neces'),
        onSubmit: async (data) => {
            const response = await updateProfile(data, dataModal.id);
            if (response.status === 200) {
                Toastify({
                    text: "Actualizado con éxito",
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                    duration: 3000
                  }).showToast();
                  setShowModal(false)
                  //Update the state
            }else{
                Toastify({
                    text: "Hubo un error al guardar",
                    backgroundColor: "linear-gradient(to right, #b93c1d, #f81808)",
                    duration: 3000
                  }).showToast();
            }
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
                formik.errors.first_name || formik.errors.city || formik.errors.description  ?
                    <ErrorFormik>
                    {
                        formik.errors.first_name || formik.errors.city || formik.errors.description
                    }
                    </ErrorFormik>
                    : <IconSuccesHappy className="fas fa-laugh-beam"></IconSuccesHappy>
            }
            <ContentInputModal onSubmit={formik.handleSubmit}>
                <label>Título:</label>
                <select 
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title || 'DEFAULT'}
                >
                    <option 
                    value={'DEFAULT'} 
                    >Elija una opcion</option>
                    <option value="Vendedor">Vendedor</option>
                    <option value="Comprador">Comprador</option>
                </select>
                <label>Nombre:</label>
                <input 
                type="text" 
                name='first_name'
                onChange={formik.handleChange}
                value={formik.values.first_name}
                />
                <label>Ciudad:</label>
                <input 
                type="text"
                name='city'
                onChange={formik.handleChange}
                value={formik.values.city}
                />
                <label>Departamento:</label>
                <select 
                name="department"
                onChange={formik.handleChange}
                value={formik.values.department || 'DEFAULT'}
                >
                    <option 
                    value={'DEFAULT'} 
                    >Elija una opcion</option>
                    {
                        departamentos.map(ele => (
                            <option value={ele} key={ele}>{ele}</option>
                        ))
                    }
                </select>
                <label>Descripción:</label>
                <textarea 
                name="description"  
                cols="30" 
                rows="5"
                onChange={formik.handleChange}
                value={formik.values.description}
                ></textarea>
                <div></div>
                <button type='submit'>Guardar</button>
            </ContentInputModal>
            </ContentModal>
        </Modal>
    )
}

export default ModalCampo
