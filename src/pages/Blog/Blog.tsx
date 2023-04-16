import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";

import { PostsContainer } from "./styles";

export const Blog = () => {
  return (
    <div>
      <Header />
      <Profile />

      <PostsContainer>
        <SearchForm />
      </PostsContainer>
    </div>
  );
};
