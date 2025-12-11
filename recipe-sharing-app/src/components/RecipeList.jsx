// src/components/RecipeList.jsx 
import useRecipeStore from '../stores/recipeStore';
import { Link } from 'react-router-dom'; // Import Link

const RecipeList = () => {
    // Select the filtered recipes state
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    // If filteredRecipes is empty, we should display the full list if no search is active.
    // However, based on the store logic, filteredRecipes should be calculated correctly.
    return (
      <div>
        <h2>Recipe List</h2>
        {filteredRecipes.length === 0 ? <p>No recipes found matching the search criteria.</p> : null}
        {filteredRecipes.map(recipe => (
          // Add Link to RecipeDetails here
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px 0' }}>
            <Link 
              to={`/recipes/${recipe.id}`} // Links to the detail route defined in App.jsx
              style={{ textDecoration: 'none', color: 'black' }} // Styling to make it look less like a standard link
            >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  };
export default RecipeList;