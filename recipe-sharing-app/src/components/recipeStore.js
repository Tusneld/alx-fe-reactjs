// src/components/recipeStore.js

import create from 'zustand';

// IMPORTANT: We use (set, get) to access the current state within actions like filterRecipes.
const useRecipeStore = create((set, get) => ({
  recipes: [],
  
  // Search term
  searchTerm: '', 
  
  // Filtered results array
  filteredRecipes: [], 

  // --- Task 0 Actions ---
  addRecipe: (newRecipe) => {
    set(state => ({ recipes: [...state.recipes, newRecipe] }));
    get().filterRecipes(); // Re-run filter to include new recipe
  },
  
  setRecipes: (recipes) => {
    set({ recipes: recipes });
    get().filterRecipes(); // Initialize filtered list
  },

  // --- Task 1 Actions ---
  deleteRecipe: (recipeId) => {
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
    }));
    get().filterRecipes(); // Re-run filter after deletion
  },

  updateRecipe: (updatedRecipe) => {
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    }));
    get().filterRecipes(); // Re-run filter after update
  },

  // --- Task 2 Actions ---
  //  Updates the search term and triggers filtering
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); 
  },

  // Computes and sets the filtered recipes
  filterRecipes: () => {
    const state = get();
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    
    // Set the filteredRecipes state
    set({ filteredRecipes: filtered });
  },
  
   
  favorites: [],
  recommendations: [],

}));

export default useRecipeStore;