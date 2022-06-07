import React from 'react';
import ReactDOM from 'react-dom/client';
import TopicList from './accordion';
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const TOPICS = [
  { topic: 'Bulbasaur', content: 'Bulbasaur is a plant pokemon' },
  { topic: 'Charmander', content: 'Charmander is a lizard' },
  { topic: 'Squirtle', content: 'Squirtle is a turtle' },
]

root.render(<TopicList topics={TOPICS}/>);
