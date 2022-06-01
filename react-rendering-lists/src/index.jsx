import React from "react";
import ReactDOM from "react-dom/client";

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function DisplayList(props) {

const items = props.pokedex;
const listItems = items.map((item) =>
  <li>{item.name}</li>
);

  return (
    <ul>
      {listItems}
    </ul>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<DisplayList pokedex={pokedex}/>)
