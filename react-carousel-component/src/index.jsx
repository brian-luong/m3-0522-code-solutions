import React from "react";
import ReactDOM from 'react-dom/client'
import Carousel from "./carousel";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const data = [
  {
  pokemonId: 1,
    imageUrl: 'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg'
  },
  {
    pokemonId: 2,
    imageUrl: 'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg'
  },
  {
    pokemonId: 3,
    imageUrl: 'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg'
  },
  {
    pokemonId: 4,
    imageUrl: 'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg'
  },
  {
    pokemonId: 5,
    imageUrl: 'https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg'
  }
]

root.render(<Carousel/>);
