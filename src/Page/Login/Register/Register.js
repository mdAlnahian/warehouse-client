import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../Login/firebase.init";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser] = useSignInWithGithub(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  if (user || googleUser || githubUser) {
    navigate("/home");
  }

  const handleCreateUser = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Sorry! Both password did not matched");
      return;
    }
    if (password.length < 6) {
      setError("Password must have at least 6 characters!");
      return;
    }

    await createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container mt-4">
      <div className="">
        <h2 className="form-title mt-5 mb-5">Please Register</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group mb-3">
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              placeholder="Email"
              required
            ></input>
          </div>
          <div className="input-group mb-3">
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="confirm-password"
              placeholder="Password"
              required
            ></input>
          </div>
          <div className="input-group mb-3">
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="password"
              placeholder="Confirm Password"
              required
            ></input>
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <p style={{ color: "red" }}>{hookError}</p>
          <input className="mb-4 form-submit" type="submit" value="Register" />
        </form>
        <p>
          Already have an account ? <Link to="/login">Please Login</Link>
        </p>
        <div className="or-style">
          <div className="or-data"></div>
          <div>or</div>
          <div className="or-data"></div>
        </div>
        <div>
          <div className="go-button mb-2 mt-2">
            <p
              className="mt-2"
              onClick={() => {
                signInWithGoogle();
              }}
            >
              Continue With Google
            </p>
          </div>
          <div className="go-button mb-4 mt-2">
            <p
              className="mt-2"
              onClick={() => {
                signInWithGithub();
              }}
            >
              Continue With Github
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
