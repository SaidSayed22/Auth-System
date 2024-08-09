// src/types/types.ts


export interface RegisterFormData {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
}

export type validationMsgDetails = {
  en: string;
};

export interface KnownError {
  response: {
    data: {
      message: {
        [key: string]: validationMsgDetails[];
      };
    };
  };
}

export interface LoginFormData {
    username: string;
    password: string;
  }

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
  