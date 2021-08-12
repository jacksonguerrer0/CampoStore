import React, { useState } from 'react'
import Menu from './Menu'
import { BrowserRouter as Router, Switch, Route, useLocation, Redirect } from 'react-router-dom'
import Home from '../containers/Home'
import Post from '../containers/Post'
import Messages from '../containers/Messages'
import Profile from '../containers/Profile'
import DetailProduct from '../containers/DetailProduct'
import ShowChat from '../components/ShowChat'
import isAuth from '../utils/isAuth'
import PaymentSuccess from '../containers/Pay'
import Pay from '../containers/Pay'
import Check from '../containers/Check'
import History from '../containers/History'

const Layout = () => {

   const [menu, setMenu] = useState([
      {
         name: 'Home',
         path: '/home',
         component: Home,
         icon: 'fas fa-home',
         status: false
      },
      {
         name: 'Publicar',
         path: '/post',
         component: Post,
         icon: 'fas fa-bullhorn',
         status: false
      },
      {
         name: 'Mensajes',
         path: '/messages',
         component: Messages,
         icon: 'far fa-comment-dots',
         status: false
      },
      {
         name: 'Perfil',
         path: '/myprofile',
         component: Profile,
         icon: 'fas fa-user',
         status: false
      }
   ])


   return (
      <div className='container'>
         <Router>
            <Switch>
               <Route exact path='/messages/:id' component={ShowChat} />
               {menu.map((element, index) => (
                  <Route key={index} exact path={element.path} component={element.component} />
               ))}
               <Route exact path='/detail/:idProduct' component={DetailProduct} />
               <Route exact path='/profile/:idUser' component={Profile} />
               <Route exact path ='/pay/:idProductPay' component={Pay} />
               <Route exact path ='/check' component={Check} />
               <Route exact path='/history/:modeProfile/:idProfile' component={History} />
               <Redirect to="/home" />
            </Switch>
            <Menu listMenu={menu} />
         </Router>
      </div>
   )
}

export default Layout
