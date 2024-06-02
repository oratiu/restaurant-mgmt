import React, { ReactNode } from 'react';
import { Provider } from 'mobx-react';
import authStore from '../stores/AuthStore';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <Provider authStore={authStore}>
      {children}
    </Provider>
  );
};

export default AuthProvider;
