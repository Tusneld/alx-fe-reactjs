// src/stores/recipeStore.js (Final Update for this project)
import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [], // New state for favorite IDs
  recommendations: [], // New state for recommendations

  addRecipe: (newRecipe) => {
    set(state => ({ recipes: [...state.recipes, newRecipe] }));
    get().filterRecipes();
    get().generateRecommendations(); // Recalculate if a new recipe might be a recommendation
  },
  // ... (other recipe CRUD actions)

  // Favorites Actions
  addFavorite: (recipeId) => {
    set(state => ({ favorites: [...state.favorites, recipeId] }));
    get().generateRecommendations(); // Recalculate recommendations when favorites change
  },
  removeFavorite: (recipeId) => {
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    }));
    get().generateRecommendations(); // Recalculate recommendations when favorites change
  },

  // Recommendations Action
  generateRecommendations: () => set(state => {
    // Simple Mock Recommendation Logic: Recommend a random subset of recipes
    // that are NOT in the favorites list.
    const nonFavorites = state.recipes.filter(
      recipe => !state.favorites.includes(recipe.id)
    );

    // Pick a small, random set (e.g., up to 3)
    const recommended = nonFavorites
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
      
    return { recommendations: recommended };
  }),

  // ... (setSearchTerm, filterRecipes, etc. from Task 2)
}));
export default useRecipeStore;