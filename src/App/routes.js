import React from 'react'
import {Route} from 'react-router-dom'
import Home from './home'
import Profile from './profile'
import NotFound from '../helpers/notFound'

const routes=[
    <Route key='home' exact path='/' component={Home}/>,
    <Route key='profile' path='/profile' component={Profile}/>,
    <Route key='notFound' component={NotFound}/>
]

export default routes
