import React, { Component } from "react";
import {
    Button,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";
  
  import DescriptionIcon from '@material-ui/icons/Description';
  
  import data from "../assets/data/contenedores.json";
  
  import "./../styles/App.css";

class Contenedor extends Component {
    showMain = e => {
        e.preventDefault();
        this.props.history.push("/");
    };
    render() {
        return(
            <div>
                <h1>
                    Administración de contenedores
                </h1>              
                <Button variant="contained" color="secondary" onClick={this.showMain}>
                    Ir al inicio
                </Button>
            <List
            component="nav"
            subheader={<ListSubheader component="div">Contenedores</ListSubheader>}
            >
            {data.contenedores.map((contenedor, index) => (
                <ListItem button key={index}>
                <ListItemIcon>
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText inset secondary={contenedor.codigo} />
                <ListItemText inset primary={contenedor.etiqueta} />
                <ListItemText inset secondary={contenedor.tag} />
                <ListItemText inset secondary={contenedor.descripcion} />
                <ListItemText inset secondary={contenedor.fecha} />
                <ListItemText inset secondary={contenedor.tara} />
                </ListItem>
            ))}
            </List>
            </div>
        );
    }
}

export default Contenedor;