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
  
  import data from "../assets/data/transportes.json";  
  import "./../styles/App.css";

class Transporte extends Component {
    showMain = e => {
        e.preventDefault();
        this.props.history.push("/");
    };
    render() {
        return(
            <div>
                <h1>
                    Administración de transportes
                </h1>
              
                <Button variant="contained" color="secondary" onClick={this.showMain}>
            Ir al inicio
            </Button>
            <List
            component="nav"
            subheader={<ListSubheader component="div">Transportes</ListSubheader>}
            >
            {data.transportes.map((transporte, index) => (
                <ListItem button key={index}>
                <ListItemIcon>
                    <DescriptionIcon />
                </ListItemIcon>
                <ListItemText inset secondary={transporte.proveedor} />
                <ListItemText inset primary={transporte.placas} />
                <ListItemText inset secondary={transporte.tipo} />
                </ListItem>
            ))}
            </List>
            </div>
        );
    }
}

export default Transporte;