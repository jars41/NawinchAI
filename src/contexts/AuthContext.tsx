import React, { createContext, useContext, useState, useEffect } from 'react';

export type Genre = 'romanticas' | 'accion' | 'intriga' | 'ficticia' | 'poesia' | 'dramatico';

interface User {
  dni: string;
  name: string;
  preferences?: Genre[];
  hasCompletedPreferences?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (dni: string, password: string) => boolean;
  logout: () => void;
  setUserPreferences: (preferences: Genre[]) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Usuarios de ejemplo - en producción esto vendría de una API
const MOCK_USERS = [
  { dni: '12345678', password: 'password123', name: 'Juan Pérez' },
  { dni: '87654321', password: 'admin123', name: 'María García' },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Verificar si hay una sesión guardada al cargar
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (dni: string, password: string): boolean => {
    const foundUser = MOCK_USERS.find(
      (u) => u.dni === dni && u.password === password
    );

    if (foundUser) {
      const userData = { dni: foundUser.dni, name: foundUser.name };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const setUserPreferences = (preferences: Genre[]) => {
    if (user) {
      const updatedUser = {
        ...user,
        preferences,
        hasCompletedPreferences: true,
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUserPreferences, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

