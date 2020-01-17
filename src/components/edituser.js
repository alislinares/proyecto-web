import React, { Component } from "react";
import axios from 'axios';
import {
    Button,
 
  } from "@material-ui/core";

  export class Edituser extends Component {
    constructor(props){
      super(props);
      this.state = {
        clave:'',
        nombre:'',
        correo:'',
        contrasena:'',
        puesto:'',
        id:''
      }
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(){
      this.obtenerDatos();
    }

    obtenerDatos(){
      let userId = this.props.match.params.id;
      axios.get (`http://localhost:3001/api/usuarios/${userId}`).then(response =>{
        this.setState({
          clave: response.datosuser.id,
          nombre: response.datosuser.nombre,
          correo: response.datosuser.correo,
          contrasena: response.datosuser.contrasena,
          puesto: response.datosuser.puesto
        }, () => {
          console.log(this.state);
        });
      }).catch(err => console.log(err));
    }

    edituser(nuevodato){
      axios.request({
        method:'put',
        url:`http://localhost:3001/api/usuarios/${this.state.id}`,
        data: nuevodato
      }).then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
    }



    onSubmit(e){
      const datosuser={
        clave: this.refs.clave.value,
        nombre: this.refs.nombre.value,
        correo: this.refs.correo.value,
        contrasena: this.refs.contrasena.value,
        puesto: this.refs.puesto.value
      }
      this.edituser(datosuser);
      e.preventDefault();
    }

    handleInputChange(e){
      const target = e.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }


    render() {
      return (
        <div>
          <h1>Editar usuario</h1>
          <Button variant="contained" color="secondary" onClick={this.showMain}>
            Ir al inicio
          </Button>

          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
              <label htmlFor="clave">Clave de usuario</label>
              <input type="text" name="clave" ref="clave" value={this.state.clave}
               onChange={this.handleInputChange} />              
            </div>

            <div className="input-field">
              <label htmlFor="nombre">Nombre de usuario</label>
              <input type="text" name="nombre" ref="nombre" value={this.state.nombre} 
              onChange={this.handleInputChange} />              
            </div>

            <div className="input-field">
              <label htmlFor="correo">Correo de usuario</label>
              <input type="text" name="correo" ref="correo" value={this.state.correo}
              onChange={this.handleInputChange} />              
            </div>

            <div className="input-field">
              <label htmlFor="contrasena">Contraseña de usuario</label>
              <input type="password" name="contrasena" ref="contrasena" value={this.state.contrasena}
              onChange={this.handleInputChange} />              
            </div>

            <div className="input-field">
              <label htmlFor="puesto">Puesto de usuario</label>
              <input type="text" name="puesto" ref="puesto" value={this.state.puesto} 
              onChange={this.handleInputChange} />              
            </div>
            <input type="submit" value="Guardar cambios" className="btn"/>

          </form>
        </div>                
      );
    }
  }
export default Edituser;