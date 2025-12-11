// src/components/RecipeDetails.jsx
import useRecipeStore from '../stores/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
// import EditRecipeForm from './EditRecipeForm'; // Will be used here

// Assumes recipeId is passed via props or route parameters
const RecipeDetails = ({ recipeId }) => {
  // Select the specific recipe
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === Number(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <h1>{recipe.title}</h1>
      <p>ID: {recipe.id}</p>
      <p>{recipe.description}</p>
      <DeleteRecipeButton recipeId={recipe.id} />
      {/* <EditRecipeForm recipe={recipe} /> */}
      {/* Implement navigation back to list */}
    </div>
  );
};
export default RecipeDetails;