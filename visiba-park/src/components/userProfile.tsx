import "../App.css";
import { User } from "@supabase/supabase-js";

interface Props {
  user: User | null;
}
function UserProfile({ user }: Props) {
  if (user) {
    const loggedInUserProfile = user;
    if (loggedInUserProfile) {
      const { user_metadata } = loggedInUserProfile;
      if (user_metadata) {
        const { avatar_url } = user_metadata;

        if (avatar_url) {
          const userProfileImage =
            document.getElementById("user-profile-image");
          if (userProfileImage) {
            userProfileImage.setAttribute("src", avatar_url);
            userProfileImage.setAttribute("alt", "User Profile Image");
          }
        }
      }
    }

    const loggedInUser = user;
    if (loggedInUser) {
      const { user_metadata } = loggedInUser;
      if (user_metadata) {
        const { full_name } = user_metadata;

        if (full_name) {
          const userFullNameDiv = document.getElementById("user-fullname");
          if (userFullNameDiv) {
            userFullNameDiv.textContent = full_name;
          }
        }
      }
    }

    return (
      <div className="userElements">
        <img
          aria-label="profile picture"
          id="user-profile-image"
          className="profileImage"
        ></img>
        <div id="user-fullname" className="user"></div>
      </div>
    );
  }
  if ((user = null)) {
    return null;
  }
}

export default UserProfile;
