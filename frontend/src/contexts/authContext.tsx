import React from 'react';

export interface IAuthState {
  address: string;
  isConnected: boolean;
  ensName?: string;
  connectToWallet: () => void;
}

const defaultState: IAuthState = {
  address: '',
  connectToWallet: () => {},
  isConnected: false,
  ensName: '',
};
export const AuthContext = React.createContext(defaultState);
type AuthProviderProps = {
  children: React.ReactNode; // 👈️ type children
};
const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={defaultState}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
