import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Crustydex from './pages/Crustydex';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Crustydex />
  </StrictMode>,
);
