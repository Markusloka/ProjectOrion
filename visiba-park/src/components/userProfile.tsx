import "../App.css";
import { User } from "@supabase/supabase-js";

interface Props {
  user: User;
}

function UserProfile({ user }: Props) {
  return (
    <div className="userElements">
      <img
        aria-label="profile picture"
        className="profileImage"
        src={user.user_metadata.avatar_url}
        alt="Avatar"
      ></img>
      <div className="user">{user.user_metadata.full_name}</div>
    </div>
  );
}

export default UserProfile;
