// src/stores/recipeStore.js or similar
import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  // Action to set the entire recipes array (useful for initialization/fetching)
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;