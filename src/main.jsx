import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ContextProvider } from './contextapi/ContextApi.jsx';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
