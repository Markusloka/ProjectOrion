import Mycalendar from "../components/myCalendar";
import visibaLogo from "../assets/visiba_logo.svg";
import "../App.css";
import supabase from "../database/supabase";

// async function LogoutBtn() {
//   const { error } = await supabase.auth.signOut();
//   return (
//     <div className="authentication">
//       <button className="signInButton" onClick={error}>
//         Logout{" error"}
//       </button>
//     </div>
//   );
// }

// function LoginBtn() {
//   return (
//     <a href="/Signin">
//       <button className="signInButton">Login</button>
//     </a>
//   );
// }

// function AuthBtn() {
//   const isLoggedIn = supabase.auth.getUser();
//   if (isLoggedIn) {
//     console.log(isLoggedIn);
//     return <LogoutBtn />;
//   }
//   console.log(isLoggedIn);
//   return <LoginBtn />;
// }

function Home() {
  return (
    <div className="Home">
      {/* <a className="singnInHome" href="/Signin">
        <button className=" signInButton">Logga in</button>
      </a> */}
      {/* <AuthBtn /> */}
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
