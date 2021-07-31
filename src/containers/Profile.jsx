import React from 'react'
import ProfileDetale from '../components/ProfileDetalle'
import ProfileProducts from '../components/ProfileProducts'

const Profile = () => {
   return (
      <div>
         <ProfileDetale />
         <h2 style={{textAlign: 'center'}}>Mis productos</h2>
         <ProfileProducts />
      </div>
   )
}

export default Profile
