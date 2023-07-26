import { useAppContext } from "./context/ContextProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { darkMode } = useAppContext();

  return (
    <div
      className="app font-roboto"
      data-theme={darkMode ? "dracula" : "light"}
    >
      {/* <Home /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
