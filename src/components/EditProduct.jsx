import React from 'react'
import { useRef } from 'react'
import { ButtonPhoto, ContainerFileText, ContainerUnit, InputFormPhoto } from '../containers/post-styles/PostStyles'
import useForm from '../hooks/useForm'
import { deleteProduct, updateProduct, uploadFile } from '../services'
import { ContentModal, HeaderModal, Modal } from './modal-campo-styled/ModalCampoStyled'
import { ButtonPublicar, ContentInfoProduct } from './public-edit-product-styled/PublicEditProductStyled'


const unidadesMedicion = ['Kilo(kg)', 'Gramo(g)', 'Litro(L)', 'Mililitro(mL)', 'Tonelada(t)']

const EditProduct = ({ setShowModal, product }) => {

    const inputPhoto1 = useRef(null);
    const inputPhoto2 = useRef(null);
    const inputPhoto3 = useRef(null);
    const photosDeleteSubmit = {
        photo: product.photo.id,
        photo2: product.photo2.id,
        photo3: product.photo3.id
    }
    const [dataForm, handleChangeInput, reset] = useForm({
       name: product.name,
       price: product.price,
       quantity: product.quantity,
       unit: product.unit,
       photo: product.photo.id,
       photo2: product.photo2.id,
       photo3: product.photo3.id
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
  // 
     const handleFile1Change = async (e) => {
        const file = await e.target.files[0];
        if(file){
            handleChangeInput({target: {name: e.target.name, value: file}})
        }
     }
  
     const handleFile2Change = async (e) => {
        const file = await e.target.files[0];
        if(file){
            handleChangeInput({target: {name: e.target.name, value: file}})
        }
     }
     const handleFile3Change = async (e) => {
        const file = await e.target.files[0];
        if(file){
            handleChangeInput({target: {name: e.target.name, value: file}})
        }
     }
     const uploadFileProduct = async () =>{
        if(typeof dataForm.photo !== 'number'){
            await deleteProduct(photosDeleteSubmit.photo)
            const response = await uploadFile(dataForm.photo);
            if (response.status === 200) {
               handleChangeInput({target: {name: 'photo', value: response.data.data.id}})
            }
        }
        if(typeof dataForm.photo2 !== 'number'){
            await deleteProduct(photosDeleteSubmit.photo2)
            const response = await uploadFile(dataForm.photo);
            if (response.status === 200) {
               handleChangeInput({target: {name: 'photo2', value: response.data.data.id}})
            }
        }
        if(typeof dataForm.photo3 !== 'number'){
            await deleteProduct(photosDeleteSubmit.photo3)
            const response = await uploadFile(dataForm.photo);
            if (response.status === 200) {
               handleChangeInput({target: {name: 'photo3', value: response.data.data.id}})
            }
        }
     }
    const handleSubmit = async (e) => {
       e.preventDefault();
        uploadFileProduct()
        updateProduct(dataForm, product.id)
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
                <input 
                type="text" 
                id='nameProduct' 
                name='name'
                onChange={handleChangeInput}
                value={dataForm.name}
                />

                
                <label>Precio: $ </label>
               <div><input 
                  type="number" 
                  id='precio' 
                  min='1000' 
                  name="price"
                  placeholder="Precio del producto"
                  onChange={handleChangeInput}
                  value={dataForm.price}
                  required
                    />
                  <select 
                    name='unit' 
                    onChange={handleChangeInput} 
                    value={dataForm.unit}
                    >   
                        {
                            unidadesMedicion.map(ele => (
                                <option key={ele} value={ele}>{ele}</option>
                            ))
                        }
                    </select>
                </div>

                <label htmlFor="cantidad">Cantidad:</label>
                <ContainerUnit>
                  <input 
                  type="number" 
                  min='1'
                  name="quantity"
                  placeholder="Cantidad del producto"
                  onChange={handleChangeInput}
                  value={dataForm.quantity}
                  required
                  />
                  <p>{dataForm.unit}</p>
               </ContainerUnit>

                <label>Foto 1: </label>
               <InputFormPhoto 
                  type="file"
                  accept=".png, .jpeg, .jpg"
                  name="photo"
                  ref={inputPhoto1}
                  onChange={handleFile1Change}
               />
               <ContainerFileText>                 
               {
                  typeof dataForm.photo === 'number' ? <p>No hay foto nueva</p> : <p>Si hay foto nueva</p>
               }
                  <ButtonPhoto onClick={handleBtnPhoto1} type='button'>Buscar Foto</ButtonPhoto>
               </ContainerFileText>
               <label>Foto 2: </label>
               <InputFormPhoto
                  type="file"
                  accept=".png, .jpeg, .jpg"
                  name="photo2"
                  ref={inputPhoto2}
                  onChange={handleFile2Change}
               />
               <ContainerFileText>                 
               {
                  typeof dataForm.photo2 === 'number' ? <p>No hay foto nueva</p> :  <p>Si hay foto nueva</p>
               }
                  <ButtonPhoto onClick={handleBtnPhoto2} type='button'>Buscar Foto</ButtonPhoto>
               </ContainerFileText>
               <label>Foto 3: </label>
               <InputFormPhoto 
                  type="file"
                  accept=".png, .jpeg, .jpg"
                  name="photo3"
                  ref={inputPhoto3}
                  onChange={handleFile3Change}
               />
               <ContainerFileText>                 
               {
                  typeof dataForm.photo3 === 'number' ? <p>No hay foto nueva</p> :  <p>Si hay foto nueva</p>
               }
                  <ButtonPhoto onClick={handleBtnPhoto3} type='button'>Buscar Foto</ButtonPhoto>
               </ContainerFileText>
                <ButtonPublicar>Publicar</ButtonPublicar>
            </ContentInfoProduct>
        </ContentModal>

        </Modal>
    )
}

export default EditProduct
