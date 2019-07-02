import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './vievs/Home'
import People from './vievs/People'
import Contact from './vievs/Contact'
import Login from './vievs/Login'
import Navbar from './Navbar/navbar'



export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={People} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Login" component={Login} />
                </div>
            </BrowserRouter>
        )
    }
}
