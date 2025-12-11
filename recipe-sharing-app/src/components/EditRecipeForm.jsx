// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe, onSave }) => {
  // Select the updateRecipe action
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  
  // Initialize state with the current recipe data
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  // Update local state if the recipe prop changes
  useEffect(() => {
    setTitle(recipe.title);
    setDescription(recipe.description);
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Create the updated recipe object
    const updatedRecipe = {
      ...recipe,
      title,
      description,
    };
    
    // Call the Zustand action to update the state
    updateRecipe(updatedRecipe);
    
    // Optional: Call a function passed from the parent (e.g., to close the form)
    if (onSave) {
      onSave();
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px dashed orange', padding: '15px', margin: '15px 0' }}>
      <h4>Edit Recipe</h4>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="New Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;