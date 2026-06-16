import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Posts from './pages/Posts';
import ProtectedRoute from "./pages/ProtectedRoute"

export default function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route path='/posts' element={
          <ProtectedRoute>
            <Posts />
          </ProtectedRoute>
        } />
        <Route path='/auth' element={<Auth />} />
        <Route path='/admin' element={<Admin />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}
