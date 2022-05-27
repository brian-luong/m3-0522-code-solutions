import CustomButton from './hot-button';
import React from 'react';
import ReactDOM from 'react-dom/client';
const element = <CustomButton />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
