import { Home, Login } from "./pages";
import { useState } from "react";
import { Icon } from "@components/shared/Icon/Icon";
import { useUIContext } from "contexts/UIContext/UIContext";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  const { darkMode } = useUIContext();
  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="bg-gradient-to-b  h-screen from-primary dark:from-slate-500 to-secondary dark:to-slate-800 ">
        {isAuthenticated ? (
          <Home onLogut={handleLogout} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center absolute bottom-2 left-5">
          <button onClick={handleLogout}>
            <Icon className="w-4" icon="power-off" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
