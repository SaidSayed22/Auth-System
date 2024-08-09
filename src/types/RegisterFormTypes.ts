
// src/types/RegisterFormType.ts

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
  