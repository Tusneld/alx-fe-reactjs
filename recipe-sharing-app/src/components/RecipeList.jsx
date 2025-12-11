// src/components/RecipeList.jsx 
import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
    // Select the filtered recipes state
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

    return (
      <div>
        <h2>Recipe List</h2>
        {filteredRecipes.length === 0 ? <p>No recipes found matching the search criteria.</p> : null}
        {filteredRecipes.map(recipe => (
          // Add Link to RecipeDetails here
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px 0' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };
export default RecipeList;