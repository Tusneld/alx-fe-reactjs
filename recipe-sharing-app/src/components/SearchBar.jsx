// src/components/SearchBar.jsx
import useRecipeStore from '../stores/recipeStore';

const SearchBar = () => {
  // Select only the 'setSearchTerm' action
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const searchTerm = useRecipeStore(state => state.searchTerm); // Optional: to display current term

  return (
    <input
      type="text"
      placeholder="Search recipes by title..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: '8px', width: '300px', margin: '10px 0' }}
    />
  );
};
export default SearchBar;