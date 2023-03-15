import Mycalendar from "../components/myCalendar";
import visibaLogo from "../assets/visiba_logo.svg";
import "../App.css";
import supabase from "../database/supabase";
import { useUser } from "../components/UserUser";
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

  const loggedInUser = user;

  if (loggedInUser) {
    const { user_metadata } = loggedInUser;
    if (user_metadata) {
      const { full_name } = user_metadata;

      if (full_name) {
        const userFullNameDiv = document.getElementById("user-fullname");
        if (userFullNameDiv) {
          userFullNameDiv.textContent = full_name;
        }
      }
    }
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
      <div id="user-fullname" className="user"></div>
      <div className="card">
        <Mycalendar user={user} />
      </div>
    </div>
  );
}

export default Home;
