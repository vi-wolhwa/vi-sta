import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => <h1>vi-sta playground</h1>;

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
