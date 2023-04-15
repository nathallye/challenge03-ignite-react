import { HeaderContainer, HeaderContent } from "./styles";

import logoGithubBlog from "../../assets/logo-github-blog.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoGithubBlog} alt="" />
      </HeaderContent>
    </HeaderContainer>
  );
};