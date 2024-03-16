import React, { useState } from "react";
import video from "../assets/video1.mp4";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Iteration1 = ({ option1, setConfidence1, confidence1 }) => {

  const [alert, setAlert] = useState(false)

  const navigate = useNavigate();
  let [survey1, setSurvey1] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSurvey1(true);
      console.log("in timeout");
      console.log(survey1);
    });
  };

  var form;
  const submitForm = (e) => {
    e.preventDefault();
    form = e.target.option.value;
    option1(form);
    console.log(form);
    console.log(confidence1)
    if (confidence1 == undefined) {
      console.log("pritam")
      setAlert(true)
      // navigate("/test1");
    }else{
      navigate("/test2");
    }
  };

  const handleConfidence = (e) => {
    console.log(e.target.value);
    setConfidence1(e.target.value);
  };
  


  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 mt-5">
      {!survey1 ? (
        <div className="d-flex flex-column">
          {/* width="640" height="360"  */}
          <div className="d-flex flex-column justify-content-center p-2 align-items-center">
            <video className="w-100" controls>
              <source src={video} type="video/mp4" />
            </video>
            <div className="w-100 fs-6">
              <p>Video description</p>
              <p>
                An Idea of Powernap Marilyn Porter, the founder of Time Out Naps
                is confident that her mid-day power napping service will
                increase productivity in the workplace.
              </p>
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center p-2">
            <p>
              you guys have to give a quiz after the video so watch it carefully
            </p>
            <p>Are you ready to take the quiz</p>
            <button
              type="button"
              className="btn btn-info"
              onClick={(e) => handleChange(e)}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="p-3">
          <p>1 What do you think?</p>

          <form
            action=""
            className="d-flex flex-column"
            onSubmit={(e) => {
              submitForm(e);
            }}
          >
            <label className="d-flex gap-2">
              <input type="radio" name="option" required value="a1" />
              <span>
                She will be offered a deal that she asked for and she will
                accept the deal
              </span>
            </label>
            <label className="d-flex gap-2">
              <input type="radio" name="option" required value="b1" />
              She will be offered a deal different than what she asked for and
              she will accept the deal
            </label>
            <label className="d-flex gap-2">
              <input type="radio" name="option" required value="c1" />
              She will be offered a deal different than what she asked for, and
              she will reject it.
            </label>
            <label className="d-flex gap-2">
              <input type="radio" name="option" required value="d1" />
              She will not get any offers
            </label>
            {/* <label className="d-flex gap-2">
                <input type="range" name="option2" required className="form-range" onChange={(e)=>handleConfidence(e)}/>
                She will not get any offers
              </label> */}
            
            

            <label htmlFor="" className="mt-3">
            {alert ? 
              <div class="alert alert-danger fs-6 p-2" role="alert">
              A simple danger alert—check it out!
            </div>
              :
              <></>
            }
              Enter your confidece level with your answer
              <label htmlFor="" className="w-100 d-flex">
                0
              <input
                required
                type="range"
                class="form-range"
                id="customRange1"
                onChange={(e) => handleConfidence(e)}
              ></input>
              100
              </label>
            </label>
            <div className="d-flex justify-content-center">
              <button type="submit" className="rounded-2 btn btn-info">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Iteration1;
