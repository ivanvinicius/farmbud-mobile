import React from 'react';

import {AuthProvider} from './Auth';

interface IAppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({children}: IAppProviderProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
