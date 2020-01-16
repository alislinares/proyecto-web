import React, { Component } from 'react';
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import Button from '@material-ui/core/Button';
import './styles/App.css';

class App extends Component  {
  showUser = e => {
    e.preventDefault();
    this.props.history.push("/user");
  };
  showArea = e => {
    e.preventDefault();
    this.props.history.push("/area");
  };
  showContenedor = e => {
    e.preventDefault();
    this.props.history.push("/contenedor");
  };
  showTransporte = e => {
    e.preventDefault();
    this.props.history.push("/transporte");
  };

  showTransporte = e => {
    e.preventDefault();
    this.props.history.push("/usuarios");
  };

  render() {
  return (
    
    <div className="App">
      <div className="App-header">  
      <Header />
      </div>
        <br></br>    
        <Button variant="contained" color="primary" onClick={this.showUser}>
                    Administrar Usuarios
        </Button>
      <br></br><br></br><br></br>
      <Button variant="contained" color="primary" onClick={this.showContenedor}>
                    Administrar Contenedores
        </Button>
      <br></br><br></br><br></br>
      <Button variant="contained" color="primary" onClick={this.showArea}>
                    Administar Ubicaciones Internas
      </Button>
      <br></br><br></br><br></br>
      <Button variant="contained" color="primary" onClick={this.showTransporte}>
                    Administrar Transportes
        </Button>
      <br></br><br></br>

      <Button variant="contained" color="primary" onClick={this.showTransporte}>
                    Usuarios Almacen PT
        </Button>
      <br></br><br></br>
      <Footer />
    </div>
  );
}
}

export default App;
