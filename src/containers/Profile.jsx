import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {  useHistory, useParams } from 'react-router-dom';
import ProductsHome from '../components/ProductsHome'
import ProfileDetalLe from '../components/ProfileDetalle'
import { getUser, getUserById } from '../services/login';
import { getListProductsByUser } from '../services';

const Profile = () => {
   const [modeMyProfile, setModeMyProfile] = useState(false)
   const [dataProfile, setDataProfile] = useState({})
   const [dataProducts, setDataProducts] = useState([])
   const history = useHistory()
   let { idUser } = useParams();

   const modePerfil = () => {
      const direccion = history.location.pathname;
      if (direccion.toLowerCase() === '/myprofile') {
          setModeMyProfile(true)  
      } else{
          setModeMyProfile(false)
      }
  }

  const getData = async () => {
      const direccion = history.location.pathname;
      let data = ''
      if(direccion.toLowerCase() === '/myprofile') {
         data = await getUser();
      }else {
         data = await getUserById(idUser);
      }
      
      const user = data.data.data
      setDataProfile({
         id: user.id,
         first_name: user.first_name,
         title: user.title,
         avatar: user.avatar?.data.full_url || 'https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600114/29213224-hombre-foto-de-perfil-silueta-avatar.jpg?ver=6',
         cover: user.cover?.data.full_url || 'https://www.publicdomainpictures.net/pictures/280000/nahled/dusky-grey-sky-background.jpg',
         city: user.city,
         department: user.department,
         description: user.description,
         sales_number: user.sales_number,
         rating: user.rating
      })

      const products = await getListProductsByUser(user.id);
      setDataProducts(products.data.data)
  }


  useEffect(() => {
      modePerfil()
      getData()
   }, [modeMyProfile])

   return (
      <div>
         <ProfileDetalLe modeMyProfile={modeMyProfile} dataProfile={dataProfile} />
         <h2 style={{textAlign: 'center'}}>Mis productos</h2>
         <ProductsHome modeMyProfile={modeMyProfile} dataProducts={dataProducts} />
      </div>
   )
}

export default Profile
