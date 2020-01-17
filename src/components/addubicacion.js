import React, { Component } from "react";
import axios from 'axios';
import {
    Button,
 
  } from "@material-ui/core";

  export class Addubicacion extends Component {
    
   addDatos(datos){
      axios.request({
        method:'post',
        url:'http://localhost:3001/api/ubicaciones',
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
        zona: this.refs.zona.value,
        posicion: this.refs.posicion.value,
        tipo: this.refs.tipo.value        
      }
      this.addDatos(datos);
      e.preventDefault();
    }

    render() {
      return (
        <div>
          <h1>Agregar nueva ubicacion</h1>
          <Button variant="contained" color="secondary" onClick={this.showMain}>
            Ir al inicio
          </Button>

          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
              <label htmlFor="zona">Zona</label><br></br>
              <input type="text" name="zona" ref="zona" />
              
            </div>

            <div className="input-field">
              <label htmlFor="posicion">Posicion</label><br></br>
              <input type="text" name="posicion" ref="posicion" />
              
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
export default Addubicacion;