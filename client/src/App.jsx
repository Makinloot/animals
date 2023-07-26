import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Row from "./components/row/Row";
import { useAppContext } from "./context/ContextProvider";

function App() {
  const { darkMode } = useAppContext();

  return (
    <div className="app" data-theme={darkMode ? "dracula" : "light"}>
      <Header />
      <Hero />
      <Row />
      <Footer />
    </div>
  );
}

export default App;
