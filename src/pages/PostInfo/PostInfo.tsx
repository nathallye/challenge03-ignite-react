import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  TagChevron,
  UsersThree,
} from "phosphor-react";
import { PostInfoContainer, PostInfoContent, PostInfoTitle } from "./styles";

export const PostInfo = () => {
  return (
    <PostInfoContainer>
      <PostInfoTitle>
        <header>
          <div>
            <a href="">
              <TagChevron size={14} color="#3294F8" />
              <span>VOLTAR</span>
            </a>
            <a href="https://github.com/nathallye">
              <span>GITHUB</span>
              <ArrowSquareUpRight size={14} color="#3294F8" />
            </a>
          </div>
          <h1>JavaScript data types and data structures</h1>
        </header>
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
      </PostInfoTitle>
      <PostInfoContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </PostInfoContent>
    </PostInfoContainer>
  );
};
