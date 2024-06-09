'use client';

import React, { useContext } from 'react';
import { PostsContext } from '../context/PostsContext';
import Link from 'next/link';

const PostsList = () => {
  const context = useContext(PostsContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { posts } = context;

  return (
    <div className="container mx-auto p-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-4">{post.body.substring(0, 100)}...</p>
          <Link href={`/posts/${post.id}`}>
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Read more</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
