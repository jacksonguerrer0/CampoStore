import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import { createGlobalStyle } from 'styled-components'
import variables from '../styles/variables'


const Routes = () => { 
    const GlobalStyles = createGlobalStyle`
        body{
            background-color: ${variables.background};
        }
    `

    return (
        <Router>
            <GlobalStyles/>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default Routes
