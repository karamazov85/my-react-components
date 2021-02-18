import "./App.css"
import Accordion from "./accordion/Accordion"
import Carousel from "./carousel/Carousel"
import Tabs from "./tabs/Tabs"

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
      <section>
        <h1 className="carousel__title">Sample Info Box With Tabs</h1>
        <Tabs />
      </section>
    </>
  );
}

export default App;
