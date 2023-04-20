import {
  ArrowSquareUpRight,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";
import { PostInfoContainer, PostInfoContent, PostInfoTitle } from "./styles";

export const PostInfo = () => {
  return (
    <PostInfoContainer>
      <PostInfoTitle>
        <header>
          <a href="/home">
            <CaretLeft size={14} color="#3294F8" />
            <span>VOLTAR</span>
          </a>
          <a href="https://github.com/nathallye">
            <span>VER NO GITHUB</span>
            <ArrowSquareUpRight size={14} color="#3294F8" />
          </a>
        </header>
        <body>
          <h1>JavaScript data types and data structures</h1>
        </body>
        <footer>
          <span>
            <GithubLogo size={18} color="#3A536B" />
            nathallye
          </span>
          <span>
            <CalendarBlank size={18} color="#3A536B" />
            Há 1 dia
          </span>
          <span>
            <ChatCircle size={18} color="#3A536B" />
            5 comentários
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
          drawn.
        </p>
        <br />
        <p>
          <u>Dynamic typing</u>
          <br />
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
      </PostInfoContent>
    </PostInfoContainer>
  );
};
