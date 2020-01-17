import React, { Component } from "react";
import axios from 'axios';
import {
    Button,
 
  } from "@material-ui/core";

  export class Addtransporte extends Component {
    
   addDatos(datos){
      axios.request({
        method:'post',
        url:'http://localhost:3001/api/transportes',
        data: datos
      }).then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
     }
 
     showMain = e => {
      e.preventDefault();
      this.props.history.push("/");
    };

    onSubmit(e){
      const datos={
        proveedor: this.refs.proveedor.value,
        placas: this.refs.placas.value,
        tipo: this.refs.tipo.value      
      }
      this.addDatos(datos);
      e.preventDefault();
    }

    render() {
      return (
        <div>
          <h1>Agregar contenedor</h1>
          <Button variant="contained" color="secondary" onClick={this.showMain}>
            Ir al inicio
          </Button>

          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
              <label htmlFor="proveedor">Proveedor</label><br></br>
              <input type="text" name="proveedor" ref="proveedor" />
              
            </div>

            <div className="input-field">
              <label htmlFor="placas">Placas</label><br></br>
              <input type="text" name="placas" ref="placas" />
              
            </div>

            <div className="input-field">
              <label htmlFor="tipo">Tipo</label><br></br>
              <input type="text" name="tipo" ref="tipo" />
              
            </div>

            <input type="submit" value="Guardar" className="btn"/>

          </form>
        </div>
                
      );
    }
  }
export default Addtransporte;