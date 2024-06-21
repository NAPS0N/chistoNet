export type User = {
    id: number | null;
    login?: string;
    email: string;
    password: string;
    isAdmin?: boolean;
    avatar?: string;
    isBlocked?: boolean;
  };
  export type UserWithoutPassword = Omit<User, 'password'>;
  export type UserLogInForm= {
    email: string;
    password: string;
  };
  
  export type AccessToken = {
    accessToken: string;
  };
  
  export type ServerAuthResponse = {
    user: User;
    accessToken: string;
    message?: string;
    error?: {
      code: string,
      message: string,
    };
  };
  
   
  