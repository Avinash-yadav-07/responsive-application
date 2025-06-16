import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faEdit, faSave, faUser } from '@fortawesome/free-solid-svg-icons';
import './profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    bio: 'Passionate developer building innovative solutions.',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Tech City, USA',
    notifications: true,
    theme: 'light',
  });

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const profile = document.querySelector('.profile');
    if (navbar && profile) {
      const navbarHeight = navbar.offsetHeight;
      profile.style.paddingTop = `${navbarHeight + 20}px`;
      console.log(`Navbar height: ${navbarHeight}px, Applied padding-top: ${navbarHeight + 20}px`);
    } else {
      console.log('Navbar or profile element not found');
    }
  }, []);

  const handleEditToggle = () => {
    const newEditingState = !isEditing;
    setIsEditing(newEditingState);
    console.log('isEditing toggled to:', newEditingState);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log('Updated user data:', userData);
  };

  return (
    <div className="profile">
      <section className="profile-header">
        <div className="profile-picture">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <h1 className="profile-name">{`${userData.firstName} ${userData.lastName}`}</h1>
        <p className="profile-bio">{userData.bio}</p>
        <button className="profile-edit-btn" onClick={handleEditToggle}>
          <FontAwesomeIcon icon={isEditing ? faSave : faEdit} />
          {isEditing ? ' Save Profile' : ' Edit Profile'}
        </button>
      </section>

      <section className="profile-details">
        <h2 className="section-title">Personal Information</h2>
        <div className="details-grid">
          <div className="detail-card">
            <FontAwesomeIcon icon={faEnvelope} className="detail-icon" />
            <h3>Email</h3>
            <p>{userData.email}</p>
          </div>
          <div className="detail-card">
            <FontAwesomeIcon icon={faPhone} className="detail-icon" />
            <h3>Phone</h3>
            <p>{userData.phone}</p>
          </div>
          <div className="detail-card">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="detail-icon" />
            <h3>Location</h3>
            <p>{userData.location}</p>
          </div>
        </div>
      </section>

      <section className="profile-settings">
        <h2 className="section-title">Settings</h2>
        {isEditing ? (
          <form className="edit-form debug-form" onSubmit={handleSubmit}>
            <p className="form-title">Edit Profile</p>
            <p className="form-message">Update your profile details below.</p>
            <div className="form-flex">
              <div className="form-field">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  id="firstName"
                  className="form-input"
                  type="text"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  id="lastName"
                  className="form-input"
                  type="text"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="bio" className="form-label">Bio</label>
              <textarea
                id="bio"
                className="form-input"
                name="bio"
                value={userData.bio}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                className="form-input"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field form-checkbox-field">
              <label className="form-checkbox-label">
                <input
                  className="form-checkbox"
                  type="checkbox"
                  name="notifications"
                  checked={userData.notifications}
                  onChange={handleInputChange}
                />
                Enable Notifications
              </label>
            </div>
            <div className="form-field">
              <label htmlFor="theme" className="form-label">Theme</label>
              <select
                id="theme"
                className="form-input"
                name="theme"
                value={userData.theme}
                onChange={handleInputChange}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <button className="form-submit" type="submit">
              Save Changes
            </button>
          </form>
        ) : null}
      </section>
    </div>
  );
};

export default Profile;