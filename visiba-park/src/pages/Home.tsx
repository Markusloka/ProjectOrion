import Mycalendar from "../components/myCalendar";
import visibaLogo from "../assets/visiba_logo.svg";
import "../App.css";
import UserProfile from "../components/userProfile";
import { User } from "@supabase/supabase-js";

interface Props {
  user: User | null;
  logout: () => Promise<void>;
}
//This logout button now works!

function Home({ user, logout }: Props) {
  function LogoutBtn() {
    return (
      <div className="authentication">
        <button className="signInButton" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  function LoginBtn() {
    return (
      <a href="/Signin">
        <button className="signInButton">Login</button>
      </a>
    );
  }

  //Need to useeffect something because we need to change button from logout to login
  function AuthBtn() {
    if (user) {
      return <LogoutBtn />;
    }
    return <LoginBtn />;
  }

  return (
    <div className="Home">
      <AuthBtn />
      <div className="logoTitle">
        <img src={visibaLogo} className="logo react" alt="React logo" />
      </div>
      <UserProfile user={user} />
      <div className="card">
        <Mycalendar user={user} />
      </div>
    </div>
  );
}

export default Home;
