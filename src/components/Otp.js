import { useState, Fragment } from "react";
import Details from "./Details";

const Otp = (props) => {
  const [enteredOtp, setEnteredOtp] = useState("");
  const [enteredName, setEnteredName] = useState(props.name);
  const [enteredIC, setEnteredIC] = useState(props.ic);
  const [enteredMobile, setEnteredMobile] = useState(props.mobile);
  const [enableOtpPage, setEnableOtpPage] = useState(true);
  const [enableDetailsPage, setEnableDetailsPage] = useState(props.detailsPage);
  const statFalse = false;

  const otpChangeHandler = (event) => {
    setEnteredOtp(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      otp: enteredOtp,
      mobile: props.mobile,
      name: props.name,
      ic: props.ic,
    };
    setEnteredOtp(userData.otp);
    setEnteredName(props.name);
    setEnteredIC(props.ic);
    setEnteredMobile(props.mobile);

    setEnableOtpPage(false);
    setEnableDetailsPage(true);

    console.log(userData);
  };
  return (
    <div>
      {enableOtpPage === true ? (
        <Fragment>
            <p>OTP = 123456</p>
          <form onSubmit={submitHandler}>
            <label>OTP: </label>
            <input
              type="text"
              value={enteredOtp}
              onChange={otpChangeHandler}
            ></input>
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </Fragment>
      ) : (
        " "
      )}
      {enableDetailsPage === true ? (
        <Fragment>
          <Details
            mobile={enteredMobile}
            otp={enteredOtp}
            name={enteredName}
            ic={enteredIC}
            detailsPage={statFalse}
          />
        </Fragment>
      ) : (
        " "
      )}
    </div>
  );
};

export default Otp;
