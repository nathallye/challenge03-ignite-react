import { useNavigate } from "react-router-dom";

import { dateFormatter } from "../../utils/dateFormatter";

import { PostType } from "../../types/post";
import { PostContainer } from "./styles";

interface PostProps {
  post: PostType;
};


export const Post = ({post}: PostProps) => {
  const navigate = useNavigate();

  return (
    <PostContainer onClick={() => {
      navigate(`/PostInfo/${post.number}`);
    }}>
      <div>
        <h1>{post.title}</h1>
        <span>
          {dateFormatter(post.updated_at)}
        </span>
      </div>
      <p>
        {post.body}
      </p>
    </PostContainer>
  );
};
