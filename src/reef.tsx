import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Reef from './pages/Reef';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Reef />
  </StrictMode>,
);
