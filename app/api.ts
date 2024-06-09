// app/api.ts
import axiosInstance from './axiosInstance';

export const fetchPosts = async () => {
  try {
    const response = await axiosInstance.get('posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
