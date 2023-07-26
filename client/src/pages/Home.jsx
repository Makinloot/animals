import Hero from "../components/hero/Hero";
import Row from "../components/row/Row";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { FaCat } from "react-icons/fa";

export default function Home() {
  const handleList = () => {
    const data = Array.from({ length: 6 });
    return data.map((item, i) => (
      <a href="#" key={i} className="text-center">
        <div className="btn btn-circle h-[180px] w-[180px] border-none bg-neutral text-neutral-content hover:text-info">
          <FaCat size={50} />
        </div>
        <h4 className="mt-2 font-helveticaCaps">ცხოველები</h4>
      </a>
    ));
  };
  return (
    <div>
      <Header />
      <Hero />
      <Row />
      <div className="Categories-row my-8 py-16">
        <div className="container">
          <div className="Categories-row-container flex items-center justify-between">
            {handleList()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
