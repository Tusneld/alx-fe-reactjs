import React, { useState, useEffect } from 'react';
// Import the mock data
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Discover Delicious Recipes
      </h1>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          // Recipe Card
          <div 
            key={recipe.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] cursor-pointer border border-gray-100"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {recipe.summary}
              </p>
              {/* Link placeholder - will be implemented in Task 2 */}
              <button 
                className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-150"
                onClick={() => alert(`View ${recipe.title}`)}
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;