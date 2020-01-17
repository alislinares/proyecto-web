import React, { Component } from "react";
import axios from 'axios';
import {
    Button,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon,
    
  } from "@material-ui/core";
  
  import PersonIcon from '@material-ui/icons/Person';
  
  export class User extends Component {
    state = {
      usuarios: []
    }
    componentDidMount() {
      axios.get(`http://localhost:3001/api/usuarios`)
        .then(res => {
          const usuarios = res.data;
          this.setState({ usuarios });
        })
    }
    showMain = e => {
      e.preventDefault();
      this.props.history.push("/");
    };

    obteneruser(){
      let userId =this.props.match.params.id;
      axios.get(`http://localhost:3001/api/usuarios/${userId}`)
      .then(response => {
        this.setState({usuarios: response.data}, () => {
            console.log(this.state);
        })
      }).catch(err => console.log(err));
    };
    

    adduser = e => {
      e.preventDefault();
      this.props.history.push("/adduser");
    };

    edituser = e => {
      e.preventDefault();
      this.props.history.push("/edituser");
    };

    onDelete(){
      let userId =this.state.usuarios.id;
      axios.delete(`http://localhost:3001/api/usuarios/${userId}`)
      .then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
    };

    render() {
      return (
        <div>
          <h1>Administración de usuarios</h1>
          <Button variant="contained" color="secondary" onClick={this.showMain}>
            Ir al inicio
          </Button>
          <Button variant="contained" color="primary" onClick={this.adduser}>
          <PersonIcon /> agregar
          </Button>

          <List
            component="nav"
            subheader={<ListSubheader component="div">Listado de usuarios</ListSubheader>}            
          >          
            {this.state.usuarios.map((usuario, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                <PersonIcon />
                </ListItemIcon>
                <ListItemText inset primary={usuario.clave} />
                <ListItemText inset primary={usuario.nombre} />
                <ListItemText inset primary={usuario.correo} />
                <ListItemText inset primary={usuario.puesto} />
                <Button variant="contained" color="primary" onClick={this.edituser}>
                    Editar
                </Button>
                <Button variant="contained" color="secondary" onClick={this.onDelete.bind(this)}>
                    Borrar
                </Button>
              </ListItem>
            ))}
          </List>
        </div>
                
      );
    }
  }
export default User;

