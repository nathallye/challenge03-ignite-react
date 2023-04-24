import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { PostContainer } from "./styles";

interface Post {
  id: number;
  title: string;
  url: string;
  comments: number;
  body: string;
  created_at: string;
};

interface PostProps {
  post: Post
};


export const Post = ({post}: PostProps) => {
  const convertionDate = new Date(post.created_at);

  return (
    <PostContainer>
      <div>
        <h1>{post.title}</h1>
        <span>
          {formatDistanceToNow(convertionDate, {
            addSuffix: true,
            locale: ptBR
          })}
        </span>
      </div>
      <p>
        {post.body}
      </p>
    </PostContainer>
  );
};
