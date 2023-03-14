import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import supabase from "../database/supabase";

export function useUser(): [User | null, () => Promise<void>] {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth
      .getUser()
      .then(({ data }) => {
        setUser(data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return [user, logout];
}
