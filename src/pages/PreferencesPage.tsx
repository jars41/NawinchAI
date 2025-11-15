import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, Genre } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { BookOpen, Heart, Sword, Search as SearchIcon, Sparkles, Feather, Drama } from 'lucide-react';

interface GenreOption {
  id: Genre;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const genreOptions: GenreOption[] = [
  {
    id: 'romanticas',
    label: 'Románticas',
    icon: <Heart className="h-6 w-6" />,
    description: 'Historias de amor y pasión',
  },
  {
    id: 'accion',
    label: 'Acción',
    icon: <Sword className="h-6 w-6" />,
    description: 'Aventuras emocionantes',
  },
  {
    id: 'intriga',
    label: 'Intriga',
    icon: <SearchIcon className="h-6 w-6" />,
    description: 'Misterio y suspenso',
  },
  {
    id: 'ficticia',
    label: 'Ficticia',
    icon: <Sparkles className="h-6 w-6" />,
    description: 'Mundos imaginarios',
  },
  {
    id: 'poesia',
    label: 'Poesía',
    icon: <Feather className="h-6 w-6" />,
    description: 'Versos y emociones',
  },
  {
    id: 'dramatico',
    label: 'Dramático',
    icon: <Drama className="h-6 w-6" />,
    description: 'Historias intensas',
  },
];

const PreferencesPage = () => {
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const { setUserPreferences } = useAuth();
  const navigate = useNavigate();

  const toggleGenre = (genreId: Genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId]
    );
    setError('');
  };

  const handleSubmit = () => {
    if (selectedGenres.length === 0) {
      setError('Por favor, selecciona al menos un tipo de historia');
      return;
    }

    setUserPreferences(selectedGenres);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Card className="border-border bg-card shadow-[var(--shadow-card)]">
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto flex flex-col items-center justify-center gap-4">
              <img 
                src="/images/logo-imagen.png" 
                alt="Logo" 
                className="h-32 w-auto"
              />
              <img 
                src="/images/logo-texto.png" 
                alt="ÑawinchAI - Lee y Descubre" 
                className="h-16 w-auto"
              />
            </div>
            <div>
              <CardTitle className="text-3xl font-bold text-foreground">
                ¿Qué tipo de historias te gustan?
              </CardTitle>
              <CardDescription className="text-base mt-2 text-muted-foreground">
                Selecciona una o más opciones para personalizar tu experiencia
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {genreOptions.map((genre) => (
                <div
                  key={genre.id}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleGenre(genre.id);
                  }}
                  className={`
                    relative group cursor-pointer rounded-lg border-2 p-6 transition-all duration-300
                    ${
                      selectedGenres.includes(genre.id)
                        ? 'border-primary bg-primary/10 shadow-[var(--shadow-elevated)]'
                        : 'border-border bg-card hover:border-primary/50 hover:bg-secondary/50'
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`
                        flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors
                        ${
                          selectedGenres.includes(genre.id)
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-secondary-foreground group-hover:bg-primary/20'
                        }
                      `}
                    >
                      {genre.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Label
                          htmlFor={genre.id}
                          className="text-lg font-semibold text-foreground cursor-pointer pointer-events-none"
                        >
                          {genre.label}
                        </Label>
                        <Checkbox
                          id={genre.id}
                          checked={selectedGenres.includes(genre.id)}
                          onCheckedChange={() => toggleGenre(genre.id)}
                          className="ml-auto pointer-events-none"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground pointer-events-none">
                        {genre.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {error && (
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/50">
                <p className="text-sm text-destructive text-center">{error}</p>
              </div>
            )}

            <div className="flex flex-col items-center gap-4 pt-4">
              <Button
                onClick={handleSubmit}
                size="lg"
                className="w-full max-w-md h-12 text-base font-semibold shadow-[var(--shadow-elevated)] hover:shadow-[var(--shadow-elevated)] transition-all"
              >
                Continuar
                {selectedGenres.length > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-primary-foreground/20 rounded-full text-sm">
                    {selectedGenres.length} seleccionada{selectedGenres.length !== 1 ? 's' : ''}
                  </span>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PreferencesPage;

