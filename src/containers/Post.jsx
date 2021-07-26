import React, { useRef } from 'react'
import { Container, Header, Title, ContainerForm, InputGroup, InputForm, LabelInput, InputFormPhoto, ButtonPhoto, ButtonPrimary } from './post-styles/PostStyles'
import useForm from '../hooks/useForm';

const Post = () => {

   const inputPhoto = useRef(null);

   const [dataForm, handleChangeInput, reset] = useForm({
      name: '',
      price: '',
      quantity: '',
      photo: ''
   })

   const handleBtnPhoto = () => {
      inputPhoto.current.click()
   }

   const handleSubmit = (e) => {
      e.preventDefault();
   }

   return (
      <Container>
         <Header>
            <Title>Publicar Producto</Title>
         </Header>
         <ContainerForm>
            <form onSubmit={handleSubmit}>
            <InputGroup>
               <LabelInput>Nombre: </LabelInput>
               <InputForm 
                  name="name"
                  placeholder="Nombre del producto"
                  onChange={handleChangeInput}
                  value={dataForm.name}
               />
            </InputGroup>
            <InputGroup>
               <LabelInput>Precio: </LabelInput>
               <InputForm 
                  type="number"
                  name="price"
                  placeholder="Precio del producto"
                  onChange={handleChangeInput}
                  value={dataForm.price}
               />
            </InputGroup>
            <InputGroup>
               <LabelInput>Cantidad: </LabelInput>
               <InputForm 
                  type="number"
                  name="quantity"
                  placeholder="Cantidad del producto"
                  onChange={handleChangeInput}
                  value={dataForm.quantity}
               />
            </InputGroup>
            <InputGroup>
               <LabelInput>Foto: </LabelInput>
               <InputFormPhoto 
                  type="file"
                  accept="image/png, image/jpeg"
                  name="photo"
                  ref={inputPhoto}
               />
               <ButtonPhoto onClick={handleBtnPhoto} >Buscar Foto</ButtonPhoto>
            </InputGroup>
            <ButtonPrimary type="submit">Publicar</ButtonPrimary>
            </form>
         </ContainerForm>
      </Container>
   )
}

export default Post
