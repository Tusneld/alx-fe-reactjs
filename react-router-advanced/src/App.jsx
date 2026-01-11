import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';

// Components for demonstration
const Home = () => <h2>Home Page - Welcome!</h2>;
const ProfileDetails = () => <h3>Detailed User Information</h3>;
const ProfileSettings = () => <h3>User Account Settings</h3>;

// Dynamic Route Component
const BlogPost = () => {
  const { id } = useParams();
  return <h3>Viewing Blog Post ID: {id}</h3>;
};

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#f4f4f4', marginBottom: '20px' }}>
        <Link to="/">Home</Link> | {" "}
        <Link to="/profile">Profile (Protected)</Link> | {" "}
        <Link to="/blog/1">Blog Post 1</Link> | {" "}
        <Link to="/blog/42">Blog Post 42</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Dynamic Routing */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Nested and Protected Routing */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes inside Profile */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;