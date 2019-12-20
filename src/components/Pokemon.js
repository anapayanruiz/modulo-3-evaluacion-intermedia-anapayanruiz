import React from 'react';

function Pokemon(props) {
  console.log(props.pokemon.types);
  const types = props.pokemon.types;
  return (
    <li className="border--medium">
      <img src={props.pokemon.url} />
      <h2>{props.pokemon.name}</h2>
      <ul>{types.map((type, index) => {
        return <li
          key={index}
        >{type}
        </li>
      })}
      </ul>
    </li>
  )
}

export default Pokemon;