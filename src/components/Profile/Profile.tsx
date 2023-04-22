import { useEffect, useState } from "react";
import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  UsersThree,
} from "phosphor-react";

import { ProfileContainer, ProfileCard, ProfileCardInfos,  } from "./styles";

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

export const Profile = () => {
  const [user, setUser] = useState<User>();

  const loadUser = async () => {
    const response = await fetch("https://api.github.com/users/nathallye");
    const data = await response.json();

    setUser(data);
  }

  useEffect(() => {
    loadUser();
  }, []); // como não foi informado uma DependencyList, esse useEffect será executado apenas uma única vez

  return (
    <ProfileContainer>
      <ProfileCard>
        <img
          src={user?.avatar_url}
          alt=""
        />
        <ProfileCardInfos>
          <header>
            <h1>{user?.name}</h1>
            <a href={user?.html_url}>
              <span>GITHUB</span>
              <ArrowSquareUpRight size={14} color="#3294F8" />
            </a>
          </header>
          <div>
            <span>
              {user?.bio}
            </span>
            <span>
              {user?.location}
            </span>
          </div>
          <footer>
            <span>
              <GithubLogo size={18} color="#3A536B" />
              {user?.login}
            </span>
            <span>
              <Buildings size={18} color="#3A536B" />
              {user?.company}
            </span>
            <span>
              <UsersThree size={18} color="#3A536B" />
              {user?.followers} seguidores
            </span>
          </footer>
        </ProfileCardInfos>
      </ProfileCard>
    </ProfileContainer>
  );
};
