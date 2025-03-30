import React, { useState } from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    bio: "",
    socialMedia: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!profile.name || !profile.title || !profile.bio) {
      alert("Please fill in the name,title, and bio fields!");
      return;
    }
    setIsEditing(false);
  };

  return (
    <div className="card">
      <div className="profile-card">
        {isEditing ? (
          <div className="edit-mode">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
            <input
              type="text"
              name="title"
              value={profile.title}
              onChange={handleChange}
              placeholder="Enter title"
            />
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              placeholder="Enter bio"
            />
            <input
              type="text"
              name="socialMedia"
              value={profile.socialMedia}
              onChange={handleChange}
              placeholder="Enter social media link"
            />
            <button onClick={handleSave} className="save-btn">
              Save
            </button>
          </div>
        ) : (
          <div className="view-mode">
            <h2>{profile.name}</h2>
            <h4>{profile.title}</h4>
            <p>{profile.bio}</p>
            {profile.socialMedia && (
              <p>
                <a
                  href={profile.socialMedia}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Social Media
                </a>
              </p>
            )}
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
