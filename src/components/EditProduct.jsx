import React, {useState} from 'react'
import { useRef } from 'react'
import Toastify from 'toastify-js'
import { ButtonPhoto, ContainerFileText, ContainerUnit, InputFormPhoto, MsjError } from '../containers/post-styles/PostStyles'
import useForm from '../hooks/useForm'
import { deleteFile, deleteProduct, updateProduct, uploadFile } from '../services'
import { ContentModal, HeaderModal, IconSuccesHappy, Modal } from './modal-campo-styled/ModalCampoStyled'
import { ButtonPublicar, ContentInfoProduct } from './public-edit-product-styled/PublicEditProductStyled'
import * as yup from 'yup'

const unidadesMedicion = ['Kilo(kg)', 'Gramo(g)', 'Litro(L)', 'Mililitro(mL)', 'Tonelada(t)']

const EditProduct = ({ setShowModal, product }) => {
    const [errorMsj, setErrorMsj] = useState('');


    const inputPhoto1 = useRef(null);
    const inputPhoto2 = useRef(null);
    const inputPhoto3 = useRef(null);
    
    const photosDeleteSubmit = {
        photo: product.photo?.id,
        photo2: product.photo2?.id,
        photo3: product.photo3?.id
    }
    const [dataForm, handleChangeInput, reset] = useForm({
       name: product.name,
       price: product.price,
       quantity: product.quantity,
       unit: product.unit,
       photo: product.photo?.id,
       photo2: product.photo2?.id,
       photo3: product.photo3?.id
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
     const uploadFileProduct1 = async () =>{
        if(typeof dataForm.photo !== 'number'){
            console.log(dataForm.photo)
            await deleteFile(photosDeleteSubmit.photo)
            const response = await uploadFile(dataForm.photo);
            console.log(response)
            if (response.status === 200) {
                return  response.data.data.id
            }else{
                return null
            }
        }else{
            return null
        }
     }
     const uploadFileProduct2 = async () => {
        if(typeof dataForm.photo2 !== 'number'){
            await deleteFile(photosDeleteSubmit.photo2)
            const response = await uploadFile(dataForm.photo2);
            if (response.status === 200) {
                return  response.data.data.id
            }else{
                return null
            }
        }else{
            return null
        }
     }
     const uploadFileProduct3 = async () => {
        if(typeof dataForm.photo3 !== 'number'){
            await deleteFile(photosDeleteSubmit.photo3)
            const response = await uploadFile(dataForm.photo3);
            if (response.status === 200) {
                return  response.data.data.id
            }else{
                return null
            }
        }else{
            return null
        }
     }
     const validationSchemaForm =  async(photoId, photo2Id, photo3Id) =>  {
        const schemaValidatorObject = yup.object().shape({
          photo: yup.string().required('Primera foto obligatoria'),
          quantity: yup.string().required('Escribe la cantidad'),
          unit: yup.string().required('Selecciona la unidad'),
          price: yup.string().required('Precio obligatorio').min(4, 'El precio debe ser mayor a $1.000'),
          name: yup.string().required('Nombre del producto obligatorio').max(25, 'Nombre del producto es muy largo'),
        });
        schemaValidatorObject.validate(dataForm).then(async(value) => {
          setErrorMsj('')
          let dataSend = {
            ...dataForm,
            photo: photoId || dataForm.photo,
            photo2: photo2Id || dataForm.photo2,
            photo3: photo3Id || dataForm.photo3,
            price: parseInt(dataForm.price),
            quantity: parseInt(dataForm.quantity)
        }
        const updateResponse = await updateProduct(dataSend, product.id)
        if (updateResponse.status === 200) {
            setShowModal(false)
            Toastify({
                text: "Producto actualizado",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                duration: 3000
              }).showToast();
        }else{
            Toastify({
                text: "Hubo un error al publicar",
                backgroundColor: "linear-gradient(to right, #b93c1d, #f81808)",
                duration: 3000
              }).showToast();
        }
          reset()
        }).catch(function(err){
          setErrorMsj(err.message)
        })
    }
 





    const handleSubmit = async (e) => {
       e.preventDefault();
        const photoId = await uploadFileProduct1();
        const photo2Id = await uploadFileProduct2();
        const photo3Id = await uploadFileProduct3();
        // valida y a la vez envia la actualización
        validationSchemaForm(photoId, photo2Id, photo3Id)
    }
    return (
        <Modal>
        <ContentModal>
            <HeaderModal>
                <h3>Editar Producto</h3>
                <i className="fas fa-times" onClick={()=>setShowModal(false)}></i>
            </HeaderModal>
            <MsjError>
            {
                errorMsj.length !== 0 ? errorMsj : <IconSuccesHappy className="fas fa-laugh-beam"></IconSuccesHappy> 
            }
         </MsjError>
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
                <ButtonPublicar>Actualizar</ButtonPublicar>
            </ContentInfoProduct>
        </ContentModal>

        </Modal>
    )
}

export default EditProduct
