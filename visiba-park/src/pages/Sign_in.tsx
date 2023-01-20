import "../App.css";
import slackLogo from "../assets/slack-new-logo.svg";
function Signin() {
  return (
    <div className="signIn">
      <button className="signIn-button">
        <p className="loginbutton">Logga in med Slack</p>
        <img src={slackLogo} className="slacklogo" alt="slack logo" />
      </button>
    </div>
  );
}

export default Signin;
