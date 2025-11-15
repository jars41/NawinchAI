import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { getBookById } from '@/data/books';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configurar worker de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Question {
  id: number;
  instruction: string;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  pageNumber: number;
}

// Preguntas específicas para Paco Yunque
const pacaYunqueQuestions: Question[] = [
  {
    id: 1,
    instruction: "Humberto llama a Paco 'serrano' de forma despectiva.",
    question: "¿Qué está tratando de hacer Humberto al usar esa palabra?",
    options: [
      { id: 'A', text: 'Saludarlo amablemente como a un amigo.' },
      { id: 'B', text: 'Burlarse de él y hacerlo sentir inferior por venir de la sierra (los Andes).' },
      { id: 'C', text: 'Preguntarle su nombre de una forma educada.' },
    ],
    correctAnswer: 'B',
    pageNumber: 3,
  },
  {
    id: 2,
    instruction: "Paco Yunque se siente muy nervioso en su primer día de clases.",
    question: "¿Por qué crees que Paco se siente así?",
    options: [
      { id: 'A', text: 'Porque es su primer día y todo es nuevo para él.' },
      { id: 'B', text: 'Porque quiere ir a jugar afuera.' },
      { id: 'C', text: 'Porque tiene hambre.' },
    ],
    correctAnswer: 'A',
    pageNumber: 7,
  },
];

const ReadingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = getBookById(id || '');
  
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [showQuestion, setShowQuestion] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [answered, setAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  if (!book) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <p className="text-foreground">Libro no encontrado</p>
      </div>
    );
  }

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      checkForQuestion(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
      checkForQuestion(pageNumber + 1);
    }
  };

  const checkForQuestion = (page: number) => {
    // Seleccionar preguntas según el libro
    const bookQuestions = book.id === 'paco-yunque' ? pacaYunqueQuestions : [];
    const question = bookQuestions.find(q => q.pageNumber === page);
    
    if (question) {
      setCurrentQuestion(question);
      setShowQuestion(true);
      setAnswered(false);
      setSelectedAnswer('');
      setIsCorrect(false);
    } else {
      setShowQuestion(false);
      setCurrentQuestion(null);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || !currentQuestion) return;
    
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setAnswered(true);
  };

  const handleContinueReading = () => {
    setShowQuestion(false);
    setCurrentQuestion(null);
    setSelectedAnswer('');
    setAnswered(false);
    setIsCorrect(false);
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Panel de lectura del PDF */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {book.title}
                </CardTitle>
                <CardDescription>por {book.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  {/* Visor PDF */}
                  <div className="w-full bg-secondary/20 rounded-lg overflow-hidden flex items-center justify-center min-h-[600px]">
                    {book.pdfUrl ? (
                      <Document
                        file={book.pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        className="flex justify-center"
                      >
                        <Page
                          pageNumber={pageNumber}
                          renderTextLayer={true}
                          renderAnnotationLayer={true}
                          className="max-w-full"
                          width={Math.min(window.innerWidth * 0.5, 800)}
                        />
                      </Document>
                    ) : (
                      <div className="text-center p-12">
                        <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">PDF no disponible</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Simulación de lectura para {book.title}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Controles de navegación */}
                  <div className="flex items-center justify-between w-full">
                    <Button
                      onClick={goToPrevPage}
                      disabled={pageNumber <= 1}
                      variant="outline"
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Anterior
                    </Button>
                    
                    <p className="text-sm text-muted-foreground">
                      Página {pageNumber} {numPages > 0 ? `de ${numPages}` : ''}
                    </p>
                    
                    <Button
                      onClick={goToNextPage}
                      disabled={pageNumber >= numPages && numPages > 0}
                      variant="outline"
                    >
                      Siguiente
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Panel de preguntas */}
          <div className="lg:col-span-1">
            {showQuestion && currentQuestion ? (
              <Card className="border-primary bg-card sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl">Pregunta de Comprensión</CardTitle>
                  <CardDescription className="text-sm italic">
                    {currentQuestion.instruction}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="font-semibold text-foreground mb-4">
                      {currentQuestion.question}
                    </p>

                    <RadioGroup
                      value={selectedAnswer}
                      onValueChange={setSelectedAnswer}
                      disabled={answered}
                      className="space-y-3"
                    >
                      {currentQuestion.options.map((option) => (
                        <div
                          key={option.id}
                          className={`flex items-start space-x-3 p-3 rounded-lg border-2 transition-all ${
                            answered
                              ? option.id === currentQuestion.correctAnswer
                                ? 'border-green-500 bg-green-50 dark:bg-green-950'
                                : option.id === selectedAnswer
                                ? 'border-red-500 bg-red-50 dark:bg-red-950'
                                : 'border-border'
                              : 'border-border hover:border-primary'
                          }`}
                        >
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label
                            htmlFor={option.id}
                            className="flex-1 cursor-pointer font-normal"
                          >
                            <span className="font-semibold">({option.id})</span> {option.text}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {!answered ? (
                    <Button
                      onClick={handleSubmitAnswer}
                      disabled={!selectedAnswer}
                      className="w-full"
                    >
                      Verificar Respuesta
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div
                        className={`p-4 rounded-lg border-2 ${
                          isCorrect
                            ? 'border-green-500 bg-green-50 dark:bg-green-950 text-green-900 dark:text-green-100'
                            : 'border-red-500 bg-red-50 dark:bg-red-950 text-red-900 dark:text-red-100'
                        }`}
                      >
                        <p className="font-semibold">
                          {isCorrect ? '¡Correcto! 🎉' : 'Respuesta incorrecta'}
                        </p>
                        <p className="text-sm mt-1">
                          {isCorrect
                            ? 'Has comprendido bien el texto.'
                            : `La respuesta correcta es (${currentQuestion.correctAnswer}).`}
                        </p>
                      </div>
                      <Button onClick={handleContinueReading} className="w-full">
                        Continuar Leyendo
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="border-border bg-card sticky top-24">
                <CardHeader>
                  <CardTitle>Lectura Activa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Continúa leyendo. Aparecerán preguntas de comprensión en momentos clave
                    del texto para ayudarte a reflexionar sobre lo que lees.
                  </p>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm font-medium text-foreground">
                      📚 Progreso de lectura
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Página {pageNumber} {numPages > 0 ? `de ${numPages}` : ''}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPage;

