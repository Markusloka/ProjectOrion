import "../App.css";
import slackLogo from "../assets/slack-new-logo.svg";
import supabase from "../database/supabase";

const SignIn = () => {
  async function signInButton() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "slack",
    });
    if (error) {
      console.log(error);
    }

    return { error, data };
  }

  return (
    <div className="signIn">
      <button className="signIn-button" onClick={signInButton}>
        <p className="loginbutton">Log in with Slack</p>
        <img src={slackLogo} className="slacklogo" alt="slack logo" />
      </button>
    </div>
  );
};

export default SignIn;
