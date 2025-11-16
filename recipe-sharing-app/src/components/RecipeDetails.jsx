import useRecipeStore from '../stores/recipeStore';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div style={{ 
      border: '2px solid #4CAF50', 
      padding: '20px', 
      margin: '20px 0',
      borderRadius: '8px'
    }}>
      <h1>{recipe.title}</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetails;