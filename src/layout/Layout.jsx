import React, { useState } from 'react'
import Menu from './Menu'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import Home from '../containers/Home'
import Post from '../containers/Post'
import Messages from '../containers/Messages'
import Profile from '../containers/Profile'
import DetailProduct from '../containers/DetailProduct'

const Layout = () => {

   const [menu, setMenu] = useState([
      {
         name: 'Home',
         path: '/home',
         component: Home,
         icon: 'https://i.imgur.com/Zj6wB6H.png',
         status: false
      },
      {
         name: 'Publicar',
         path: '/post',
         component: Post,
         icon: 'https://i.imgur.com/fNxEJ8g.png',
         status: false
      },
      {
         name: 'Mensajes',
         path: '/messages',
         component: Messages,
         icon: 'https://i.imgur.com/sNPrfEE.png',
         status: false
      },
      {
         name: 'Perfil',
         path: '/profile',
         component: Profile,
         icon: 'https://i.imgur.com/NI4icpy.png',
         status: false
      }
   ])

   const handleMenu = (menuItem) => {
      const list = menu;
      list.forEach(element => {
         if(element.name === menuItem.name) {
            element.status = true
         }else {
            element.status = false
         }
      });

      // const index = menu.indexOf(menuItem)
      // list.forEach(element => {
      //    element.status = false
      // });
      // list[index].status = true;
      // console.log(list)
      setMenu(list)
   }
   return (
      <div className='container'>
         <Router>
            <Switch>
               {menu.map((element, index) => (
                  <Route key={index} exact path={element.path} component={element.component} />
               ))}
               <Route exact path='/detail' component={DetailProduct} />
            </Switch>
            <Menu listMenu = {menu} handleMenu={handleMenu} />
         </Router>
      </div>
   )
}

export default Layout
