import { ReactNode, createContext, useState } from "react"
import { api } from "../lib/axios";

interface User {
  id: number;
  name: string;
  login: string;
  bio: string;
  location: string;
  company: string;
  avatar_url: string;
  html_url: string;
  followers: number;
}

interface UserContextType {
  user: User | undefined;
  fetchUser: () => Promise<void>;
}

interface UserProvideType {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: UserProvideType) => {
  const [user, setUser] = useState<User>();

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
