import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const ProfileScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">👤 Profile</h2>
        
        {user ? (
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span className="font-semibold">Name:</span>
              <span>{user.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Email:</span>
              <span>{user.email}</span>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500">No user data available.</p>
        )}
      </div>
    </div>
  );
};

export default ProfileScreen;
