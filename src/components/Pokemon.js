import React from 'react';
import PropTypes from "prop-types";



//funcion para poner la primera letra en mayúsculas --> funcion del repo https://gist.github.com/jomasero/5868123
String.prototype.capitalize = function () {
  return this.replace(/(^|\s)([a-z])/g, function (m, p1, p2) { return p1 + p2.toUpperCase(); });
};


function Pokemon(props) {

  const { types, name, url } = props.pokemon;

  return (
    <li className=" card border--medium">
      <img src={url} alt={name} />
      <h2 className="card__title">{name.capitalize()}</h2>
      <ul>
        {types.map((type, index) =>
          <li className="card__btn"
            key={index}>
            {type.toUpperCase()}
          </li>
        )}
      </ul>
    </li>
  )
}

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
};



export default Pokemon;