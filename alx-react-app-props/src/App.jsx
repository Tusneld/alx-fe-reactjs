import ProfilePage from './components/ProfilePage';
import UserContext from './context/UserContext';
import './App.css'

function App() {
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <h1 style={{ textAlign: 'center' }}>User Profile with Context API</h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;