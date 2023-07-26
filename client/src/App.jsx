import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import { useAppContext } from "./context/ContextProvider";

function App() {
  const { darkMode } = useAppContext();

  return (
    <div className="app" data-theme={darkMode ? "dracula" : "light"}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
