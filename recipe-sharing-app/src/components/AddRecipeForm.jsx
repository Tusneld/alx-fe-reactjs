// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import useRecipeStore from '../stores/recipeStore';

const AddRecipeForm = () => {
    // Select only the 'addRecipe' action from the store
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!title.trim() || !description.trim()) return; // Prevent adding empty recipes
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    };

    return (
      <form onSubmit={handleSubmit} style={{ margin: '20px 0', padding: '10px', border: '1px solid #eee' }}>
        <h2>Add New Recipe</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">Add Recipe</button>
      </form>
    );
  };

export default AddRecipeForm;