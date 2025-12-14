// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    setUserData(null);
    if (!username.trim()) return;

    setLoading(true);
    try {
      const user = await fetchUserData(username.trim());
      setUserData(user);
    } catch (err) {
      // Conditional rendering requirement: "Looks like we cant find the user"
      setError(err.message === 'User not found' ? 'Looks like we cant find the user' : 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div className="user-profile">
          <img 
            src={userData.avatar_url} 
            alt={`${userData.login}'s avatar`} 
            style={{ width: '100px', borderRadius: '50%' }}
          />
          <h2>{userData.name || userData.login}</h2>
          <p>Username: {userData.login}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;