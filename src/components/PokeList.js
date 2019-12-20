import React from 'react';

function PokeList(props) {
  return (
    <ul className="cards">{props.children}</ul>
  )
}

export default PokeList;
