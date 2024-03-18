import React, { useState } from "react";
import video from "../assets/video2.mp4";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Iteration2 = ({
  confidence1,
  name,
  cls,
  srn,
  email,
  phone,
  option1,
  selectedOption1,
  selectedOption2,
  selectedOption3,
  selectedOption4,
  selectedOption5,
  selectedOption6,
  selectedOption7,
  selectedOption8,
  selectedOption9,
  selectedOption10,
  selectedOption11,
  selectedOption12,
  selectedOption13,
  selectedOption14,
  selectedOption15,
  selectedOption16,
  selectedOption17,
  selectedOption18,
  selectedOption19,
  selectedOption20,
}) => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false)
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
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzhiJIQWFIzMebM97nXxbntvoLp1J2WFZHeRqrMTXMPbQBF9JEvK1FnfpYStRToy-3l/exec";
  const submitForm = (e) => {
    e.preventDefault();
    form = e.target;
    console.log(e.target.confidence2.value)
    if (e.target.confidence2.value != 50) {
      console.log("submit");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));
    navigate("/audio");
    } else {
      setAlert(true)
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 p-2 mt-5">
      {
        !survey1 ? (
          <div className="d-flex flex-column">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <video className="w-100" controls>
                <source src={video} type="video/mp4" />
              </video>
              <div className="w-100">
                <p>Video description</p>
                <p>
                  An Idea of Powernap Marilyn Porter, the founder of Time Out
                  Naps is confident that her mid-day power napping service will
                  increase productivity in the workplace.
                </p>
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-2">
              <p>
                you guys have to give a quiz after the video so watch it
                carefully
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
          <div className="p-2">
            <p>1 What do you think?</p>
            <form
              action=""
              className="d-flex flex-column"
              onSubmit={(e) => {
                submitForm(e);
              }}
            >
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required
                  placeholder="Username"
                  value={name}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="class"
                  required
                  placeholder="Username"
                  value={cls}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="srn"
                  required
                  placeholder="Username"
                  value={srn}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  required
                  placeholder="Username"
                  value={email}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  required
                  placeholder="Username"
                  value={phone}
                  ria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="option"
                  required
                  placeholder="Username"
                  value={option1}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption1"
                  required
                  placeholder="Username"
                  value={selectedOption1}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption2"
                  required
                  placeholder="Username"
                  value={selectedOption2}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption3"
                  required
                  placeholder="Username"
                  value={selectedOption3}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption4"
                  required
                  placeholder="Username"
                  value={selectedOption4}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control" 
                  name="selectedOption5"
                  required
                  placeholder="Username"
                  value={selectedOption5}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption6"
                  required
                  placeholder="Username"
                  value={selectedOption6}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption7"
                  required
                  placeholder="Username"
                  value={selectedOption7}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption8"
                  required
                  placeholder="Username"
                  value={selectedOption8}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption9"
                  required
                  placeholder="Username"
                  value={selectedOption9}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption10"
                  required
                  placeholder="Username"
                  value={selectedOption10}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption11"
                  required
                  placeholder="Username"
                  value={selectedOption11}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption12"
                  required
                  placeholder="Username"
                  value={selectedOption12}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption13"
                  required
                  placeholder="Username"
                  value={selectedOption13}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption14"
                  required
                  placeholder="Username"
                  value={selectedOption14}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption15"
                  required
                  placeholder="Username"
                  value={selectedOption15}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption16"
                  required
                  placeholder="Username"
                  value={selectedOption16}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption17"
                  required
                  placeholder="Username"
                  value={selectedOption17}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption18"
                  required
                  placeholder="Username"
                  value={selectedOption18}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption19"
                  required
                  placeholder="Username"
                  value={selectedOption19}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="selectedOption20"
                  required
                  placeholder="Username"
                  value={selectedOption20}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="confidence1"
                  required
                  placeholder="Username"
                  value={confidence1}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <label className="d-flex gap-2">
                <input type="radio" name="option2" required value="a2" />
                She will be offered a deal that she asked for and she will
                accept the deal
              </label>
              <label className="d-flex gap-2">
                <input type="radio" name="option2" required value="b2" />
                She will be offered a deal different than what she asked for and
                she will accept the deal
              </label>
              <label className="d-flex gap-2">
                <input type="radio" name="option2" required value="c2" />
                She will be offered a deal different than what she asked for,
                and she will reject it.
              </label>
              <label className="d-flex gap-2">
                <input type="radio" name="option2" required value="d2" />
                She will not get any offers
              </label>
              {/* <label className="d-flex gap-2">
                <input type="range" name="option2" required className="form-range" />
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
                {/* <input
                  required
                  type="range"
                  class="form-range"
                  id="customRange1"
                  name="confidence2"
                ></input> */}
                <label htmlFor="" className="w-100 d-flex">
                0
              <input
                required
                type="range"
                class="form-range"
                id="customRange1"
                name="confidence2"
              ></input>
              100
              </label>
              </label>
              <div className="input-group mb-3" hidden>
                <span className="input-group-text" id="basic-addon1">
                  Phone NO. :{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="test"
                  required
                  placeholder="Username"
                  value="vinayak"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="rounded-2 btn btn-info">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )
        // <div>
        //   <p>1 What do you think?</p>
        //         <form action="" className='d-flex flex-column' onSubmit={(e)=>{submitForm(e)}}>
        //           <div className="input-group mb-3" hidden >
        //             <span className="input-group-text" id="basic-addon1">Phone NO. : </span>
        //             <input type="text" className="form-control" name='name' required placeholder="Username" value='pritam' aria-label="Username" aria-describedby="basic-addon1"/>
        //           </div>
        //           <div className="input-group mb-3" hidden >
        //             <span className="input-group-text" id="basic-addon1">Phone NO. : </span>
        //             <input type="text" className="form-control" name='class' required placeholder="Username" value='cse' aria-label="Username" aria-describedby="basic-addon1"/>
        //           </div>
        //           <div className="input-group mb-3" hidden >
        //             <span className="input-group-text" id="basic-addon1">Phone NO. : </span>
        //             <input type="text" className="form-control" name='srn' required placeholder="Username" value='123456789' aria-label="Username" aria-describedby="basic-addon1"/>
        //           </div>
        //           <div className="input-group mb-3" hidden >
        //             <span className="input-group-text" id="basic-addon1">Phone NO. : </span>
        //             <input type="text" className="form-control" name='email' required placeholder="Username" value='email@gmail.com' aria-label="Username" aria-describedby="basic-addon1"/>
        //           </div>
        //           <div className="input-group mb-3" hidden >
        //             <span className="input-group-text" id="basic-addon1">Phone NO. : </span>
        //             <input type="text" className="form-control" name='phone' required placeholder="Username" value='123456789' ria-label="Username" aria-describedby="basic-addon1"/>
        //           </div>
        //           <div className="input-group mb-3" hidden >
        //             <span className="input-group-text" id="basic-addon1">Phone NO. : </span>
        //             <input type="text" className="form-control" name='option' required placeholder="Username" value='a1' aria-label="Username" aria-describedby="basic-addon1"/>
        //           </div>
        //           <label className="d-flex gap-2">
        //             <input type="radio" name="option2" required value='a2' />
        //             She will be offered a deal that she asked for and she will accept the deal
        //           </label>
        //           <label className="d-flex gap-2">
        //             <input type="radio" name="option2" required value='b2'  />
        //             She will be offered a deal different than what she asked for and she will accept the deal
        //           </label>
        //           <label className="d-flex gap-2">
        //             <input type="radio" name="option2" required value="c2"  />
        //             She will be offered a deal different than what she asked for, and she will reject it.
        //           </label>
        //           <label className="d-flex gap-2">
        //             <input type="radio" name="option2" required value="d2" />
        //             She will not get any offers
        //           </label>
        //           <div className="input-group mb-3" hidden >
        //             <span className="input-group-text" id="basic-addon1">Phone NO. : </span>
        //             <input type="text" className="form-control" name='test' required placeholder="Username" value='vinayak' aria-label="Username" aria-describedby="basic-addon1"/>
        //           </div>

        //           <div className=''><button type="submit" className='rounded-2 btn btn-info' >Submit</button></div>
        //         </form>
        // </div>
      }
    </div>
  );
};

export default Iteration2;
