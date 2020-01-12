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
      pokemons: apiData,
    };
  }

  render() {
    return (
      <div className="page">
        <Header title="Mi lista de pokemon" />
        <div className="cards">
          <PokeList />
          {this.state.pokemons.length === 0
            ?
            <div>
              <h2 className="title--medium">No hay resultados</h2>
            </div>
            :
            this.state.pokemons.map(pokemon =>
              <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
              />
            )}
          <PokeList />
        </div>
      </div >
    );
  }
}

export default App;
