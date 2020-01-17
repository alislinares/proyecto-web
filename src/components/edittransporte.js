import React, { Component } from "react";
import axios from 'axios';

export class Edittransporte extends Component {
    constructor(props){
        super(props);
        this.state= {
            proveedor:'',
            placas:'',
            tipo:'',            
            id:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(){
        this.obtenertransporte();
    }

    obtenertransporte(){
        let Idtransporte =this.props.match.params.id;
        axios.get(`http://localhost:3001/api/usuarios/${Idtransporte}`)
        .then(response => {
          this.setState({
              proveedor: response.datos.proveedor, 
              placas: response.placas, 
              tipo: response.datos.tipo, 
              id: response.datos.id               
            },() =>{
                console.log(this.state);
            });
        }).catch(err => console.log(err));
      };

    Edittransporte(obtenertransporte){
        axios.request({
            method:'put',
            url:`http://localhost:3001/api/transportes/${this.state.id}`,
            data: obtenertransporte
          }).then(response => {
            this.props.history.push('/');
          }).catch(err => console.log(err));
    }

    onSubmit(e){
      const datos={
        proveedor: this.refs.proveedor.value,
        placas: this.refs.placas.value,
        tipo: this.refs.tipo.value
      }
      this.Edittransporte(datos);
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
          <h1>Editar transporte</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
              <label htmlFor="zona">Proveedor</label>
              <input type="text" name="proveedor" ref="proveedor" value={this.state.proveedor}
              onChange={this.handleInputChange} />              
            </div>

            <div className="input-field">
              <label htmlFor="placas">Placas</label>
              <input type="text" name="placas" ref="placas" value={this.state.placas} onChange={this.handleInputChange}/>            
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
export default Edittransporte;