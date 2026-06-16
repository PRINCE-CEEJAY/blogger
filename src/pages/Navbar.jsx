import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDebouncedSearch } from '../hooks/useDebouncedSearch';

export default function Navbar() {
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearchTerm = useDebouncedSearch(searchInput, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search or API call with the debounced search term
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);
  return (
    <nav className='bg-gray-500 p-4 text-white flex items-center justify-between'>
      <h1 className='text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-600 via-blue-800 to-amber-800 uppercase animate-pulse'>
        Ceejay Blogger
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
      </div>
    </nav>
  );
}
