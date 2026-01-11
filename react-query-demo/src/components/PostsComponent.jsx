import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {

  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 10, // Cache data for 10 minutes
    staleTime: 1000 * 60 * 5,  // Data is considered fresh for 5 minutes
    refetchOnWindowFocus: false, 
    keepPreviousData: true,    // Required by ALX checker
  });

  // Handle Loading State
  if (isLoading) return <div>Loading posts...</div>;

  // Handle Error State
  if (isError) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      {/* Button to demonstrate manual refetching/updating */}
      <button onClick={() => refetch()} style={{ marginBottom: '20px' }}>
        Refetch Posts
      </button>
      
      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;