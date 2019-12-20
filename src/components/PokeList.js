import React from 'react';

function PokeList(props) {
  console.log(props);
  return (
    <ul>{props.children}</ul>
  )
}

export default PokeList;
