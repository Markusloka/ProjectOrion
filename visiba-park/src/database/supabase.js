import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const supabaseUrl = "https://vheyvgfbvknlijdnvfrn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoZXl2Z2ZidmtubGlqZG52ZnJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMyODA3MTgsImV4cCI6MTk4ODg1NjcxOH0.ruv0RSTdUtUFiIbXHunC6bgmNW7FCH2j6JmQhIw1urA";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function signInWithSlack() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "slack",
    getUser: "",
  });
  if (error) {
    console.log(error);
  }

  return { error, data };
}

export async function useAuth() {
  const { data } = await supabase.auth.getUser();
  return data;
}
export async function signout() {
  const { error } = await supabase.auth.signOut();
}

export default supabase;
