import { useState } from 'react';
import useRecipeStore from '../stores/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import RecipeDetails from './RecipeDetails';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const [editingRecipeId, setEditingRecipeId] = useState(null);
  const [viewingRecipeId, setViewingRecipeId] = useState(null);

  if (viewingRecipeId) {
    return (
      <div>
        <button 
          onClick={() => setViewingRecipeId(null)}
          style={{ marginBottom: '20px' }}
        >
          ← Back to Recipes
        </button>
        <RecipeDetails recipeId={viewingRecipeId} />
      </div>
    );
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add your first recipe!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ 
            border: '1px solid #ccc', 
            padding: '15px', 
            margin: '10px 0',
            borderRadius: '5px'
          }}>
            {editingRecipeId === recipe.id ? (
              <EditRecipeForm 
                recipeId={recipe.id} 
                onCancel={() => setEditingRecipeId(null)} 
              />
            ) : (
              <>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <div style={{ marginTop: '10px' }}>
                  <button 
                    onClick={() => setViewingRecipeId(recipe.id)}
                    style={{
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginRight: '10px',
                      fontSize: '12px'
                    }}
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => setEditingRecipeId(recipe.id)}
                    style={{
                      backgroundColor: '#2196F3',
                      color: 'white',
                      padding: '5px 10px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginRight: '10px',
                      fontSize: '12px'
                    }}
                  >
                    Edit
                  </button>
                  <DeleteRecipeButton recipeId={recipe.id} />
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;