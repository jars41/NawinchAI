import { useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { getBookById } from "@/data/books";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const LessonPage = () => {
  const { lessonId } = useParams();
  const [searchParams] = useSearchParams();
  const bookId = searchParams.get('bookId');
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const book = getBookById(bookId || '');
  const lesson = book?.lessons.find(l => l.id === lessonId);
  const lessonIndex = book?.lessons.findIndex(l => l.id === lessonId) || 0;
  const progress = ((lessonIndex + 1) / (book?.lessons.length || 1)) * 100;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  if (!lesson || !book) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <p className="text-foreground">Lección no encontrada</p>
      </div>
    );
  }

  const currentQuestion = lesson.questions[currentQuestionIndex];

  const handleCheck = () => {
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      toast({
        title: "¡Correcto!",
        description: "Excelente trabajo",
      });
    } else {
      toast({
        title: "Incorrecto",
        description: "Inténtalo de nuevo",
        variant: "destructive",
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < lesson.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer('');
      setShowFeedback(false);
    } else {
      // Última pregunta completada
      const nextLesson = book.lessons[lessonIndex + 1];
      if (nextLesson) {
        navigate(`/lesson/${nextLesson.id}?bookId=${book.id}`);
      } else {
        navigate(`/summary?bookId=${book.id}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto max-w-3xl px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Lección {lessonIndex + 1} de {book.lessons.length}
          </p>
        </div>

        {/* Content Area */}
        <div className="bg-card rounded-lg p-8 shadow-card border border-border mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            {lesson.title}
          </h2>
          
          <p className="text-foreground mb-8 leading-relaxed">
            {lesson.content}
          </p>

          {/* Question */}
          <div className="bg-secondary/50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium text-foreground mb-4">
              {currentQuestion.question}
            </h3>

            {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <div key={option} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            )}

            {currentQuestion.type === 'fill-blank' && (
              <Input
                value={selectedAnswer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                placeholder="Escribe tu respuesta..."
                className="w-full"
              />
            )}
          </div>

          {showFeedback && (
            <div className={`p-4 rounded-lg mb-6 ${isCorrect ? 'bg-primary/20 border border-primary' : 'bg-destructive/20 border border-destructive'}`}>
              <p className={`font-medium ${isCorrect ? 'text-primary' : 'text-destructive'}`}>
                {isCorrect ? '¡Correcto! Excelente trabajo.' : 'Incorrecto. Inténtalo de nuevo.'}
              </p>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          {!showFeedback ? (
            <Button
              onClick={handleCheck}
              disabled={!selectedAnswer}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12"
            >
              Comprobar
            </Button>
          ) : isCorrect ? (
            <Button
              onClick={handleNext}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12"
            >
              {currentQuestionIndex < lesson.questions.length - 1 ? 'Siguiente' : 'Continuar'}
            </Button>
          ) : (
            <Button
              onClick={() => {
                setShowFeedback(false);
                setSelectedAnswer('');
              }}
              size="lg"
              variant="secondary"
              className="px-12"
            >
              Intentar de Nuevo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
