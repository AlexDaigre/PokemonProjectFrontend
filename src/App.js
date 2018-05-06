import React, { Component } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import Header from './Header';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      error: {},
    }
  }

  componentDidMount(){
    axios
      .get(
        'http://localhost:8080/pokemon/query/null+null+null',
      )
      .then(results => {
        this.setState({ pokemon: results.data })
        console.log("got results");
      })
      .catch(error => {
        this.setState({
          //error: error.response.data.error,
        });
        console.log("got console.error();");
      });
  }

  setPokemon = newPokemon => {
    this.setState({
      pokemon: newPokemon,
    })
  }

  render() {
    return (
      <div className="App">
        <Header setPokemon={this.setPokemon} />
        <PokemonList pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
