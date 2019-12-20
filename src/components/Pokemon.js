import React from 'react';

function Pokemon(props) {
  console.log(props.pokemon.types);
  const types = props.pokemon.types;
  return (
    <li className=" card border--medium">
      <img src={props.pokemon.url} />
      <h2 className="card__title">{props.pokemon.name}</h2>
      <ul>{types.map((type, index) => {
        return <li className="card__btn"
          key={index}
        >{type}
        </li>
      })}
      </ul>
    </li>
  )
}

export default Pokemon;