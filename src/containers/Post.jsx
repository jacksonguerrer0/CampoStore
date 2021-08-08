import React, { useRef } from 'react'
import { Container, Header, Title, ContainerForm, InputGroup, InputForm, LabelInput, InputFormPhoto, ButtonPhoto, ButtonPrimary } from './post-styles/PostStyles'
import useForm from '../hooks/useForm';
import { ContentInfoProduct } from '../components/public-edit-product-styled/PublicEditProductStyled';

const unidadesMedicion = ['Kilo(kg)', 'Gramo(g)', 'Litro(L)', 'Mililitro(mL)', 'Tonelada(t)']

const Post = () => {

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
      <Container>
         <Header>
            <Title>Publicar Producto</Title>
         </Header>
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
               min='5000' 
               name="price"
               placeholder="Precio del producto"
               onChange={handleChangeInput}
               value={dataForm.price}/>
                    <select>
                        {
                            unidadesMedicion.map(ele => (
                                <option key={ele}>{ele}</option>
                            ))
                        }
                    </select>
                </div>
               <label>Cantidad disponible: </label>
               <div><input 
               type="number" 
               min='1'
               name="quantity"
               placeholder="Cantidad del producto"
               onChange={handleChangeInput}
               value={dataForm.quantity}
               />
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
            <ButtonPrimary type="submit">Publicar</ButtonPrimary>
            </ContentInfoProduct>
         </ContainerForm>
      </Container>
   )
}

export default Post
