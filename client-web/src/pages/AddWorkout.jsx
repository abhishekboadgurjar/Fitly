import React, { useState, useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';

const AddWorkout = () => {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');
  const { addWorkout } = useContext(WorkoutContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout({ type, duration, calories });
    setType('');
    setDuration('');
    setCalories('');
  };

  return (
    <div className='p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 mt-8'>
      <h2 className='text-3xl font-semibold text-center text-purple-700 mb-6'>Add Workout</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <input
          type='text'
          placeholder='Workout Type'
          value={type}
          onChange={(e) => setType(e.target.value)}
          className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition'
          required
        />
        <input
          type='number'
          placeholder='Duration (min)'
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition'
          required
        />
        <input
          type='number'
          placeholder='Calories Burned'
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition'
          required
        />
        <button
          type='submit'
          className='bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-lg transition duration-200'
        >
          Add Workout
        </button>
      </form>
    </div>
  );
};

export default AddWorkout;
