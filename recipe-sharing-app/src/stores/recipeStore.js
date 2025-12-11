// src/stores/recipeStore.js 
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '', // Prepare for Task 2

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  // Action to delete a recipe
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  setRecipes: (recipes) => set({ recipes }),
  // ... other state/actions for tasks 2 & 3
}));

export default useRecipeStore;