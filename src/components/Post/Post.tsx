import { useNavigate } from "react-router-dom";

import { dateFormatter } from "../../utils/formatterDate";

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
  const convertionDate = dateFormatter(new Date(post.created_at));
  const navigate = useNavigate();

  return (
    <PostContainer onClick={() => {
      navigate(`/PostInfo/${post.id}`);
    }}>
      <div>
        <h1>{post.title}</h1>
        <span>
          {convertionDate}
        </span>
      </div>
      <p>
        {post.body}
      </p>
    </PostContainer>
  );
};
