import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './../App';
import Login from "./../components/login";
import Area from "./../components/area";
import User from "./../components/user";
import Contenedor from "./contenedor";
import Transporte from "./transporte";
import Usuarios from "./usuarios";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/area" component={Area} />
            <Route path="/user" component={User} />
            <Route path="/transporte" component={Transporte} />
            <Route path="/contenedor" component={Contenedor} />
            <Route path="/usuarios" component={Usuarios} />
        </Switch>
    </BrowserRouter>
)

export default Router;