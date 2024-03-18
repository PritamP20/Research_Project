import React, { useState, useEffect } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import { FaMicrophone, FaStop } from "react-icons/fa";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [blobUrl, setBlobUrl] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);
  const [binaryData,setBinaryData]=useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => {
        console.log('Permission Granted');
        setIsBlocked(false);
      })
      .catch(() => {
        console.log('Permission Denied');
        setIsBlocked(true);
      });
  }, []);

  const startRecording = () => {
    if (isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder.start()
        .then(() => {
          setIsRecording(true);
        })
        .catch((e) => console.error(e));
    }
  };

  const stopRecording = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setBlobUrl(blobURL);
        setIsRecording(false);
      })
      .catch((e) => console.log(e));
  };
  

 const handleForSubmit=()=>{
  if(blobUrl){
    fetch(blobUrl)
    .then(response=>response.arrayBuffer())
    .then(buffer=>{
      const binaryData =new Uint8Array(buffer);
      const base64Data = btoa(String.fromCharCode.apply(null, binaryData));

      console.log("base64 data:",base64Data);
      setBinaryData(binaryData);
    })
    .catch(error=>console.error("error converting audio to binary:",error));
  }else{
    console.error("no recorded audio available");
  }
 };

  return (
    <center>
      <div className="flex gap-4">
        {isRecording ? (
          <button className="h-16 w-16 round-full flex items-center justify-center text-red-800 text-lg border-4 border-red-600" 
            onClick={stopRecording} 
            disabled={!isRecording}>
            <FaStop />
          </button>
        ) : (
          <button className="h-16 w-16 round-full flex items-center justify-center text-gray-800 text-lg border-4 border-gray-400" 
            onClick={startRecording} 
            disabled={isBlocked}>
            <FaMicrophone />
          </button>
        )}
      </div>
      <div></div>
      <audio src={blobUrl} controls="controls"></audio>
      <button onClick={handleForSubmit}>Submit</button>
    </center>
  );
};

export default AudioRecorder;
