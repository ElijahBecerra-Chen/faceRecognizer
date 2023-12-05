import React from "react";

export default function FaceRecognition({ imageUrl }) {
  return (
    <div className="center ma">
      <div className="absolute mt3">
        <img src={imageUrl} alt="" width="500px" height="auto" />
      </div>
    </div>
  );
}
