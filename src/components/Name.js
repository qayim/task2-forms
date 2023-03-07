import { useState, Fragment } from "react";
import Otp from "./Otp";

const Name = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredIC, setEnteredIC] = useState("");
  const [enteredMobile, setEnteredMobile] = useState(props.mobile);
  const [enableNamePage, setEnableNamePage] = useState(true);
  const [enableOtpPage, setEnableOtpPage] = useState(false);
  const statFalse = false;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ICChangeHandler = (event) => {
    setEnteredIC(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      mobile: enteredMobile,
      name: enteredName,
      ic: enteredIC,
    };
    
    setEnteredMobile(props.mobile);
    setEnteredName(userData.name);
    setEnteredIC(userData.ic);
    
    console.log("Mobile: " + props.mobile);
    console.log("Name: " + userData.name);
    console.log("IC: " + userData.ic);

    setEnableNamePage(false);
    setEnableOtpPage(true);
  };
  return (
    <div>
      {enableNamePage === true ? (
        <Fragment>
        <h1><strong>Hello</strong></h1>
          <form onSubmit={submitHandler}>
            <label>Enter your name: </label>
            <br></br>
            <input
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            ></input>
            <br></br>
            <label>Enter your ic number: </label>
            <br></br>
            <input
              type="text"
              value={enteredIC}
              onChange={ICChangeHandler}
            ></input>
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </Fragment>
      ) : (
        " "
      )}

      {enableOtpPage === true ? (
        <Fragment>
          <Otp
            mobile={enteredMobile}
            name={enteredName}
            ic={enteredIC}
            otpPage={statFalse}
          />
        </Fragment>
      ) : (
        " "
      )}
    </div>
  );
};

export default Name;
