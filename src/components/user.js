import React, { Component } from "react";

import {
    Button,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";
  
  import PersonIcon from '@material-ui/icons/Person';
  
  import data from "../assets/data/usuarios.json";
  
  import "./../styles/App.css";

class User extends Component {
    showMain = e => {
        e.preventDefault();
        this.props.history.push("/");
    };
    render() {
        return(
            <div>
                <h1>
                    Administración de usuarios
                </h1>
            <Button variant="contained" color="secondary" onClick={this.showMain}>
            Ir al inicio
            </Button>
            <List
            component="nav"
            subheader={<ListSubheader component="div">usuarios</ListSubheader>}
            >
            {data.usuarios.map((usuario, index) => (
                <ListItem button key={index}>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText inset secondary={usuario.clave} />
                <ListItemText inset primary={usuario.nombre} />
                <ListItemText inset secondary={usuario.correo} />
                <ListItemText inset secondary={usuario.puesto} />
                </ListItem>
            ))}
            </List>
            </div>
        );
    }
}
export default User;

