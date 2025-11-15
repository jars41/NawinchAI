import { useParams, useNavigate } from "react-router-dom";
import { getBookById } from "@/data/books";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Headphones, Video } from "lucide-react";
import { useState } from "react";

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = getBookById(id || '');
  const [showVideo, setShowVideo] = useState(true);

  if (!book) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <p className="text-foreground">Libro no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Video Trailer Section */}
      {showVideo && (
        <div className="pt-20 pb-8 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-elevated">
              {book.trailerUrl ? (
                <video
                  controls
                  className="w-full h-full"
                  poster={book.coverUrl}
                >
                  <source src={book.trailerUrl} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-card">
                  <div className="text-center">
                    <Play className="h-20 w-20 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Tráiler próximamente</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="px-4 pb-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              size="lg"
              onClick={() => navigate(`/reading/${book.id}`)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto flex items-center justify-center gap-3"
            >
              <BookOpen className="h-6 w-6" />
              Empezar Lectura
            </Button>

            <Button
              size="lg"
              onClick={() => navigate(`/audio/${book.id}`)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto flex items-center justify-center gap-3"
            >
              <Headphones className="h-6 w-6" />
              Empezar Audiolibro
            </Button>

            <Button
              size="lg"
              onClick={() => navigate(`/video/${book.id}`)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto flex items-center justify-center gap-3"
            >
              <Video className="h-6 w-6" />
              Empezar Video
            </Button>
          </div>
        </div>
      </div>

      {/* Book Information */}
      <div className="px-4 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-card rounded-lg p-8 shadow-card border border-border">
            <h1 className="text-4xl font-bold text-foreground mb-2">{book.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">por {book.author}</p>
            
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Sinopsis</h2>
              <p className="text-foreground leading-relaxed">{book.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
