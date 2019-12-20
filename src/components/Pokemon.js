import React from 'react';


//funcion para poner la primera letra en mayúsculas --> funcion del repo https://gist.github.com/jomasero/5868123
String.prototype.capitalize = function () {
  return this.replace(/(^|\s)([a-z])/g, function (m, p1, p2) { return p1 + p2.toUpperCase(); });
};

function Pokemon(props) {
  const types = props.pokemon.types;
  const name = props.pokemon.name;
  const url = props.pokemon.url;
  if (props.pokemon.length === 0) {
    return (
      <div>
        <h2 className="title--medium">{props.title}</h2>
        <p className="text">{props.emptyListMessage}</p>
      </div>
    );
  } else {
    return (
      <li className=" card border--medium">
        <img src={url} alt={name} />
        <h2 className="card__title">{name.capitalize()}</h2>
        <ul>{types.map((type, index) => {
          return <li className="card__btn"
            key={index}
          >{type.toUpperCase()}
          </li>
        })}
        </ul>
      </li>
    )
  }

}

export default Pokemon;