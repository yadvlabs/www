import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Old from './pages/Old';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Old />
  </StrictMode>,
);
