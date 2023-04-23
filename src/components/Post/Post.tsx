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
  return (
    <PostContainer>
      <div>
        <h1>{post.title}</h1>
        <span>{post.created_at}</span>
      </div>
      <p>
        {post.body}
      </p>
    </PostContainer>
  );
};
