import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import supabase from "./database/supabase";

export function useUser(): User | null {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth
      .getUser()
      .then(({ data }) => {
        console.log(data);
        setUser(data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return user;
}
