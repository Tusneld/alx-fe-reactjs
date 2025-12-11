// src/components/FavoritesList.jsx
import useRecipeStore from '../stores/recipeStore';

const FavoritesList = () => {
  // Map favorite IDs to actual recipe objects
  const favoriteRecipes = useRecipeStore(state =>
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  ).filter(Boolean); // Filter out any undefined recipes

  return (
    <div style={{ margin: '20px 0', border: '1px solid #007bff', padding: '15px' }}>
      <h2>⭐️ My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>You have no favorite recipes yet.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id}>
            <h4>{recipe.title}</h4>
          </div>
        ))
      )}
    </div>
  );
};
export default FavoritesList;