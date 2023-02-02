import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vheyvgfbvknlijdnvfrn.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function signInWithSlack() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "slack",
  });
}
export async function signout() {
  const { error } = await supabase.auth.signOut();
}

export default supabase;
