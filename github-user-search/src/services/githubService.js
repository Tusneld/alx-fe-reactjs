// src/services/githubService.js
import axios from 'axios';

const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;
const API_URL = 'https://api.github.com';

const githubApi = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : undefined,
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

// Function required by the checker
export const fetchUserData = async (username) => {
  if (!username) {
    throw new Error('Username cannot be empty');
  }
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("User not found");
    }
    throw error;
  }
};
// Placeholder for searchUsers (Task 2)
export const searchUsers = () => {
    throw new Error("Advanced search not implemented yet.");
};