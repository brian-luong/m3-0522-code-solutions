import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const topics = [
  {
    topicId: 1,
    title: 'Bulbasaur',
    content: 'Bulbasaur is a plant pokemon'
  },
  {
    topicId: 2,
    title: 'Charmander',
    content: 'Charmander is a lizard'
  },
  {
    topicId: 3,
    title: 'Squirtle',
    content: 'Squirtle is a turtle'
  }
]

root.render(<Accordion topics={topics}/>);
