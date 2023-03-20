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

  return (
    <div className="Home">
      {user ? <LogoutBtn /> : <LoginBtn />}
      <div className="logoTitle">
        <img src={visibaLogo} className="logo react" alt="React logo" />
      </div>
      {user && <UserProfile user={user} />}
      <div className="card">
        <Mycalendar user={user} />
      </div>
    </div>
  );
}

export default Home;
