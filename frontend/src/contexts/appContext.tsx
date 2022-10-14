import React from 'react';

import { AppConfig } from '../utils/AppConfig';

type AppProviderProps = {
  children: React.ReactNode; // 👈️ type children
};

export interface IAppConfig {
  name: string;
  short: string;
  contactEmail?: string;
  url: string;
  theme?: {
    colors?: any;
  };
}

const defaultState: IAppConfig = AppConfig;
export const AppContext = React.createContext(defaultState);

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AppContext.Provider value={defaultState}>{children}</AppContext.Provider>
  );
};

export { AppProvider };
