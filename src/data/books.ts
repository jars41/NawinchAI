export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  synopsis: string;
  coverUrl: string;
  trailerUrl?: string;
  pdfUrl?: string;
  videoUrl?: string;
  audioUrl?: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  questions: Question[];
  completed: boolean;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'drag-drop';
  question: string;
  options?: string[];
  correctAnswer: string;
}

export const booksData: Book[] = [
  {
    id: '1984',
    title: '1984',
    author: 'George Orwell',
    category: 'Distopía',
    synopsis: 'En un futuro totalitario, Winston Smith trabaja reescribiendo la historia en el Ministerio de la Verdad. Una poderosa historia sobre control, libertad y resistencia.',
    coverUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400',
    trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    pdfUrl: '/pdfs/1984.pdf',
    lessons: [
      {
        id: 'lesson-1',
        title: 'El Mundo de Oceanía',
        content: 'Aprende sobre el contexto distópico de 1984',
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '¿Qué es el "Gran Hermano"?',
            options: ['Un líder totalitario', 'Un programa de TV', 'Un hermano mayor', 'Una computadora'],
            correctAnswer: 'Un líder totalitario'
          }
        ],
        completed: false
      },
      {
        id: 'lesson-2',
        title: 'Personajes Principales',
        content: 'Conoce a Winston, Julia y O\'Brien',
        questions: [
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Winston trabaja en el Ministerio de _____',
            correctAnswer: 'Verdad'
          }
        ],
        completed: false
      },
      {
        id: 'lesson-3',
        title: 'Neolengua',
        content: 'Explora el lenguaje controlado del régimen',
        questions: [
          {
            id: 'q3',
            type: 'multiple-choice',
            question: '¿Cuál es el propósito de la Neolengua?',
            options: ['Facilitar la comunicación', 'Limitar el pensamiento', 'Aprender idiomas', 'Ninguna de las anteriores'],
            correctAnswer: 'Limitar el pensamiento'
          }
        ],
        completed: false
      }
    ]
  },
  {
    id: 'brave-new-world',
    title: 'Un Mundo Feliz',
    author: 'Aldous Huxley',
    category: 'Distopía',
    synopsis: 'Una sociedad futurista donde la felicidad es manufacturada y la individualidad ha sido eliminada.',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
    lessons: []
  },
  {
    id: 'fahrenheit-451',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    category: 'Distopía',
    synopsis: 'En un futuro donde los libros están prohibidos, un bombero cuyo trabajo es quemar libros comienza a cuestionarse su papel.',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
    lessons: []
  },
  {
    id: 'paco-yunque',
    title: 'Paco Yunque',
    author: 'César Vallejo',
    category: 'Literatura Peruana',
    synopsis: 'Un conmovedor relato sobre Paco Yunque, un niño humilde que enfrenta las injusticias sociales en su primer día de clases. Una obra emblemática que retrata la desigualdad y la amistad en el Perú.',
    coverUrl: '/images/portada-paco.png',
    trailerUrl: '/videos/paco_trailer.mp4',
    pdfUrl: '/pdfs/paco.pdf',
    videoUrl: '/videos/video_paco.mp4',
    audioUrl: '/audios/audio-paco.wav',
    lessons: [
      {
        id: 'paco-lesson-1',
        title: 'Introducción a Paco Yunque',
        content: 'Conoce la historia de Paco y su primer día de clases',
        questions: [
          {
            id: 'pq1',
            type: 'multiple-choice',
            question: '¿Quién es el autor de Paco Yunque?',
            options: ['César Vallejo', 'Mario Vargas Llosa', 'José María Arguedas', 'Ciro Alegría'],
            correctAnswer: 'César Vallejo'
          }
        ],
        completed: false
      },
      {
        id: 'paco-lesson-2',
        title: 'Los Personajes',
        content: 'Explora los personajes principales del relato',
        questions: [
          {
            id: 'pq2',
            type: 'multiple-choice',
            question: '¿Qué representa Paco Fariña en el cuento?',
            options: ['La humildad', 'El abuso de poder', 'La amistad', 'La sabiduría'],
            correctAnswer: 'El abuso de poder'
          }
        ],
        completed: false
      },
      {
        id: 'paco-lesson-3',
        title: 'Temas Sociales',
        content: 'Analiza los temas de desigualdad y justicia social',
        questions: [
          {
            id: 'pq3',
            type: 'fill-blank',
            question: 'Paco Yunque representa a los niños más _____ de la sociedad',
            correctAnswer: 'humildes'
          }
        ],
        completed: false
      }
    ]
  },
  {
    id: 'foundation',
    title: 'Fundación',
    author: 'Isaac Asimov',
    category: 'Ciencia Ficción',
    synopsis: 'Una saga épica sobre el colapso y renacimiento de la civilización galáctica.',
    coverUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400',
    lessons: []
  },
  {
    id: 'dune',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Ciencia Ficción',
    synopsis: 'En el planeta desértico Arrakis, Paul Atreides debe enfrentar su destino en medio de conspiraciones políticas.',
    coverUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400',
    lessons: []
  },
  {
    id: 'neuromancer',
    title: 'Neuromante',
    author: 'William Gibson',
    category: 'Ciencia Ficción',
    synopsis: 'Un hacker deshonrado recibe una última oportunidad en un mundo de ciberespacio y conspiración.',
    coverUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400',
    lessons: []
  },
  {
    id: 'pride-prejudice',
    title: 'Orgullo y Prejuicio',
    author: 'Jane Austen',
    category: 'Clásicos',
    synopsis: 'La historia de Elizabeth Bennet y su complicada relación con el orgulloso Sr. Darcy.',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    lessons: []
  },
  {
    id: 'great-gatsby',
    title: 'El Gran Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'Clásicos',
    synopsis: 'Una historia de amor, sueños y desilusión en la era del jazz americano.',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400',
    lessons: []
  },
  {
    id: 'sherlock',
    title: 'Las Aventuras de Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    category: 'Misterio',
    synopsis: 'El detective más famoso del mundo resuelve casos imposibles con su brillante deducción.',
    coverUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=400',
    lessons: []
  }
];

export const getCategorizedBooks = () => {
  const categories = Array.from(new Set(booksData.map(book => book.category)));
  return categories.map(category => ({
    name: category,
    books: booksData.filter(book => book.category === category)
  }));
};

export const getBookById = (id: string) => {
  // Primero buscar en libros locales
  const localBook = booksData.find(book => book.id === id);
  if (localBook) return localBook;
  
  // Si no se encuentra, buscar en Google Drive
  const { getDriveBookById, convertDriveBookToBook } = require('@/services/googleDriveService');
  const driveBook = getDriveBookById(id);
  if (driveBook) return convertDriveBookToBook(driveBook);
  
  return undefined;
};
