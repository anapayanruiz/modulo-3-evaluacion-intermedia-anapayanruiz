import React from 'react';
import Pokemon from './Pokemon';

function PokeList(props) {
  return (
    <ul>{props.children}</ul>
  )
}

export default PokeList;
