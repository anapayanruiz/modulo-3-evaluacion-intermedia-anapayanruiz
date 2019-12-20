import React from 'react';
import apiData from '../api/data.json';
import '../stylesheets/App.css';
import Header from './Header';
import PokeList from './PokeList';
import Pokemon from './Pokemon.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: apiData
    };
  }

  render() {
    return (
      <div>
        <Header title="Mi lista de pokemon" />
        <PokeList />
        {this.state.pokemons.map((pokemon, index) => {
          return <Pokemon
            key={index}
            pokemon={pokemon}
          />
        })}
        <PokeList />
      </div>
    );
  }
}

export default App;
