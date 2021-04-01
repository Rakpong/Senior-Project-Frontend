import React from "react";
import "./App.css";

const GradFile = (props) => {

  const gradSubmission = () => {
    // var objectURL = null;
    fetch("http://127.0.0.1:5000/grad", {
    method: "GET"
    })
    .then((response) => response.json())
    .then((body)=>{
        var url =  "http://127.0.0.1:5000/" + body.file ;
        console.log(body);
        props.gradimage(url);
      })
    
    
    // .then(function(myBlob){
      // var objectURL = URL.createObjectURL(myBlob);
    
    // })
    // .then(); 
    // console.log(response)
        // response.blob().then(function(myBlob) {
            
        //     props.gradimage(objectURL);
        //   }); 
 
  };

  return (
    <div>
      <button onClick={gradSubmission}>See Gradcam Image</button>
    </div>
  );
};

export default GradFile;