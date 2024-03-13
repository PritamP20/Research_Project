import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import AudioTimer from './AudioTimer';

const AudioRecorder = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [voice, setVoice] = useState(false);
  const [recordBlobLink, setRecordBlobLink] = useState(null);

  const onStop = (recordedBlob) => {
    setRecordBlobLink(recordedBlob.blobURL);
    setIsRunning(false);
  };

  const startHandle = () => {
    setElapsedTime(0);
    setIsRunning(true);
    setVoice(true);
  };

  const stopHandle = () => {
    setIsRunning(false);
    setVoice(false);
  };

  const clearHandle = () => {
    setIsRunning(false);
    setVoice(false);
    setRecordBlobLink(null);
    setElapsedTime(0);
  };

  const submitHandle = async () => {
    if (recordBlobLink) {
      try {
        // Replace 'YOUR_GOOGLE_SHEET_ID' with the actual ID of your Google Sheet
        const sheetId = 'AKfycbzhiJIQWFIzMebM97nXxbntvoLp1J2WFZHeRqrMTXMPbQBF9JEvK1FnfpYStRToy-3l'
        ;



        

        // Create a new row data
        const rowData = {
          Timestamp: new Date().toLocaleString(),
          'Voice Link': recordBlobLink,
        };

        // Use fetch or your preferred HTTP library to make a POST request to your server
        const response = await fetch('https://script.google.com/macros/s/AKfycbzhiJIQWFIzMebM97nXxbntvoLp1J2WFZHeRqrMTXMPbQBF9JEvK1FnfpYStRToy-3l/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sheetId,
            rowData,
          }),
        });

        if (response.ok) {
          console.log('Recording submitted successfully.');
          
          clearHandle();
        } else {
          console.error('Failed to submit recording:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting recording:', error);
      }
    }
  };

  return (
    <div>
      <center>
        <div className="max-w-sm border py-4 px-6 mx-auto bg-black">
          <h2 className="text-[22px] font-semibold">Audio Recorder</h2>
          <AudioTimer isRunning={isRunning} elapsedTime={elapsedTime} setElapsedTime={setElapsedTime} />

          <ReactMic record={voice} className="sound-wave w-full" onStop={onStop} strokeColor="#000000" />

        </div>

        <div className="">
          {recordBlobLink ? <button onClick={clearHandle} className="text-[#fff] font-medium text-[16px]">Clear</button> : ''}
        </div>
        <div className="mt-2">
          {!voice ? (
            <button onClick={startHandle} className="bg-[#fff] text-[#111] rounded-md py-1 px-3 font-semibold text-[16px]">
              Start
            </button>
          ) : (
            <button onClick={stopHandle} className="bg-[#fff] text-[#111] rounded-md py-1 px-3 font-semibold text-[16px]">
              Stop
            </button>
          )}
        </div>
        <div className="">
          {recordBlobLink ? <audio controls src={recordBlobLink} className="mt-6" /> : ''}
        </div>

        <div className="mt-4">
          {recordBlobLink ? (
            <button onClick={submitHandle} className="bg-[#fff] text-[#111] rounded-md py-1 px-3 font-semibold text-[16px]">
              Submit
            </button>
          ) : (
            ''
          )}
        </div>
      </center>
    </div>
  );
};

export default AudioRecorder;
