import React, { useState } from "react";
import "./App.css";

const FileUpload = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  // const [IsSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    props.video(selectedFile);
    console.log(formData);
    fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log("Success:");
        // var url =  "http://127.0.0.1:5000/" + result.gradcam ;
        // console.log(result.gradcam);
        props.data(result.time,result.gradcam,result.result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  

  // const ValueCheck = () => {
  //   console.log(Result,Gradcam)
  // };
  return (
    <div className="submit">
      <input type="file" name="file" onChange={changeHandler} />
      {/* {IsSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )} */}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
      
    </div>
  );
};

export default FileUpload;
