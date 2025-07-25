import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

const WorkoutDetails = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const { data } = await API.get(`/workouts/${id}`);
      setWorkout(data);
    };
    fetchWorkout();
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 px-4">
      {workout ? (
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-gray-200">
          <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">{workout.type}</h2>
          <div className="space-y-3 text-gray-700 text-lg">
            <p>
              <span className="font-semibold">Duration:</span> {workout.duration} min
            </p>
            <p>
              <span className="font-semibold">Calories:</span> {workout.calories} kcal
            </p>
            <p>
              <span className="font-semibold">Date:</span> {new Date(workout.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">Loading workout details...</p>
      )}
    </div>
  );
};

export default WorkoutDetails;
