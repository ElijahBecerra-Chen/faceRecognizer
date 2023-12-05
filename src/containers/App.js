import "./App.css";
import ParticlesBg from "particles-bg";
import Logo from "../components/Logo/Logo";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
import Navigation from "../components/Navigation/Navigation";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onButtonSubmit = () => {
    setImageUrl(input);
  };
  return (
    <>
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={onInputChange}
          onButtonSubmit={onButtonSubmit}
        />
        <FaceRecognition imageUrl={imageUrl} />
      </div>
      <ParticlesBg type="cobweb" bg={true} />
    </>
  );
}

export default App;
