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
  
  import data from "../assets/data/ubicaciones.json";  
  import "./../styles/App.css";


class Area extends Component {
    showMain = e => {
        e.preventDefault();
        this.props.history.push("/");
    };
    render() {
        return(
            <div>
                <h1>
                    Administración de ubicaciones
                </h1>
              <Button variant="contained" color="secondary" onClick={this.showMain}>
            Ir al inicio
            </Button>
            <List
            component="nav"
            subheader={<ListSubheader component="div">ubicaciones</ListSubheader>}
            >
            {data.ubicaciones.map((ubicacion, index) => (
                <ListItem button key={index}>
                <ListItemIcon>
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText inset secondary={ubicacion.zona} />
                <ListItemText inset primary={ubicacion.ubicacion} />
                <ListItemText inset secondary={ubicacion.tipo} />
                </ListItem>
            ))}
            </List>
            </div>
        );
    }
}

export default Area;

