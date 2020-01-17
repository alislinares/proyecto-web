import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './../App';
import Login from "./../components/login";
import Area from "./../components/area";
import User from "./../components/user";
import Contenedor from "./contenedor";
import Transporte from "./transporte";
import Adduser from "./adduser";
import Edituser from "./edituser";
import Addcontenedor from "./addcontenedor";
import Addubicacion from "./addubicacion";
import Addtransporte from "./addtransporte";


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/area" component={Area} />
            <Route path="/user" component={User} />
            <Route path="/transporte" component={Transporte} />
            <Route path="/contenedor" component={Contenedor} />
            <Route path="/adduser" component={Adduser} />
            <Route path="/edituser/:id" component={Edituser} />
            <Route path="/addcontenedor" component={Addcontenedor} />
            <Route path="/addubicacion" component={Addubicacion} />
            <Route path="/addtransporte" component={Addtransporte} />
         
        </Switch>
    </BrowserRouter>
)

export default Router;