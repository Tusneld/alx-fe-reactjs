// src/App.jsx (with minimal routing setup)
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px' }}>
        <header>
          <h1><Link to="/">Recipe Sharing App</Link></h1>
        </header>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
            </>
          } />
          {/* Note: In a real app, you'd use useParams() inside RecipeDetails */}
          <Route path="/recipes/:recipeId" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// Helper component to pass the route param as prop for simplicity
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { recipeId } = useParams();
  return <RecipeDetails recipeId={recipeId} />;
};

export default App;