import React, { Component } from 'react';
import { Sticky, Button, Input } from 'semantic-ui-react';
import axios from 'axios';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: "",
      moves: "",
      locations: "",
    }
  }

  getNewPokemon = () => {
    const {types, moves, locations} = this.state
    const queryTypes = types.match(/[a-z]/i) ? types.replace(/, /g, "-") : "null";
    const queryMoves = moves.match(/[a-z]/i) ? moves.replace(/, /g, "-") : "null";
    const queryLocations = locations.match(/[a-z]/i) ? locations.replace(/, /g, "-") : "null";
    console.log(`http://localhost:8080/pokemon/query/${queryTypes}+${queryMoves}+${queryLocations}`);
    axios
      .get(
        `http://localhost:8080/pokemon/query/${queryTypes}+${queryMoves}+${queryLocations}`,
      )
      .then(results => {
        this.props.setPokemon(results.data)
        // this.setState({
        //   types: "",
        //   moves: "",
        //   locations: "",
        // })
        console.log("got results");
      })
      .catch(error => {
        console.log("got console.error();");
      });
  }

  handleInput = property => event => {
    const newState = {};
    newState[property] = event.target.value;
    this.setState(newState);
  };

  onKeyPress = event => {
    if(event.key === 'Enter'){
      this.getNewPokemon();
    }
  };

  render() {
    return (
      <Sticky>
        <div className="navbar">
          <div className="pokemonTitle">Pokemon Search</div>
          <div className="searchFields">
            <div className="searchElemet">
              <Input
                placeholder='Types...'
                value={this.state.types}
                onChange={this.handleInput('types')}
                onKeyPress={this.onKeyPress}
              />
            </div>
            <div className="searchElemet">
              <Input
                placeholder='Moves...'
                value={this.state.moves}
                onChange={this.handleInput('moves')}
                onKeyPress={this.onKeyPress}
              />
            </div>
            <div className="searchElemet">
              <Input
                placeholder='Locations...'
                value={this.state.locations}
                onChange={this.handleInput('locations')}
                onKeyPress={this.onKeyPress}
              />
            </div>
            <div className="searchElemet">
              <Button onClick={this.getNewPokemon}>Search</Button>
            </div>
          </div>
        </div>
      </Sticky>
    )
  }
}

export default Header;
