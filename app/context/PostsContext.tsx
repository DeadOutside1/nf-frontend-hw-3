// app/context/PostsContext.tsx
'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchPosts } from '../api';
import { Post } from '../types';

interface PostsContextProps {
  posts: Post[];
}

export const PostsContext = createContext<PostsContextProps | undefined>(undefined);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data.posts);
    };

    getPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>
      {children}
    </PostsContext.Provider>
  );
};
