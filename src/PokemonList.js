import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = props => {
  const pokemon = props.pokemon.map(pokemon => (
    <PokemonCard pokemon={pokemon} key={pokemon.name} />
  ));

  return (
    <div className="pokemonList">
      {pokemon}
    </div>
  )
}

export default PokemonList;
