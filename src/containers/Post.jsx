import React, { useRef } from 'react'
import { Container, Header, Title, ContainerForm, InputGroup, InputForm, LabelInput, InputFormPhoto, ButtonPhoto, ButtonPrimary, ContainerFileText, ContainerUnit, ContainerButtonSubmitError, MsjError } from './post-styles/PostStyles'
import useForm from '../hooks/useForm';
import { ContentInfoProduct } from '../components/public-edit-product-styled/PublicEditProductStyled';
import { deleteProduct, postProduct, uploadFile } from '../services';
import { useState } from 'react';
import { useEffect } from 'react';
import Toastify from 'toastify-js';
import * as yup from 'yup'
import { IconSuccesHappy } from '../components/modal-campo-styled/ModalCampoStyled';

const unidadesMedicion = [ 'Kilo(kg)', 'Gramo(g)', 'Litro(L)', 'Mililitro(mL)', 'Tonelada(t)']

const Post = () => {

   const inputPhoto1 = useRef(null);
   const inputPhoto2 = useRef(null);
   const inputPhoto3 = useRef(null);
   const [errorMsj, setErrorMsj] = useState('')
   const [validateConfirmed, setValidateConfirmed] = useState(false)

   const [dataForm, handleChangeInput,  handleChangeForm, reset] = useForm({
      name: '',
      price: '',
      quantity: '',
      unit: 'Kilo(kg)',
      photo: '',
      photo2: '',
      photo3: ''
   })
   const {name, price, quantity, photo, photo2, photo3} = dataForm


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
         const response = await uploadFile(file);
         if (response.status === 200) {
            handleChangeInput({target: {name: e.target.name, value: response.data.data.id}})
         }
      }
   }

   const handleFile2Change = async (e) => {
      const file = await e.target.files[0];
      if(file){
         const response = await uploadFile(file);
         if (response.status === 200) {
            handleChangeInput({target: {name: e.target.name, value: response.data.data.id}})
         }
      }
   }
   const handleFile3Change = async (e) => {
      const file = await e.target.files[0];
      if(file){
         const response = await uploadFile(file);
         if (response.status === 200) {
            handleChangeInput({target: {name: e.target.name, value: response.data.data.id}})
         }
      }
   }
   const validationSchemaForm = () =>  {
       const schemaValidatorObject = yup.object().shape({
         photo: yup.string().required('Primera foto obligatoria'),
         quantity: yup.string().required('Escribe la cantidad'),
         unit: yup.string().required('Selecciona la unidad'),
         price: yup.string().required('Precio obligatorio').min(4, 'El precio debe ser mayor a $1.000'),
         name: yup.string().required('Nombre del producto obligatorio').max(25, 'Nombre del producto es muy largo'),
       });
       schemaValidatorObject.validate(dataForm).then(function(value) {
         setErrorMsj('')
         setValidateConfirmed(true)
       }).catch(function(err){
         setErrorMsj(err.message)
       })
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      validationSchemaForm()
      if (validateConfirmed) {
         const newDataForm = {
            ...dataForm,
            price: parseInt(dataForm.price),
            quantity: parseInt(dataForm.quantity)
         }
         const response  = await postProduct(newDataForm);
         if (response.status === 200) {
            Toastify({
                text: "Producto publicado con éxito",
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
      }
   }
   console.log(dataForm)
   console.log(errorMsj)

   return (
      <Container>
         <Header>
            <Title>Publicar Producto</Title>
         </Header>
         <MsjError>
         {
            errorMsj.length !== 0 ? errorMsj : <IconSuccesHappy className="fas fa-laugh-beam"></IconSuccesHappy> 
         }
         </MsjError>
         <ContainerForm>
            <ContentInfoProduct onSubmit={handleSubmit} >
               <label>Nombre: </label>
               <input 
                  name="name"
                  placeholder="Nombre del producto"
                  onChange={handleChangeInput}
                  value={dataForm.name}
               />
            
               <label>Precio: $ </label>
               <div><input 
                  type="number" 
                  id='precio' 
                  name="price"
                  placeholder="Precio del producto"
                  onChange={handleChangeInput}
                  value={dataForm.price}/>
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
               <label>Cantidad: </label>
               <ContainerUnit>
                  <input 
                  type="number" 
                  min='1'
                  name="quantity"
                  placeholder="Cantidad del producto"
                  onChange={handleChangeInput}
                  value={dataForm.quantity}
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
                  typeof dataForm.photo !== 'number' ? <p>No hay foto</p> :  <p>Foto guardada</p>
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
                  typeof dataForm.photo2 !== 'number' ? <p>No hay foto</p> :  <p>Foto guardada</p>
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
                  typeof dataForm.photo3 !== 'number' ? <p>No hay foto</p> :  <p>Foto guardada</p>
               }
                  <ButtonPhoto onClick={handleBtnPhoto3} type='button' >Buscar Foto</ButtonPhoto>
               </ContainerFileText>
               <ContainerButtonSubmitError>
                  <ButtonPrimary type="submit">Publicar</ButtonPrimary>
               </ContainerButtonSubmitError>
            </ContentInfoProduct>
         </ContainerForm>
      </Container>
   )
}

export default Post
