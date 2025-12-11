// src/stores/recipeStore.js (Further Updated)
import create from 'zustand';

const useRecipeStore = create((set, get) => ({ // Use 'get' for filterRecipes
  recipes: [],
  searchTerm: '',

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Immediately compute filtered results
  },

  // Action to compute filtered recipes based on the current searchTerm
  filterRecipes: () => {
    const state = get();
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  // Initialize filteredRecipes to recipes whenever recipes update
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes(); // Re-filter whenever the main list changes
  },
  
  // ... (addRecipe, deleteRecipe, updateRecipe remain the same, but should call get().filterRecipes() if needed)
  
  filteredRecipes: [], // New state property for filtered results
}));

export default useRecipeStore;