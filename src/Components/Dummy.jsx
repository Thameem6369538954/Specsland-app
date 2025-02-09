import React, { useState } from "react";
import axios from "axios";

const Dummy = () => {
  const [profileImage, setProfileImage] = useState(null);

  // Fetch userId from localStorage
  const userData = localStorage.getItem("user");
  let userId = null;

  if (userData) {
    const parsedUserData = JSON.parse(userData);
    userId = parsedUserData._id;
    console.log(userId, "User ID retrieved successfully");
  } else {
    console.error("No user data found in localStorage");
  }

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file); // Set file in state
  };

  // Handle file upload
  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (!profileImage) {
      console.error("No file selected for upload");
      return;
    }

    if (!userId) {
      console.error("User ID not found");
      return;
    }

    const formData = new FormData();
    formData.append("file", profileImage);

    try {
      const response = await axios.put(
        `https://specsland-backend-app-newone.onrender.com/api/v1/profileUpdate/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // Include Authorization if required
            // Authorization: `Bearer ${token}`,
          },
        },
        { withCredentials: true } 
      );
      console.log(response.data, "File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <form onSubmit={handleFileUpload}>
      <input
        type="file"
        onChange={handleImageChange}
        id="file"
        accept="image/*"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default Dummy;
