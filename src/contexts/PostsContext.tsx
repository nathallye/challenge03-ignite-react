import { ReactNode, createContext, useState } from "react";

import { api } from "../lib/axios";

interface Post {
  id: number;
  title: string;
  url: string;
  comments: number;
  body: string;
  created_at: string;
}

interface PostsContextType {
  posts: Post[];
  fetchPosts: (query?: string) => Promise<void>;
}

interface PostsProvideType {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostsContextType);

export const PostsProvider = ({ children }: PostsProvideType) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async (query?: string) => {
    const response = await api.get("/search/issues", {
      params: {
        q: query
      },
    });

    setPosts(response.data.items);
  };

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
