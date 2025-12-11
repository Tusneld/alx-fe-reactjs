// src/components/DeleteRecipeButton.jsx
import useRecipeStore from '../stores/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      // Optional: Navigate away after deletion (e.g., to home page)
      // For simplicity, we just delete and let the list update
    }
  };

  return (
    <button onClick={handleDelete} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
      Delete
    </button>
  );
};
export default DeleteRecipeButton;