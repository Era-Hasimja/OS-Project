import { Home, Login } from "./pages";
import { useState } from "react";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <div className="bg-gradient-to-b from-primary to-secondary  h-screen">
      {isAuthenticated ? (
        <Home onLogut={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
