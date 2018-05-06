import React from 'react';
import { Card, Image, Accordion } from 'semantic-ui-react';

const PokemonCard = (props) => {
  const movePanel = [{
    title: "Moves:",
    content: [...props.pokemon.moves.map(move => move.name)].join(', '),
  }]

  const locationPanel = [{
    title: "Locations:",
    content: [...props.pokemon.locations.map(location => location.name)].join(', '),
  }]

  return(
    <div className = "pokemonCardDiv">
      <Card>
        <Image src={props.pokemon.image} />
        <Card.Content>
          <Card.Header className="pokemonName">
            {props.pokemon.name}
          </Card.Header>
          <Card.Meta className="pokemonType">
            {props.pokemon.types.map(type => type.name + " ")}
          </Card.Meta>
          <div className="pokemonCardPropertyList">
            <Card.Content className="pokemonCardPropertyElement">
              <Accordion defaultActiveIndex={0} panels={movePanel} />
            </Card.Content>
            <Card.Content className="pokemonCardPropertyElement">
              <Accordion defaultActiveIndex={0} panels={locationPanel} />
            </Card.Content>
          </div>
        </Card.Content>
      </Card>
    </div>
  )
};

export default PokemonCard;
