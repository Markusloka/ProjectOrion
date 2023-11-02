import Mycalendar from "../components/myCalendar";
import visibaLogo from "../assets/visiba_logo.svg";
import "../App.css";
import UserProfile from "../components/userProfile";
import { User } from "@supabase/supabase-js";
import ScrollAreaDemo from "../components/scrollArea";

interface Props {
  user: User | null;
  date: Date; // Add the 'date' property to Props
  namn: string; // Add the 'namn' property to Props
  logout: () => Promise<void>;
}
//This logout button now works!

function Home({ user, logout, date }: Props) {
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
      <a href="/Signin" className="signInButton">
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
        <ScrollAreaDemo user={user} date={date} namn={""} />
      </div>
    </div>
  );
}

export default Home;
