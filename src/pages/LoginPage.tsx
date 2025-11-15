import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { BookOpen, Lock, IdCard } from 'lucide-react';

const LoginPage = () => {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validación básica
    if (!dni || !password) {
      setError('Por favor, complete todos los campos');
      setIsLoading(false);
      return;
    }

    if (dni.length !== 8) {
      setError('El DNI debe tener 8 dígitos');
      setIsLoading(false);
      return;
    }

    // Simular un pequeño delay como si fuera una llamada a API
    setTimeout(() => {
      const success = login(dni, password);
      
      if (success) {
        // Redirigir a preferencias después del login
        navigate('/preferences');
      } else {
        setError('DNI o contraseña incorrectos');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-[var(--shadow-card)] border-border bg-card">
        <CardHeader className="space-y-3 text-center">
          <div className="mx-auto flex items-center justify-center">
            <img 
              src="/images/nhawichai.png" 
              alt="Logo" 
              className="h-40 w-auto"
            />
          </div>
          <CardDescription className="text-base">
            Inicia sesión para acceder a la plataforma de aprendizaje
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="dni" className="text-sm font-medium">
                DNI
              </Label>
              <div className="relative">
                <IdCard className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  id="dni"
                  type="text"
                  placeholder="12345678"
                  value={dni}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 8);
                    setDni(value);
                  }}
                  maxLength={8}
                  className="pl-10"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  disabled={isLoading}
                />
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm font-medium text-center mb-2">Usuarios de prueba:</p>
            <div className="text-xs space-y-1 text-muted-foreground">
              <p>• DNI: 12345678 - Contraseña: password123</p>
              <p>• DNI: 87654321 - Contraseña: admin123</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;

