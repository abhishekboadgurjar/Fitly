import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import WorkoutItem from '../components/WorkoutItem';

const WorkoutHistory = () => {
  const { workouts, deleteWorkout } = useContext(WorkoutContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">🏃‍♂️ Workout History</h2>

        {workouts.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No workouts added yet.</p>
        ) : (
          <div className="space-y-6">
            {workouts.map((w) => (
              <WorkoutItem key={w._id} workout={w} onDelete={deleteWorkout} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutHistory;
