import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDebouncedSearch } from '../hooks/useDebouncedSearch';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearchTerm = useDebouncedSearch(searchInput, 500);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search or API call with the debounced search term
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  async function handleLogout() {
    try {
      await logout();
      console.log('user successfully logged out');
      navigate('/auth');
    } catch (error) {
      console.log('Error while loging out user', error);
    }
  }
  return (
    <nav className='bg-gray-800 p-4 text-white flex items-center justify-between'>
      <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-600 via-blue-800 to-amber-800 uppercase animate-pulse'>
        {user ? user.name.toUpperCase().substring(0, 7) + '...' : 'Blogger App'}
      </h1>

      <section className='flex items-center w-sm'>
        <input
          type='Search for anything ...'
          placeholder='Search ...'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='p-2 grow italic rounded-full border'
        />
      </section>
      <div className='flex items-center'>
        <Link
          to='/'
          className='ml-4 hover:text-gray-300'
        >
          Home
        </Link>
        <Link
          to='/posts'
          className='ml-4 hover:text-gray-300'
        >
          Posts
        </Link>
        <Link
          to='/auth'
          className='ml-4 hover:text-gray-300'
        >
          Auth
        </Link>
        <Link
          to='/admin'
          className='ml-4 hover:text-gray-300'
        >
          Admin
        </Link>
        {user && (
          <Button
            onClick={handleLogout}
            variant='destructive'
            className='cursor-pointer'
          >
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
}
