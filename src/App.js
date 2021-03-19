import React, { useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import FileUpload from "./FileUpload";
import GradFile from "./gradfile";
// import { Base64 } from "js-base64";
// import ImgToBase64 from "react-native-image-base64";

function App() {
  const [Time, setTime] = useState([]);
  const [Gradcam, setGradcam] = useState([]);
  const [videoFile, setvideoFile] = useState(null);
  // const fs = require("fs");
  // const stream = require("stream");
  // const base64 = require("base64");

  const GetVideo = (video) => {
    setvideoFile(URL.createObjectURL(video));
  };

  const GetgradFile = (file) => {
    // var path = URL.createObjectURL(file)
    setGradcam(file);
    console.log(file);
  };

  const GetData = (time, gradcam) => {
    console.log("data is recieve");
    var Tstr = time.slice(1, time.length - 1);
    var Tarr = Tstr.split(",");
    var GradPath = `data:image/jpg;base64,${gradcam}`;
    setTime(Tarr);
    // setGradcam(gradcam);
    // ImgToBase64.getBase64String({ uri: `data:image/gif;base64,${gradcam}` })
    //   .then((base64String) => {
    //     console.log(base64String)
    //   })
    // setGradcam(({ gradcam }) => <img src={`data:image/jpg;base64,${gradcam}`} />)
  };
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h3>Automatic Fire Detection</h3>
        </header>

        <table className="App-table">
          <tr>
            <td width="50%">
              <p>WildfireSmoke Video</p>
            </td>
            <td width="50%">
              <p>Summary</p>
            </td>
          </tr>
          <tr>
            <td>
              <div className="video">
                <ReactPlayer
                  url={videoFile}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </div>
              <FileUpload data={GetData} video={GetVideo} />
            </td>
            {/* </div> */}
            {/* <div class="table-wrap"> */}
            <div class="table-wrap">
              <td>
                {Time[0] == "None" ? (
                  <p>NO WILDFIRESMOKE DETECTED</p>
                ) : (
                  Time.map((item) => (
                    <p key={item}>WILDFIRESMOKE DETECTED AT {item} S</p>
                  ))
                )}
              </td>
            </div>
          </tr>
          {/* <gradFile gradimage = {GetgradFile} /> */}
          <GradFile gradimage={GetgradFile} />
          <img src={Gradcam} width="500px" height="500px" />
        </table>
      </div>
    </div>
  );
}

export default App;
