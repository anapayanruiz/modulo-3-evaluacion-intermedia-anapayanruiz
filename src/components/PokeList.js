import React from 'react';

function PokeList(props) {
  console.log(props);
  return (
    <ul className="cards">{props.children}</ul>
  )
}

export default PokeList;
