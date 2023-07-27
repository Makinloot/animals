import Hero from "../components/hero/Hero";
// import Row from "../components/row/Row";
import { categories } from "../../testData";

export default function Home() {
  const handleList = () => {
    return categories.map((item) => (
      <a href="#" key={item.id} className="text-center">
        <div className="btn btn-circle relative h-[180px] w-[180px] border-none bg-neutral text-neutral-content hover:bg-neutral-focus hover:text-info">
          <img
            src={item.img}
            alt={item.name}
            className="absolute h-1/2 w-1/2 rounded-xl object-cover"
          />
        </div>
        <h4 className="mt-2 font-helveticaCaps">{item.name}</h4>
      </a>
    ));
  };

  return (
    <div>
      <Hero />
      {/* <Row /> */}
      <div className="Categories-row my-8 py-16">
        <div className="container">
          <div className="Categories-row-container flex items-center justify-between">
            {handleList()}
          </div>
        </div>
      </div>
    </div>
  );
}
