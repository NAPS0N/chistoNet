export type UserType = {
    id: number | null;
    login?: string;
    phoneNumber: string;
    email: string;
    password: string;
    isAdmin?: boolean;
    avatar?: string;
    isBlocked?: boolean;
  };
  export type UserWithoutPassword = Omit<UserType, 'password'>;
  export type UserLogInForm= {
    email: string;
    password: string;
    phoneNumber: string;
  };
  
  export type AccessToken = {
    accessToken: string;
  };
  
  export type ServerAuthResponse = {
    user: UserType;
    accessToken: string;
    message?: string;
    error?: {
      code: string,
      message: string,
    };
  };
  
   
  