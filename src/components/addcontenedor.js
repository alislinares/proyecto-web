import React, { Component } from "react";
import axios from 'axios';
import {
    Button,
 
  } from "@material-ui/core";

  export class Addcontenedor extends Component {
    
   addDatoscontenedor(datosc){
      axios.request({
        method:'post',
        url:'http://localhost:3001/api/contenedores',
        data: datosc
      }).then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
     }
 
     showMain = e => {
      e.preventDefault();
      this.props.history.push("/");
    };

    onSubmit(e){
      const datosc={
        codigo: this.refs.codigo.value,
        etiqueta: this.refs.etiqueta.value,
        tag: this.refs.tag.value,
        descripcion: this.refs.descripcion.value,
        fecha: this.refs.fecha.value,
        tara: this.refs.tara.value
      }
      this.addDatoscontenedor(datosc);
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
              <label htmlFor="codigo">Codigo</label><br></br>
              <input type="text" name="codigo" ref="codigo" />
              
            </div>

            <div className="input-field">
              <label htmlFor="etiqueta">Etiqueta</label><br></br>
              <input type="text" name="etiqueta" ref="etiqueta" />
              
            </div>

            <div className="input-field">
              <label htmlFor="tag">Tag</label><br></br>
              <input type="text" name="tag" ref="tag" />
              
            </div>

            <div className="input-field">
              <label htmlFor="descripcion">Descripcion</label><br></br>
              <input type="text" name="descripcion" ref="descripcion" />
              
            </div>

            <div className="input-field">
              <label htmlFor="fecha">Fecha</label><br></br>
              <input type="text" name="fecha" ref="fecha" />              
            </div>

            <div className="input-field">
              <label htmlFor="tara">Tara</label><br></br>
              <input type="text" name="tara" ref="tara" />              
            </div>

            <input type="submit" value="Guardar" className="btn"/>

          </form>
        </div>
                
      );
    }
  }
export default Addcontenedor;