import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <img 
            src="/images/nhawichai.png" 
            alt="Logo" 
            className="h-48 w-auto opacity-50"
          />
        </div>
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <p className="text-xl text-muted-foreground">Página no encontrada</p>
        <a href="/" className="inline-block text-primary underline hover:text-primary/90 text-lg">
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
