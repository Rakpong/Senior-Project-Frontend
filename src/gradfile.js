import React from "react";
import "./App.css";

const GradFile = (props) => {
  const gradSubmission = () => {
    fetch("http://127.0.0.1:5000/grad", {
    method: "GET",
    })
    // .then((res) => res.json())
    .then((response) => {
        console.log(response.type)
        response.blob().then(function(myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            props.gradimage(objectURL);
          }); 
    });
  };

  return (
    <div>
      <button onClick={gradSubmission}>See Gradcam Image</button>
    </div>
  );
};

export default GradFile;