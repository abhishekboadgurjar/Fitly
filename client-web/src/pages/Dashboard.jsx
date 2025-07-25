import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import WorkoutItem from '../components/WorkoutItem';

export default function Dashboard() {
  const { workouts, deleteWorkout } = useContext(WorkoutContext);

  return (
    <div>
      <h2 className="text-2xl mb-4">Your Workouts</h2>
      {workouts.length === 0 ? (
        <p>No workouts yet. Click "Add" to create one!</p>
      ) : (
        workouts.map(w => (
          <WorkoutItem key={w._id} workout={w} onDelete={deleteWorkout} />
        ))
      )}
    </div>
  );
}
