import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";

import { BlogContainer, PostsContainer } from "./styles";

export const Blog = () => {
  return (
    <div>
      <Header />
      <Profile />

      <BlogContainer>
        <SearchForm />

        <PostsContainer>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </PostsContainer>
      </BlogContainer>
    </div>
  );
};
