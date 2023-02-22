import supabase from "../database/supabase";
import { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  async function login() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "slack",
    });
    if (error) {
      console.log(error);
    }

    return { error, data };
  }

  useEffect(() => {
    const user = supabase.auth.User();
    setUser(user);

    const auth = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session.user);
      }

      if (event === "SIGNED_OUT") {
        setUser(null);
      }
    });

    return () => auth.data.unsubscribe();
  }, []);

  return {
    user,
    login,
    useAuth,
  };
}
