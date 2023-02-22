import "../App.css";
import slackLogo from "../assets/slack-new-logo.svg";
import { useAuth } from "../components/Auth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SignIn = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setUser("");

    const signIn = await auth.login(user);

    if (signIn.error) {
      console.log(signIn.error.message, {
        theme: "dark",
        hideProgressBar: true,
        autoClose: 3000,
      });
      return;
    }
    console.log("You are now logged in", {
      theme: "dark",
      hideProgressBar: true,
      autoClose: 3000,
    });
    navigate("/Home");
  };

  return (
    <div className="signIn">
      <button className="signIn-button" onClick={handleSignIn}>
        <p className="loginbutton">Log in with Slack</p>
        <img src={slackLogo} className="slacklogo" alt="slack logo" />
      </button>
    </div>
  );
};

export default SignIn;
