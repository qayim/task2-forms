import Name from "./Name";
import { useState, Fragment } from "react";

const MobileNumber = (props) => {
  const [enteredMobile, setEnteredMobile] = useState("");
  const [enableMobilePage, setEnableMobilePage] = useState(true);
  const [enableNamePage, setEnableNamePage] = useState(false);
  const statFalse = false;

  const mobileChangeHandler = (event) => {
    setEnteredMobile(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      mobile: enteredMobile,
    };
    setEnableMobilePage(false);
    setEnableNamePage(true);
    console.log("Mobile phone: " + userData.mobile);
  };

  return (
    <div>
      {enableMobilePage === true ? (
        <Fragment>
          <form onSubmit={submitHandler}>
            <label>Mobile Number: </label>
            <input
              type="text"
              value={enteredMobile}
              onChange={mobileChangeHandler}
            ></input>
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </Fragment>
      ) : (
        " "
      )}

      {enableNamePage === true ? (
        <Fragment>
          <Name mobile={enteredMobile} otpPage={statFalse} />
        </Fragment>
      ) : (
        " "
      )}
    </div>
  );
};

export default MobileNumber;
