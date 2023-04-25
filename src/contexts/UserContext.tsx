import { ReactNode, createContext, useState } from "react"

import { api } from "../lib/axios";
import { UserType } from "../types/user";

interface UserContextType {
  user: UserType | undefined;
  fetchUser: () => Promise<void>;
}

interface UserProvideType {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: UserProvideType) => {
  const [user, setUser] = useState<UserType>();

  const fetchUser = async () => {
    const response = await api.get("/users/nathallye");

    setUser(response.data);
  };

  return (
    <UserContext.Provider value={{user, fetchUser}}>
      {children}
    </UserContext.Provider>
  )
}
