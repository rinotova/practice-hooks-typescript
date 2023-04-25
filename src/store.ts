import { createContext } from 'react';

export type TUser = {
  firstName: string;
  lastName: string;
};

export type TUserContext = {
  user: TUser;
  setUserName: (user: TUser) => void;
};

const context = createContext({} as TUserContext);

export default context;
