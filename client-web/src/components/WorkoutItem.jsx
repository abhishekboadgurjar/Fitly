import React from 'react';

const WorkoutItem = ({ workout, onDelete }) => (
  <div className='p-6 bg-white rounded-2xl shadow-md border border-gray-200 mb-6 transition hover:shadow-lg'>
    <h2 className='text-2xl font-semibold text-gray-800 mb-2'>{workout.type}</h2>
    <p className='text-gray-600'>Duration: <span className='font-medium'>{workout.duration} min</span></p>
    <p className='text-gray-600'>Calories Burned: <span className='font-medium'>{workout.calories}</span></p>
    <button
      onClick={() => onDelete(workout._id)}
      className='mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200'
    >
      Delete
    </button>
  </div>
);

export default WorkoutItem;
