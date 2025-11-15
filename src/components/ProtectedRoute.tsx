import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requirePreferences?: boolean;
}

const ProtectedRoute = ({ children, requirePreferences = false }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requirePreferences && !user?.hasCompletedPreferences) {
    return <Navigate to="/preferences" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

