import { useNavigate } from 'react-router-dom';
import Button from '@components/Button';
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl tex-center font-bold animate-bounce'>Sorry Page not found</h1>
      <Button onClick={() => navigate('/')}>Go Home</Button>
    </div>
  );
}
