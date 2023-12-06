import "./App.css";
import ParticlesBg from "particles-bg";
import Logo from "../components/Logo/Logo";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
import Navigation from "../components/Navigation/Navigation";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import { useState } from "react";

const returnClarifaiRequest = (imageUrl) => {
  const PAT = "8aee1898170946d1808cfe272d201cba";
  const USER_ID = "jinenbecerra";
  const APP_ID = "my-first-app";
  // const MODEL_ID = "face-detection";
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return requestOptions;
};

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onButtonSubmit = () => {
    setImageUrl(input);
    fetch(
      "https://api.clarifai.com/v2/models/face-detection/outputs",
      returnClarifaiRequest(input)
    )
      .then((response) => response.json())
      .then((data) =>
        console.log(data.outputs[0].data.regions[0].region_info.bounding_box)
      )
      .catch((error) => console.log("error", error));
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
