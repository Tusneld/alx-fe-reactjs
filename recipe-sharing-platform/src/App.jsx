import HomePage from './components/HomePage';
import './index.css'; // Ensure the Tailwind CSS file is imported

function App() {
  return (
    // Add some global background styling
    <div className="min-h-screen bg-gray-50">
      <HomePage />
    </div>
  );
}

export default App;