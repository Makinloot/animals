import { Route, Routes } from "react-router-dom";
import { useAppContext } from "./context/ContextProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Results from "./pages/Results";

function App() {
  const { darkMode } = useAppContext();

  return (
    <div
      className="app font-helvetica"
      data-theme={darkMode ? "dracula" : "customLight"}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
