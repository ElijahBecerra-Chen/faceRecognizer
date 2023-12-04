import "./App.css";
import ParticlesBg from "particles-bg";
import Logo from "../components/Logo/Logo";
import Navigation from "../components/Navigation/Navigation";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
      <ParticlesBg type="cobweb" bg={true} />
    </>
  );
}

export default App;
