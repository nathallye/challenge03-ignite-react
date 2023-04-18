import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  UsersThree,
} from "phosphor-react";

import { ProfileContainer, ProfileCard, ProfileCardInfos,  } from "./styles";

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileCard>
        <img
          src="https://avatars.githubusercontent.com/u/86172286"
          alt=""
        />
        <ProfileCardInfos>
          <header>
            <h1>Nathallye Bacelar</h1>
            <a href="https://github.com/nathallye">
              <span>GITHUB</span>
              <ArrowSquareUpRight size={14} color="#3294F8" />
            </a>
          </header>
          <body>
            <span>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </span>
          </body>
          <footer>
            <span>
              <GithubLogo size={18} color="#3A536B" />
              nathallye
            </span>
            <span>
              <Buildings size={18} color="#3A536B" />
              Avanade
            </span>
            <span>
              <UsersThree size={18} color="#3A536B" />
              30 seguidores
            </span>
          </footer>
        </ProfileCardInfos>
      </ProfileCard>
    </ProfileContainer>
  );
};
