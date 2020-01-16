import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class Menu extends Component {
    showMain = e => {
        e.preventDefault();
        this.props.history.push("/");
    };
    render() {
        return(
            <div>
                <h1>
                    Mi proyecto inicial
                </h1>
              
                <Button variant="contained" color="secondary" onClick={this.showMain}>
                    Regresar
                </Button>
            </div>
        );
    }
}

export default Menu;
