import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../apiService'; // Import the function to fetch user profile

const HomePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        const response = await getUserProfile(token);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      {profile ? (
        <div className="profile-card">
          <h2>{profile.name}</h2>
          <p>Email: {profile.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default HomePage;