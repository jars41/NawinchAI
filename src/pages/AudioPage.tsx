import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { 
  ChevronLeft, 
  Headphones, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward,
  Volume2,
  VolumeX
} from 'lucide-react';
import { getBookById } from '@/data/books';

const AudioPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = getBookById(id || '');
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  if (!book) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <p className="text-foreground">Libro no encontrado</p>
      </div>
    );
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newTime = value[0];
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newVolume = value[0];
    audio.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume || 0.5;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const skipBackward = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, audio.currentTime - 10);
  };

  const skipForward = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(duration, audio.currentTime + 10);
  };

  const changePlaybackRate = (rate: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.playbackRate = rate;
    setPlaybackRate(rate);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    if (duration === 0) return 0;
    return (currentTime / duration) * 100;
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(`/book/${book.id}`)}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Volver al libro
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border bg-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-48 h-48 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={book.coverUrl} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Headphones className="h-6 w-6" />
                {book.title}
              </CardTitle>
              <CardDescription className="text-lg">por {book.author}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Audio Element */}
              <audio ref={audioRef} src={book.audioUrl || '/audios/audio-paco.wav'}>
                Tu navegador no soporta el elemento de audio.
              </audio>

              {/* Progress Bar */}
              <div className="space-y-2">
                <Slider
                  value={[currentTime]}
                  min={0}
                  max={duration || 100}
                  step={0.1}
                  onValueChange={handleSeek}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Progress Percentage */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-medium text-foreground">
                    Progreso: {getProgressPercentage().toFixed(1)}%
                  </span>
                </div>
              </div>

              {/* Main Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={skipBackward}
                  className="h-12 w-12"
                >
                  <SkipBack className="h-5 w-5" />
                </Button>

                <Button
                  size="icon"
                  onClick={togglePlayPause}
                  className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90"
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8" />
                  ) : (
                    <Play className="h-8 w-8 ml-1" />
                  )}
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={skipForward}
                  className="h-12 w-12"
                >
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-4 px-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </Button>
                <Slider
                  value={[isMuted ? 0 : volume]}
                  min={0}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                  className="flex-1"
                />
              </div>

              {/* Playback Speed */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-center text-foreground">
                  Velocidad de reproducción
                </p>
                <div className="flex justify-center gap-2">
                  {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                    <Button
                      key={rate}
                      variant={playbackRate === rate ? "default" : "outline"}
                      size="sm"
                      onClick={() => changePlaybackRate(rate)}
                      className="min-w-[60px]"
                    >
                      {rate}x
                    </Button>
                  ))}
                </div>
              </div>

              {/* Info Card */}
              <Card className="bg-secondary/50 border-border">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">🎧</span>
                      <div>
                        <p className="font-medium text-foreground">Modo Audiolibro</p>
                        <p className="text-sm text-muted-foreground">
                          Disfruta de la narración completa de "{book.title}". 
                          Puedes ajustar la velocidad y pausar en cualquier momento.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="text-2xl">💡</span>
                      <div>
                        <p className="font-medium text-foreground">Consejo</p>
                        <p className="text-sm text-muted-foreground">
                          Usa los botones de salto (⏪ ⏩) para retroceder o avanzar 10 segundos.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Synopsis */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Sinopsis</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {book.synopsis}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AudioPage;

