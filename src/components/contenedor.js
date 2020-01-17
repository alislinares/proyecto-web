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

export class Contenedor extends Component {
  state = {
    contenedores: []
  }
  componentDidMount() {
    axios.get(`http://localhost:3001/api/contenedores`)
      .then(res => {
        const contenedores = res.data;
        this.setState({ contenedores });
      })
  }
  showMain = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  addcontenedor = e => {
    e.preventDefault();
    this.props.history.push("/addcontenedor");
  };
  
  deletecontenedor(){
    let userId =this.state.contenedores.id;
    axios.delete(`http://localhost:3001/api/contenedores/${userId}`)
    .then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Administración de contenedores</h1>
        <Button variant="contained" color="secondary" onClick={this.showMain}>
          Ir al inicio
        </Button>
        <Button variant="contained" color="primary" onClick={this.addcontenedor}>
        <DescriptionIcon /> AGREGAR
        </Button>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Listado de contenedores</ListSubheader>}
          
        >
        
          {this.state.contenedores.map((contenedor, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
              <DescriptionIcon />
              </ListItemIcon>
              <ListItemText inset primary={contenedor.codigo} />
              <ListItemText inset primary={contenedor.tag} />
              <ListItemText inset primary={contenedor.descripcion} />
              <ListItemText inset primary={contenedor.tara} />
              <Button variant="contained" color="primary" onClick={this.editcontenedor}>
                    Editar
                </Button>
                <Button variant="contained" color="secondary" onClick={this.deletecontenedor.bind(this)}>
                    Borrar
                </Button>
            </ListItem>
          ))}
        </List>
        {/* <ul>
        { this.state.paises.map(
            pais => <li>{pais.name}</li>
        )}
       </ul> */}
      </div>
    );
  }
}
export default Contenedor;