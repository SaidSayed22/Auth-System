// src/types/AuthUserTypes.ts

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    registeredSince: string;
    lastLogin: string;
    originalEmail: {
      email: string;
    }
  };

  export type AuthContextType = {
    user: User | null;
    token: string | null;
    setUser: (user: User | null) => void;
  
  };