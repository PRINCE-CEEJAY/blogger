import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Posts from './pages/Posts';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/auth'
        element={<Auth />}
      />
      <Route
        path='*'
        element={<NotFound />}
      />

      {/* PROTECTED ROUTES */}
      <Route element={<ProtectedRoute />}>
        <Route
          path='/posts'
          element={<Posts />}
        />
        <Route
          path='/admin'
          element={<Admin />}
        />
      </Route>
    </Routes>
  );
}
