import ToggleSwitch from './toggle-switch';
import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <ToggleSwitch />;
root.render(element);
