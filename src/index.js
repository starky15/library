import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './App';
import './css/index.css'
import {Provider} from './Context/BookContext';

const root = document.getElementById('root');
const el = createRoot(root);
el.render(
    <Provider>
        <App />
    </Provider>
);