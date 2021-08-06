import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {  useHistory } from 'react-router-dom';
import ProductsHome from '../components/ProductsHome'
import ProfileDetalLe from '../components/ProfileDetalle'

const Profile = () => {
   const [modeMyProfile, setModeMyProfile] = useState(true)
   const history = useHistory()

   const modePerfil = () => {
      const direccion = history.location.pathname;
      if (direccion.toLowerCase() === '/myprofile') {
          setModeMyProfile(true)  
      } else{
          setModeMyProfile(false)
      }
  }
  useEffect(() => {
   modePerfil()
})
   return (
      <div>
         <ProfileDetalLe modeMyProfile={modeMyProfile}/>
         <h2 style={{textAlign: 'center'}}>Mis productos</h2>
         <ProductsHome modeMyProfile={modeMyProfile} />
      </div>
   )
}

export default Profile
