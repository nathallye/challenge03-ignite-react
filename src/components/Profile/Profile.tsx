import { ArrowUpRight, Buildings, GitBranch, UserRectangle } from "phosphor-react";

import { ProfileCard, ProfileCardInfos, ProfileContainer } from "./styles";

import avatar from "../../assets/avatar.svg";

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileCard>
        <img src={avatar} alt="" />
        <ProfileCardInfos>
          <header>
            <span>Cameron Williamson</span>
            <a href="">
              <span>GITHUB</span>
              <ArrowUpRight size={12} color="#3294F8" />
            </a>          
          </header>
          <body>
            <span>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </span>
          </body>
          <footer>
            <span>
              <GitBranch size={18} color="#3A536B" />
              cameronwll
            </span>
            <span>
              <Buildings size={18} color="#3A536B" />
              Rocketseat
            </span>
            <span>
              <UserRectangle size={18} color="#3A536B" />
              32 seguidores
            </span>
          </footer>
        </ProfileCardInfos>
      </ProfileCard>
    </ProfileContainer>
  );
};
