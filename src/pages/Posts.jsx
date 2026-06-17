import { useAuth } from '@/context/AuthContext';

export default function Posts() {
  const { user } = useAuth();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-black/30'>
      <h1 className='text-4xl font-bold'>Posts Page</h1>
      <h1 className='mt-12 font-bold text-3xl text-blue-800'>
        {user && `Welcome dear ${user.name.toUpperCase()}`}
      </h1>
    </div>
  );
}
