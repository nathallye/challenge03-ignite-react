import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import {
  ArrowSquareUpRight,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";

import { UserContext } from "../../contexts/UserContext";
import { PostsContext } from "../../contexts/PostsContext";

import { dateFormatter } from "../../utils/formatterDate";

import { PostInfoContainer, PostInfoContent, PostInfoTitle } from "./styles";

export const PostInfo = () => {
  const {user, fetchUser} = useContext(UserContext);
  const {posts, fetchPosts} = useContext(PostsContext);

  // TODO: Fazer outra chamada para api de busca do post 
  
  useEffect(() => {
    fetchUser();
  }, []); // como não foi informado uma DependencyList, esse useEffect será executado apenas uma única vez

  // const currentPost = posts.find((post) => {
  //   return post.id == 1679889889;
  // });

  // const convertionDate = dateFormatter(new Date(currentPost?.created_at));

  return (
    <PostInfoContainer>
      <PostInfoTitle>
        <header>
          <Link to="/home">
            <CaretLeft size={14} color="#3294F8" />
            <span>VOLTAR</span>
          </Link>
          <Link to={user?.html_url ?? ""}>
            <span>VER NO GITHUB</span>
            <ArrowSquareUpRight size={14} color="#3294F8" />
          </Link>
        </header>
        <div>
          <h1>JavaScript data types and data structures</h1>
        </div>
        <footer>
          <span>
            <GithubLogo size={18} color="#3A536B" />
            {user?.login}
          </span>
          <span>
            <CalendarBlank size={18} color="#3A536B" />
            {/* {convertionDate} */}
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
          <br /><br />
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
      </PostInfoContent>
    </PostInfoContainer>
  );
};
