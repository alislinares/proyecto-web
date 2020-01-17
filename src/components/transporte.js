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

  export class Transporte extends Component {
    state = {
      transportes: []
    }
    componentDidMount() {
      axios.get(`http://localhost:3001/api/transportes`)
        .then(res => {
          const transportes = res.data;
          this.setState({ transportes });
        })
    }
    showMain = e => {
      e.preventDefault();
      this.props.history.push("/");
    };
    

    addtransporte = e => {
      e.preventDefault();
      this.props.history.push("/addtransporte");
    };


    deletetransporte(){
      let userId =this.state.transportes.id;
      axios.delete(`http://localhost:3001/api/transportes/${userId}`)
      .then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
    };


    render() {
      return (
        <div>
          <h1>Administración de transportes</h1>
          <Button variant="contained" color="secondary" onClick={this.showMain}>
            Ir al inicio
          </Button>
          <Button variant="contained" color="primary" onClick={this.addtransporte}>
        <DescriptionIcon /> AGREGAR
        </Button>

          <List
            component="nav"
            subheader={<ListSubheader component="div">Listado de transportes</ListSubheader>}
            
          >
          
            {this.state.transportes.map((transporte, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                 <ListItemText inset secondary={transporte.proveedor} />
                  <ListItemText inset primary={transporte.placas} />
                  <ListItemText inset secondary={transporte.tipo} />
                  <Button variant="contained" color="primary" onClick={this.editransporte}>
                    Editar
                </Button>
                <Button variant="contained" color="secondary" onClick={this.deletetransporte.bind(this)}>
                    Borrar
                </Button>
              </ListItem>
            ))}
          </List>
        </div>
      );
    }
  }
export default Transporte;