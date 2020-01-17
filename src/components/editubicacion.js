import React, { Component } from "react";
import axios from 'axios';

export class Editubicacion extends Component {
    constructor(props){
        super(props);
        this.state= {
            zona:'',
            posicion:'',
            tipo:'',            
            id:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(){
        this.obtenerubicacion();
    }

    obtenerubicacion(){
        let IdUbicacion =this.props.match.params.id;
        axios.get(`http://localhost:3001/api/ubicaciones/${IdUbicacion}`)
        .then(response => {
          this.setState({
              zona: response.datos.zona, 
              posicion: response.posicion, 
              tipo: response.datos.tipo, 
              id: response.datos.id               
            },() =>{
                console.log(this.state);
            });
        }).catch(err => console.log(err));
      };

    Edituser(obteneruser){
        axios.request({
            method:'put',
            url:`http://localhost:3001/api/usuarios/${this.state.id}`,
            data: obteneruser
          }).then(response => {
            this.props.history.push('/');
          }).catch(err => console.log(err));
    }

    onSubmit(e){
      const datos={
        clave: this.refs.clave.value,
        nombre: this.refs.nombre.value,
        correo: this.refs.correo.value,
        contrasena: this.refs.contrasena.value,
        puesto: this.refs.puesto.value
      }
      this.Edituser(datos);
      e.preventDefault();
    }

    handleInputChange(e){
        const target= e.target;
        const valor = target.value;
        const nombre= target.name;
        this.setState({
            [nombre]: valor
        });
    }

    render() {
      return (
        <div>
            <br />>           
          <h1>Editar ubicacion</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
              <label htmlFor="zona">Zona</label>
              <input type="text" name="zona" ref="zona" value={this.state.zona}
              onChange={this.handleInputChange} />              
            </div>

            <div className="input-field">
              <label htmlFor="posicion">Posicion</label>
              <input type="text" name="posicion" ref="posicion" value={this.state.posicion} onChange={this.handleInputChange}/>
            
            </div>

            <div className="input-field">
              <label htmlFor="correo">Tipo</label>
              <input type="text" name="tipo" ref="tipo" value={this.state.tipo} onChange={this.handleInputChange}/>            
            </div>

            <input type="submit" value="Guardar cambios" className="btn"/>
          </form>
        </div>
                
      );
    }
  }
export default Editubicacion;