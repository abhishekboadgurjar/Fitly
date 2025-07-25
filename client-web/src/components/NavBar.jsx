import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const NavBar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className='p-4 bg-gray-900 text-white shadow-md'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link to='/' className='text-2xl font-bold text-blue-400 hover:text-blue-300 transition'>
          Fitly
        </Link>
        <div className='flex items-center space-x-6'>
          {user ? (
            <>
              <Link to='/' className='hover:text-blue-300 transition'>Home</Link>
              <Link to='/add' className='hover:text-blue-300 transition'>Add Workout</Link>
              <Link to='/history' className='hover:text-blue-300 transition'>History</Link>
              <Link to='/profile' className='hover:text-blue-300 transition'>Profile</Link>
              <button
                onClick={logout}
                className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded transition'
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to='/login' className='hover:text-blue-300 transition'>Login</Link>
              <Link
                to='/register'
                className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded transition'
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
