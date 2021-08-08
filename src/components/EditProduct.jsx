import React from 'react'
import { useRef } from 'react'
import { ButtonPhoto, InputFormPhoto } from '../containers/post-styles/PostStyles'
import useForm from '../hooks/useForm'
import { ContentModal, HeaderModal, Modal } from './modal-campo-styled/ModalCampoStyled'
import { ButtonPublicar, ContentInfoProduct } from './public-edit-product-styled/PublicEditProductStyled'


const unidadesMedicion = ['Kilo(kg)', 'Gramo(g)', 'Litro(L)', 'Mililitro(mL)', 'Tonelada(t)']

const EditProduct = ({ setShowModal }) => {

    const inputPhoto1 = useRef(null);
    const inputPhoto2 = useRef(null);
    const inputPhoto3 = useRef(null);

    const [dataForm, handleChangeInput, reset] = useForm({
       name: '',
       price: '',
       quantity: '',
       photo1: '',
       photo2: '',
       photo3: ''
    })
    // const {name, price, quantity, photo1, photo2, photo3} = dataForm
    const handleBtnPhoto1 = () => {
        inputPhoto1.current.click()
     }
     const handleBtnPhoto2 = () => {
        inputPhoto2.current.click()
     }
     const handleBtnPhoto3 = () => {
        inputPhoto3.current.click()
     }
 
    const handleSubmit = (e) => {
       e.preventDefault();
    }
    return (
        <Modal>
        <ContentModal>
            <HeaderModal>
                <h3>Editar Producto</h3>
                <i className="fas fa-times" onClick={()=>setShowModal(false)}></i>
            </HeaderModal>
            <ContentInfoProduct onSubmit={handleSubmit}>
                <label htmlFor="nameProduct">Nombre:</label>
                <input type="text" id='nameProduct' name='name' />

                <label htmlFor="precio">Precio: $</label>
                <div><input type="number" id='precio' min='5000'name='price' defaultValue='5000'/>
                    <select>
                        {
                            unidadesMedicion.map(ele => (
                                <option key={ele}>{ele}</option>
                            ))
                        }
                    </select>
                </div>

                <label htmlFor="cantidad">Cantidad disponible:</label>
                <div><input type="number" id='cantidad' min='1' name='quantity'/>
                <select>
                        {
                            unidadesMedicion.map(ele => (
                                <option key={ele}>{ele}</option>
                            ))
                        }
                    </select>
                </div>

                <label>Foto 1: </label>
               <InputFormPhoto 
                  type="file"
                  accept="image/png, image/jpeg"
                  name="photo1"
                  ref={inputPhoto1}
               />
               <ButtonPhoto onClick={handleBtnPhoto1} >Buscar Foto</ButtonPhoto>
            
               <label>Foto 2: </label>
               <InputFormPhoto
                  type="file"
                  accept="image/png, image/jpeg"
                  name="photo2"
                  ref={inputPhoto2}
               />
               <ButtonPhoto onClick={handleBtnPhoto2} >Buscar Foto</ButtonPhoto>
            
               <label>Foto 3: </label>
               <InputFormPhoto 
                  type="file"
                  accept="image/png, image/jpeg"
                  name="photo3"
                  ref={inputPhoto3}
               />
               <ButtonPhoto onClick={handleBtnPhoto3} >Buscar Foto</ButtonPhoto>
                <ButtonPublicar>Publicar</ButtonPublicar>
            </ContentInfoProduct>
        </ContentModal>

        </Modal>
    )
}

export default EditProduct
