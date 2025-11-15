import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getBookById } from "@/data/books";
import { Button } from "@/components/ui/button";
import { Mic, Square } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const SummaryPage = () => {
  const [searchParams] = useSearchParams();
  const bookId = searchParams.get('bookId');
  const book = getBookById(bookId || '');
  
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [feedback, setFeedback] = useState('');
  const { toast } = useToast();

  const handleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      toast({
        title: "Grabación iniciada",
        description: "Comienza a hablar sobre lo que aprendiste",
      });
      
      // Simular grabación y transcripción
      setTimeout(() => {
        setIsRecording(false);
        setTranscription("En 1984, he aprendido sobre un mundo distópico donde el Gran Hermano controla todo. Winston Smith es el protagonista que trabaja en el Ministerio de la Verdad reescribiendo la historia. La Neolengua es un lenguaje diseñado para limitar el pensamiento y prevenir la rebelión. El régimen totalitario usa la vigilancia constante y el control del lenguaje para mantener el poder absoluto.");
        toast({
          title: "Grabación completada",
          description: "Tu audio ha sido transcrito",
        });
      }, 3000);
    } else {
      setIsRecording(false);
    }
  };

  const handleSubmitFeedback = () => {
    setFeedback(`Excelente resumen sobre "${book?.title}". Has capturado los conceptos clave:

✓ Identificaste correctamente el contexto distópico
✓ Mencionaste al Gran Hermano y su rol en el control social
✓ Explicaste el propósito de la Neolengua
✓ Comprendiste el papel de Winston Smith

**Sugerencias para profundizar:**
- Podrías explorar más sobre el concepto de "doblepensar"
- Considera el significado de la habitación 101
- Reflexiona sobre las conexiones con nuestra sociedad actual

**Puntuación: 9/10** - ¡Muy buen trabajo! Estás listo para comenzar la lectura.`);

    toast({
      title: "Retroalimentación recibida",
      description: "Revisa los comentarios de la IA",
    });
  };

  if (!book) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <p className="text-foreground">Libro no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            ¡Preámbulo Completado!
          </h1>
          <p className="text-lg text-muted-foreground">
            Ahora graba un resumen de audio de lo que aprendiste sobre "{book.title}"
          </p>
        </div>

        {/* Recording Section */}
        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <div className="flex flex-col items-center gap-6">
            <Button
              onClick={handleRecording}
              size="lg"
              className={`w-24 h-24 rounded-full ${
                isRecording 
                  ? 'bg-destructive hover:bg-destructive/90 animate-pulse' 
                  : 'bg-primary hover:bg-primary/90'
              }`}
            >
              {isRecording ? (
                <Square className="h-10 w-10" />
              ) : (
                <Mic className="h-10 w-10" />
              )}
            </Button>
            
            <p className="text-foreground font-medium">
              {isRecording ? 'Grabando...' : 'Presiona para grabar'}
            </p>
          </div>
        </div>

        {/* Transcription Section */}
        {transcription && (
          <div className="bg-card rounded-lg p-6 shadow-card border border-border mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Tu Transcripción
            </h2>
            <Textarea
              value={transcription}
              onChange={(e) => setTranscription(e.target.value)}
              className="min-h-[150px] bg-secondary"
              placeholder="La transcripción aparecerá aquí..."
            />
            
            {transcription && !feedback && (
              <Button
                onClick={handleSubmitFeedback}
                className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                size="lg"
              >
                Enviar para Retroalimentación
              </Button>
            )}
          </div>
        )}

        {/* Feedback Section */}
        {feedback && (
          <div className="bg-card rounded-lg p-6 shadow-card border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Retroalimentación de la IA
            </h2>
            <div className="prose prose-invert max-w-none">
              <div className="text-foreground whitespace-pre-wrap leading-relaxed">
                {feedback}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryPage;
