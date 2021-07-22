import React from 'react'
import Menu from './Menu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Post from '../containers/Post'
import Messages from '../containers/Messages'
import Profile from '../containers/Profile'

const Layout = () => {

   const menu = [
      {
         path: '/home',
         component: Home
      },
      {
         path: '/post',
         component: Post
      },
      {
         path: '/messages',
         component: Messages
      },
      {
         path: '/profile',
         component: Profile
      }
   ]

   return (
      <div className='container'>
         <Router>
            <Switch>
               {menu.map((element) => (
                  <Route exact path={element.path} component={element.component} />
               ))}
            </Switch>
            <Menu />
         </Router>
      </div>
   )
}

export default Layout
