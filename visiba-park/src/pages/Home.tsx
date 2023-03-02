import Mycalendar from "../components/myCalendar";
import visibaLogo from "../assets/visiba_logo.svg";
import "../App.css";

function Home() {
  return (
    <div className="Home">
      <a className="singnInHome" href="/Signin">
        <button className=" signInButton">Logga in</button>
      </a>

      <div className="logoTitle">
        <img src={visibaLogo} className="logo react" alt="React logo" />
      </div>
      <div className="card">
        <Mycalendar></Mycalendar>
      </div>
    </div>
  );
}

export default Home;
