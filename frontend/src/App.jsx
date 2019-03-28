import React from 'react';

import Index from './pages/index';
import { StateProvider } from './contexts/stateContext';

export default function App() {
  return (
    <StateProvider>
      <Index />
    </StateProvider>
  );
}
