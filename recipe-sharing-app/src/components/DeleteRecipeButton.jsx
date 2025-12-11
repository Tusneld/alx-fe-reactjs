// src/components/DeleteRecipeButton.jsx
import useRecipeStore from '../stores/recipeStore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize the hook

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      // Redirect the user after successful deletion
      // Navigate to the main list (root path)
      navigate('/');
      
    }
  };

  return (
    <button onClick={handleDelete} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>
      Delete
    </button>
  );
};
export default DeleteRecipeButton;