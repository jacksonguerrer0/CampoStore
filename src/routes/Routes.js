import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import variables from '../styles/variables'
import '../styles/style.css'
import Layout from '../layout/Layout'
import '@fortawesome/fontawesome-free/css/all.min.css';
import DetailProduct from '../containers/DetailProduct'
import Login from '../containers/Login'

const Routes = () => {

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
            <Route path="/" component={Layout} />
         </Switch>
      </Router>
   )
}

export default Routes
