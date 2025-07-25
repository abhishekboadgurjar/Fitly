import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import { FaRunning, FaClock, FaFire } from 'react-icons/fa';

const HomeScreen = () => {
  const { workouts } = useContext(WorkoutContext);

  const totalWorkouts = workouts.length;
  const totalCalories = workouts.reduce((sum, w) => sum + w.calories, 0);
  const totalTime = workouts.reduce((sum, w) => sum + w.duration, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🏋️‍♂️ Your Fitness Summary
      </h1>

      <div className="max-w-xl mx-auto space-y-6">
        <div className="flex items-center bg-white rounded-lg shadow-md border-l-8 border-green-500 p-4">
          <FaRunning className="text-green-500 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Total Workouts</h2>
            <p>{totalWorkouts} sessions</p>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-lg shadow-md border-l-8 border-blue-500 p-4">
          <FaClock className="text-blue-500 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Total Time</h2>
            <p>{totalTime} minutes</p>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-lg shadow-md border-l-8 border-red-600 p-4">
          <FaFire className="text-red-600 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold">Calories Burned</h2>
            <p>{totalCalories} kcal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
