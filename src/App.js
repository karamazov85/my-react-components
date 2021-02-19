import "./App.css"
import Accordion from "./accordion/Accordion"
import Carousel from "./carousel/Carousel"
import Tabs from "./tabs/Tabs"
import TabsWithHover from "./tabs/TabsWithHover"

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
      <section>
        <h1 className="carousel__title">Sample Info Box With Hover Tabs</h1>
        <TabsWithHover />
      </section>
    </>
  );
}

export default App;
