import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { AuthContextType, User } from '../types/Types';


export const AuthContext = createContext<AuthContextType>({
    user: null,
    token: null,
    setUser: () => {},
  });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cookies, setCookie] = useCookies(['user', 'token']);
    const [user, setUser] = useState<User | null>(cookies.user || null);
  const [token, setToken] = useState<string | null>(cookies.token || null);

  const handleSetUser = (user: User | null, token: string | null = null) => {
    setUser(user);
    if (token) {
      setToken(token);
      setCookie('user', user, { path: '/' });
      setCookie('token', token, { path: '/' });
    }
    
  };

  return (
    <AuthContext.Provider value={{ user, token, setUser: handleSetUser }}>
    {children}
  </AuthContext.Provider>
  );
};
