import React, { createContext, useState, useEffect } from 'react';
import API from '../services/api';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    const { data } = await API.get('/workouts');
    setWorkouts(data);
  };

  const addWorkout = async (workout) => {
    const { data } = await API.post('/workouts', workout);
    setWorkouts((prev) => [...prev, data]);
  };

  const deleteWorkout = async (id) => {
    await API.delete(`/workouts/${id}`);
    setWorkouts((prev) => prev.filter((w) => w._id !== id));
  };

  useEffect(() => { fetchWorkouts(); }, []);

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, deleteWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};
