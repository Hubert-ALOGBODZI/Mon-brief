import React from "react";
import { Link } from "react-router-dom";

import InputControl from "./InputControl";

import "../CSS/Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {


  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmission = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    // console.log(values);

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
          setSubmitButtonDisabled(false);
          navigate("/");
        console.log(user);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        // console.log("Error", err.message);
      });
  };


  return (
    <div className="Login">
      <div className="innerBox">
        <h2 className="heading">Login</h2>

        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter  Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className="footer">
            <p className="error">{errorMsg}</p>
          <button onClick={() => {
              setSubmitButtonDisabled(true);
              handleSubmission();
            }}
            disabled={submitButtonDisabled}>Login</button>
          <p>
            Already have an Account ? {" "}
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
