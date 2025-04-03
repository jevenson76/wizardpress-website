import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { externalAssets } from './lib/external-assets';

// Function to load external script
const loadExternalScript = () => {
  const script = document.createElement('script');
  script.src = externalAssets.js;
  script.async = true;
  document.body.appendChild(script);
};

function Root() {
  useEffect(() => {
    loadExternalScript();
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);