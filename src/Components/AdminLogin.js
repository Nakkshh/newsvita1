import React, { useState } from "react";
import "./styles.css";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "./FirebaseConfig";

const AuthComponent = () => {
  const [activeTab, setActiveTab] = useState("signIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth(app);

  const showMessage = (message, isSuccess = false) => {
    setMessage(message);
    setIsSuccess(isSuccess);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showMessage("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showMessage("Sign-Up Successful!", true);
      navigate("/admindash"); // Redirect to the admin dashboard after sign-up
    } catch (error) {
      showMessage("Sign-Up Failed: " + error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      showMessage("Sign-In Successful!", true);
      navigate("/admindash"); // Redirect to the admin dashboard after sign-in
    } catch (error) {
      showMessage("Sign-In Failed: " + error.message);
    }
  };

  return (
    <div>
      {/* Sign-Up Form */}
      {activeTab === "signUp" && (
        <div className="container">
          <h1 className="form-title">Register</h1>
          {message && (
            <div className={`messageDiv ${isSuccess ? "success" : ""}`}>
              {message}
            </div>
          )}
          <form onSubmit={handleSignUp}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label>Confirm Password</label>
            </div>
            <button className="btn" type="submit">
              Sign Up
            </button>
          </form>
          <div className="links">
            <p>Already have an account?</p>
            <button onClick={() => setActiveTab("signIn")}>Sign In</button>
          </div>
        </div>
      )}

      {/* Sign-In Form */}
      {activeTab === "signIn" && (
        <div className="container">
          <h1 className="form-title">Sign In</h1>
          {message && (
            <div className={`messageDiv ${isSuccess ? "success" : ""}`}>
              {message}
            </div>
          )}
          <form onSubmit={handleSignIn}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
            </div>
            <button className="btn" type="submit">
              Sign In
            </button>
          </form>
          <div className="links">
            <p>Don't have an account yet?</p>
            <button onClick={() => setActiveTab("signUp")}>Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;
