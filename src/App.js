import "./App.css"
import Accordion from "./accordion/Accordion"
import Carousel from "./carousel/Carousel"
import Tabs from "./tabs/Tabs"
import TabsWithHover from "./tabs/TabsWithHover"
import NavBar from "./navbar/NavBar"
import GoogleMap from "./map/GoogleMap"
import { Wrapper, Status } from '@googlemaps/react-wrapper'

// prop for Google Maps component
const render = (status) => {
  return (<h1>{status}</h1>);
};


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
      <section>
        <h1 className="carousel__title">Hover Navbar With Nested Menu</h1>
        <NavBar />
      </section>
      <section>
        <h1 className="carousel__title">Google Maps Address Checker</h1>
        <Wrapper apiKey="AIzaSyAdp0_ztYy_GK3Nk0wspYdWiFSBau_-G44" render={render}>
             <GoogleMap />
        </Wrapper>
      </section>


      
      <section> 
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
}

export default App;
