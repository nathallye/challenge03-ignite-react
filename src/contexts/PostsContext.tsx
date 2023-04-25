import { ReactNode, createContext, useState } from "react";

import { api } from "../lib/axios";

interface Post {
  number: string;
  title: string;
  url: string;
  comments: number;
  body: string;
  created_at: string;
}

interface PostsContextType {
  posts: Post[];
  post: Post | undefined;
  fetchPosts: (query?: string) => Promise<void>;
  fetchPost: (issueNumber?: string) => Promise<void>;
}

interface PostsProvideType {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostsContextType);

export const PostsProvider = ({ children }: PostsProvideType) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post>();

  const fetchPosts = async (query?: string) => {
    const response = await api.get("/search/issues", {
      params: {
        q: query
      },
      paramsSerializer: {
        encode: params => params
      }
    });

    setPosts(response.data.items);
  };

  const fetchPost = async (issueNumber?: string) => {
    const response = await api.get(`/repos/nathallye/challenge03-ignite/issues/${issueNumber}`, {
      paramsSerializer: {
        encode: params => params
      }
    });

    setPost(response.data);
  };

  return (
    <PostsContext.Provider value={{ posts, post, fetchPosts, fetchPost }}>
      {children}
    </PostsContext.Provider>
  )
}
