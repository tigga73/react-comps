import React from 'react';
import ReacDOM from 'react-dom/client';
import App from './App';

import './index.css';

const el = document.getElementById('root');
const root = ReacDOM.createRoot(el);

root.render(<App />);
