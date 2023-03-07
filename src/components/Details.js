const statFalse = false;

const Details = (props) => {
    const mobileNum = props.mobile;
    const name = props.name;
    const ic = props.ic;
    const otp = props.otp;


  return (
    <div>
      <h1>Your submitted details</h1>
      <p>Mobile Number: {mobileNum}</p>
      <p>OTP: {otp}</p>
      <p>Your Name: {name}</p>
      <p>Your IC Number: {ic}</p>
    </div>
  );
};

export default Details;
