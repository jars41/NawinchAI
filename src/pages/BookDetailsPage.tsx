import { useParams, useNavigate } from "react-router-dom";
import { getBookById } from "@/data/books";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle2, Circle } from "lucide-react";
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
        <div className="container mx-auto max-w-5xl text-center">
          <Button
            size="lg"
            onClick={() => {
              if (book.lessons.length > 0) {
                navigate(`/lesson/${book.lessons[0].id}?bookId=${book.id}`);
              }
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto"
          >
            Comenzar Preámbulo Interactivo
          </Button>
        </div>
      </div>

      {/* Book Information */}
      <div className="px-4 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-card rounded-lg p-8 shadow-card border border-border">
            <h1 className="text-4xl font-bold text-foreground mb-2">{book.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">por {book.author}</p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Sinopsis</h2>
              <p className="text-foreground leading-relaxed">{book.synopsis}</p>
            </div>

            {book.lessons.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Lecciones del Preámbulo</h2>
                <div className="space-y-3">
                  {book.lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer"
                      onClick={() => navigate(`/lesson/${lesson.id}?bookId=${book.id}`)}
                    >
                      {lesson.completed ? (
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-foreground">
                          Lección {index + 1}: {lesson.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
