import React, { Component } from "react";
import axios from 'axios';
import {
    Button,
 
  } from "@material-ui/core";

  export class Adduser extends Component {
    
   addDatos(datos){
      axios.request({
        method:'post',
        url:'http://localhost:3001/api/usuarios',
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
        clave: this.refs.clave.value,
        nombre: this.refs.nombre.value,
        correo: this.refs.correo.value,
        contrasena: this.refs.contrasena.value,
        puesto: this.refs.puesto.value
      }
      this.addDatos(datos);
      e.preventDefault();
    }

    render() {
      return (
        <div>
          <h1>Agregar usuario</h1>
          <Button variant="contained" color="secondary" onClick={this.showMain}>
            Ir al inicio
          </Button>

          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
              <label htmlFor="clave">Clave de usuario</label>
              <input type="text" name="clave" ref="clave" />              
            </div>

            <div className="input-field">
              <label htmlFor="nombre">Nombre de usuario</label>
              <input type="text" name="nombre" ref="nombre" />              
            </div>

            <div className="input-field">
              <label htmlFor="correo">Correo de usuario</label>
              <input type="text" name="correo" ref="correo" />              
            </div>

            <div className="input-field">
              <label htmlFor="contrasena">Contraseña de usuario</label>
              <input type="password" name="contrasena" ref="contrasena" />              
            </div>

            <div className="input-field">
              <label htmlFor="puesto">Puesto de usuario</label>
              <input type="text" name="puesto" ref="puesto" />              
            </div>
            <input type="submit" value="Guardar cambios" className="btn"/>

          </form>
        </div>
                
      );
    }
  }
export default Adduser;