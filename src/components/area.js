import React, { Component } from "react";
import axios from 'axios';
import {
    Button,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";
  
  import DescriptionIcon from '@material-ui/icons/Description';

  export class Area extends Component {
    state = {
      areas: []
    }
    componentDidMount() {
      axios.get(`http://localhost:3001/api/ubicaciones`)
        .then(res => {
          const areas = res.data;
          this.setState({ areas });
        })
    }

    addubicacion = e => {
      e.preventDefault();
      this.props.history.push("/addubicacion");
    };

    
    deleteubicacion(){
      let userId =this.state.ubicacion.id;
      axios.delete(`http://localhost:3001/api/ubicacion/${userId}`)
      .then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
    };

    showMain = e => {
      e.preventDefault();
      this.props.history.push("/");
    };
    render() {
      return (
        <div>
          <h1>Almacen de Producto Terminado</h1>
          <Button variant="contained" color="secondary" onClick={this.showMain}>
            Ir al inicio
          </Button>
          <Button variant="contained" color="primary" onClick={this.addubicacion}>
        <DescriptionIcon /> AGREGAR
        </Button>
          <List
            component="nav"
            subheader={<ListSubheader component="div">Listado de ubicaciones</ListSubheader>}            
          >          
            {this.state.areas.map((ubicacion, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText inset primary={ubicacion.zona} />
                <ListItemText inset primary={ubicacion.posicion} />
                <ListItemText inset primary={ubicacion.tipo} />
                <Button variant="contained" color="primary" onClick={this.editubicacion}>
                    Editar
                </Button>
                <Button variant="contained" color="secondary" onClick={this.deleteubicacion.bind(this)}>
                    Borrar
                </Button>
              </ListItem>
            ))}
          </List>
        </div>
      );
    }
  }
export default Area;

