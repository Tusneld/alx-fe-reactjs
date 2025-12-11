// src/components/RecommendationsList.jsx
import { useEffect } from 'react';
import useRecipeStore from '../stores/recipeStore';

const RecommendationsList = () => {
  // Select state and action
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    // Initialize recommendations when component mounts
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div style={{ margin: '20px 0', border: '1px solid #28a745', padding: '15px' }}>
      <h2>✨ Recommended For You</h2>
      {recommendations.length === 0 ? (
        <p>Add some recipes to your favorites to get recommendations!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h4>{recipe.title}</h4>
          </div>
        ))
      )}
    </div>
  );
};
export default RecommendationsList;