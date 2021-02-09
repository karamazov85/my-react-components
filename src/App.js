import "./App.css"
import Accordion from "./accordion/Accordion"
import Carousel from "./carousel/Carousel"

function App() {
  return (
     <>
      <section className="light-pink-gradient">
        <Accordion />
      </section>
      <section>
        <h1 className="carousel__title">Sample Carousel</h1>
        <Carousel />
      </section>
    </>
  );
}

export default App;
