import { ReactNode, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import {
  ArrowSquareUpRight,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";

import { UserContext } from "../../contexts/UserContext";
import { PostsContext } from "../../contexts/PostsContext";

import { dateFormatter } from "../../utils/dateFormatter";

import { PostInfoContainer, PostInfoContent, PostInfoTitle } from "./styles";

export const PostInfo = () => {
  const {user, fetchUser} = useContext(UserContext);
  const {post, fetchPost} = useContext(PostsContext);

  const { issueNumber } = useParams();
  const body = post ? post.body : "";

  useEffect(() => {
    fetchUser();
    fetchPost(issueNumber);
  }, []); // como não foi informado uma DependencyList, esse useEffect será executado apenas uma única vez

  return (
    <PostInfoContainer>
      <PostInfoTitle>
        <header>
          <Link to="/home">
            <CaretLeft size={14} color="#3294F8" />
            <span>VOLTAR</span>
          </Link>
          <Link to={post?.html_url ?? ""}>
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
            {dateFormatter(post?.updated_at)}
          </span>
          <span>
            <ChatCircle size={18} color="#3A536B" />
            {post?.comments} comentários
          </span>
        </footer>
      </PostInfoTitle>
      <PostInfoContent>
        <ReactMarkdown
          children={body!}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  style={dracula as any}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            }
          }}
        />
      </PostInfoContent>
    </PostInfoContainer>
  );
};
