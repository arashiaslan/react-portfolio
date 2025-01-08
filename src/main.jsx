import React from 'react';
import { createRoot } from 'react-dom/client';

// import komponen App
import App from './App.jsx';

// import style
import './App.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
