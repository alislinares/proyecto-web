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
import FlagIcon from '@material-ui/icons/Flag';
export class Paises extends Component {
  state = {
    paises: []
  }
  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        const paises = res.data;
        this.setState({ paises });
      })
  }
  showMain = e => {
    e.preventDefault();
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Paises API</h1>
        <Button variant="contained" color="secondary" onClick={this.showMain}>
          Principal
        </Button>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Paises</ListSubheader>}
        >
          {this.state.paises.map((pais, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <FlagIcon />
              </ListItemIcon>
              <ListItemText inset primary={pais.name} />
            </ListItem>
          ))}
        </List>
        {/* <ul>
        { this.state.paises.map(
            pais => <li>{pais.name}</li>
        )}
       </ul> */}
      </div>
    );
  }
}
export default Paises;