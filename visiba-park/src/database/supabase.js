import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

const supabaseUrl = "https://vheyvgfbvknlijdnvfrn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoZXl2Z2ZidmtubGlqZG52ZnJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMyODA3MTgsImV4cCI6MTk4ODg1NjcxOH0.ruv0RSTdUtUFiIbXHunC6bgmNW7FCH2j6JmQhIw1urA";
const supabase = createClient(supabaseUrl, supabaseKey);

/*const [user, setUser] = useState();
useEffect(() => {
  checkUser();
  window.addEventListener("hashchange", function () {
    checkUser();
  });
  async function checkUser() {
    const user = supabase.auth.user();
    setUser(user);
  }
});*/

export async function signInWithSlack() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "slack",
  });
  if (error) {
    console.log(error);
  }
  return { error, data };
}

export async function useAuth() {
  const { data } = await supabase.auth.getSession({});
}
export async function signout() {
  const { error } = await supabase.auth.signOut();
}

export default supabase;
