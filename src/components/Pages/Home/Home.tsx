import { useContext, useEffect } from "react";
import { Profile } from "../../Profile";
import { SearchForm } from "../../SearchForm";
import { Post } from "../../Post";

import { PostsContext } from "../../../contexts/PostsContext";

import { BlogContainer, PostsContainer } from "./styles";

export const Home = () => {
  const { posts, fetchPosts } = useContext(PostsContext);

  useEffect(() => {
    fetchPosts("repo:nathallye/challenge03-ignite is:issue");
  }, []); // como não foi informado uma DependencyList, esse useEffect será executado apenas uma única vez

  return (
    <div>
      <Profile />

      <BlogContainer>
        <SearchForm />

        <PostsContainer>
          {posts.map((post) => {
            return (
              <Post key={post.number} post={post}/>
            )
          })}
        </PostsContainer>
      </BlogContainer>
    </div>
  );
};
