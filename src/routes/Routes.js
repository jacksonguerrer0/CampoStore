import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import variables from '../styles/variables'
import '../styles/style.css'
import Layout from '../layout/Layout'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from '../containers/Login'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import isAuth from '../utils/isAuth'
import '../utils/axiosConfig'

const Routes = () => {

   const [isLogged, setIsLogged] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      isAuth().then((response) => {
         setIsLogged(response)
         setIsLoaded(true)
      })
   }, [])

   const GlobalStyles = createGlobalStyle`
        
      body{
         background-color: ${variables.background}; 
         font-family: 'Otomanopee One';
         margin: 0;
         padding: 0;
         width: 100%;
      };
      .container{
         max-width: 600px;
         margin: 0 auto;
         box-sizing: border-box;
         width: 100%;
         /* @media (max-width: 500px) {
            width: 500px;
            background-color: red;
         } */
      }

      h1{
         font-weight: normal;
         font-size: 31px;
         line-height: 131.02%;
         color: ${variables.black};
         padding: 0;
         margin: 0;
      }
    `

   return (
      <Router>
         <GlobalStyles />
         <Switch>
            {
               isLoaded &&
               <>
               <PublicRoute component={Login} exact path="/login" isLogged={isLogged} restricted={true} />
               <PrivateRoute component={Layout} path="/" isLogged={isLogged} />
               </>
            }
         </Switch>
      </Router>
   )
}

export default Routes
