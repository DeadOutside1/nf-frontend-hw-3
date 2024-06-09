// app/page.tsx
'use client';

import React from 'react';
import { PostsProvider } from './context/PostsContext';
import PostsList from './components/PostsList';

const HomePage = () => {
  return (
    <PostsProvider>
      <div>
        <h1 className="text-4xl font-bold text-center my-8">Hello, world!</h1>
        <PostsList />
      </div>
    </PostsProvider>
  );
};

export default HomePage;
