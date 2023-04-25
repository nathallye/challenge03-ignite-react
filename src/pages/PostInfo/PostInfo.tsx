import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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
  const {post, fetchPost} = useContext(PostsContext);

  const { issueNumber } = useParams();
  
  useEffect(() => {
    fetchUser();
    fetchPost(issueNumber);
  }, []); // como não foi informado uma DependencyList, esse useEffect será executado apenas uma única vez
  
  // const convertionDate = dateFormatter(new Date(post?.created_at));

  console.log(post);

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
          <h1>{post?.title}</h1>
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
            {post?.comments} comentários
          </span>
        </footer>
      </PostInfoTitle>
      <PostInfoContent>
        <code>
          {post?.body}
        </code>
      </PostInfoContent>
    </PostInfoContainer>
  );
};
