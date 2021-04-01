import React, { useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import FileUpload from "./FileUpload";
// import GradFile from "./gradfile";
// import { Base64 } from "js-base64";
// import ImgToBase64 from "react-native-image-base64";

function App() {
  const [Time, setTime] = useState([]);
  const [Gradcam, setGradcam] = useState([]);
  const [videoFile, setvideoFile] = useState(null);
  const [Result, setResult] = useState([]);

  const GetVideo = (video) => {
    setvideoFile(URL.createObjectURL(video));
  };

  const GetData = (time, gradcam, result) => {
    console.log("data is recieve");
    // var Tstr = time.slice(1, time.length - 1);
    // var Rstr = result.slice(1, result.length - 1);
    var Tarr = time.toString().split(",");
    var Rarr = result.toString().split(",");
    setTime(Tarr);
    setGradcam(gradcam);
    setResult(Rarr);
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
                  width="600px"
                  height="500px"
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
                  <p>NO WILDFIRESMOKE DETECTED </p>
                ) : (
                  Time.map((x, item) => (
                    <p key={(x, item)}>
                      {" "}
                      MODEL PREDICT {Result[item]} AT {x}  S
                    </p>
                  ))
                )}
              </td>
            </div>
          </tr>
          {/* <gradFile gradimage = {GetgradFile} /> */}
          {/* <GradFile gradimage={GetgradFile} /> */}
        </table>
        <div
          style={{
            marginLeft: "100px",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <img
            src={`data:image/png;base64,${Gradcam}`}
            alt="img"
            width="1000px"
            height="500px"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
