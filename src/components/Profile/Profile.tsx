import {
  ArrowUpRight,
  Buildings,
  GitBranch,
  UserRectangle,
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
            <span>Nathallye Bacelar</span>
            <a href="https://github.com/nathallye">
              <span>GITHUB</span>
              <ArrowUpRight size={12} color="#3294F8" />
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
              <GitBranch size={18} color="#3A536B" />
              nathallye
            </span>
            <span>
              <Buildings size={18} color="#3A536B" />
              Avanade
            </span>
            <span>
              <UserRectangle size={18} color="#3A536B" />
              30 seguidores
            </span>
          </footer>
        </ProfileCardInfos>
      </ProfileCard>
    </ProfileContainer>
  );
};
