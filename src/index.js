import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './App';
import './css/index.css'

const root = document.getElementById('root');
const el = createRoot(root);
el.render(<App />);