import React from 'react'
import {BrowserRouter, Router, Route} from 'react-router-dom'
import App from './App'
import Add from './Add'

function AppRouter(){
    return(
            <Router>
                <Route path='/' element={<Add />} />
                <Route path='/create' element={<Add />} />
                <Route path='/update' element={<Add />} />
            </Router>
    )
}

export default AppRouter