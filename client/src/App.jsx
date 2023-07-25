import Header from "./components/header/Header";
import { useAppContext } from "./context/ContextProvider";

function App() {
  const { darkMode } = useAppContext();

  return (
    <div className="app" data-theme={darkMode ? "aqua" : "autumn"}>
      <Header />
    </div>
  );
}

export default App;
