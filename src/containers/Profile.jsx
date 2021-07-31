import React from 'react'
import ProductsHome from '../components/ProductsHome'
import ProfileDetale from '../components/ProfileDetalle'

const Profile = () => {
   return (
      <div>
         <ProfileDetale />
         <h2 style={{textAlign: 'center'}}>Mis productos</h2>
         <ProductsHome />
      </div>
   )
}

export default Profile
