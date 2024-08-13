import React from 'react';

import { AppRouterProvider } from './Context/AppRouterProvider.tsx';

export const App: React.FC = () => {
  return (
    <AppRouterProvider/>
  );
};
