import React from "react";
import  "./assets/Images/my.jpg"; // Adjust the relative path as needed
const ProfileImage = () => {
  return (
    <div className="profile-image">
      <div className="image-overlay"></div>
      <img src="./assets/Images/my.jpg" alt="Profile" />
    </div>
  );
};

export default ProfileImage;