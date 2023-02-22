import "../App.css";
import slackLogo from "../assets/slack-new-logo.svg";
import { signInWithSlack } from "../database/supabase.js";

function Signin() {
  function handleSignInButtonClick() {
    signInWithSlack();
  }

  return (
    <div className="signIn">
      <button className="signIn-button" onClick={handleSignInButtonClick}>
        <p className="loginbutton">Log in with Slack</p>
        <img src={slackLogo} className="slacklogo" alt="slack logo" />
      </button>
    </div>
  );
}

export default Signin;
