import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  UsersThree,
} from "phosphor-react";

import { UserContext } from "../../contexts/UserContext";

import { ProfileContainer, ProfileCard, ProfileCardInfos,  } from "./styles";

export const Profile = () => {
  const {user, fetchUser} = useContext(UserContext);

  useEffect(() => {
    fetchUser();
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
            <Link to={user?.html_url ?? ""} >
              <span>GITHUB</span>
              <ArrowSquareUpRight size={14} color="#3294F8" />
            </Link>
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
