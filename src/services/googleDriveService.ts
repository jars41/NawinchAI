import { Genre } from '@/contexts/AuthContext';

// ID de la carpeta de Google Drive
const DRIVE_FOLDER_ID = '1WD95eD_esnBroT5qlEwgLQksC3c_ELUo';

export interface DriveBook {
  id: string;
  title: string;
  author: string;
  category: string;
  genres: Genre[];
  fileId: string;
  fileName: string;
  fileSize: string;
  driveUrl: string;
  downloadUrl: string;
  synopsis: string;
}

// Mapeo de los libros disponibles en Google Drive
// Basado en: https://drive.google.com/drive/folders/1WD95eD_esnBroT5qlEwgLQksC3c_ELUo
export const driveBooksData: DriveBook[] = [
  {
    id: 'paco-yunque-drive',
    title: 'Paco Yunque y Otros Cuentos',
    author: 'César Vallejo',
    category: 'Literatura Peruana',
    genres: ['dramatico', 'ficticia'],
    fileId: '40-CESAR_VALLEJO_PACO_YUNQUE_Y_OTROS_CUENTO.pdf',
    fileName: '40-CESAR_VALLEJO_PACO_YUNQUE_Y_OTROS_CUENTO.pdf',
    fileSize: '901 KB',
    driveUrl: `https://drive.google.com/file/d/1WD95eD_esnBroT5qlEwgLQksC3c_ELUo/view`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=FILE_ID`,
    synopsis: 'Colección de cuentos de César Vallejo que incluye su obra más emblemática "Paco Yunque", un relato conmovedor sobre la desigualdad social y las injusticias que enfrenta un niño humilde en su primer día de clases.'
  },
  {
    id: 'tradiciones-peruanas-drive',
    title: 'Cien Tradiciones Peruanas',
    author: 'Ricardo Palma',
    category: 'Literatura Peruana',
    genres: ['ficticia', 'dramatico'],
    fileId: 'Cien_tradiciones_peruanas_Ricardo_Palma.pdf',
    fileName: 'Cien_tradiciones_peruanas_Ricardo_Palma.pdf',
    fileSize: '12.1 MB',
    driveUrl: `https://drive.google.com/file/d/FILE_ID/view`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=FILE_ID`,
    synopsis: 'Colección de relatos históricos y anecdóticos que recrean episodios de la historia del Perú desde la época colonial hasta el siglo XIX. Ricardo Palma mezcla historia y ficción con humor e ironía.'
  },
  {
    id: 'romanticismo-vallejo-drive',
    title: 'El Romanticismo en la Poesía Castellana',
    author: 'César Vallejo',
    category: 'Ensayo Literario',
    genres: ['poesia'],
    fileId: 'el romanticismo en la poesia castellana - Cesar Vallejo.pdf',
    fileName: 'el romanticismo en la poesia castellana - Cesar Vallejo.pdf',
    fileSize: '3.8 MB',
    driveUrl: `https://drive.google.com/file/d/FILE_ID/view`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=FILE_ID`,
    synopsis: 'Ensayo de César Vallejo sobre el movimiento romántico en la poesía española y su influencia en la literatura latinoamericana. Una reflexión profunda sobre la expresión poética y el sentimiento.'
  },
  {
    id: 'novelas-cuentos-vallejo-drive',
    title: 'Novelas y Cuentos Completos',
    author: 'César Vallejo',
    category: 'Literatura Peruana',
    genres: ['ficticia', 'dramatico'],
    fileId: 'Novelas y cuentos completos - Cesar Vallejo.pdf',
    fileName: 'Novelas y cuentos completos - Cesar Vallejo.pdf',
    fileSize: '18.7 MB',
    driveUrl: `https://drive.google.com/file/d/FILE_ID/view`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=FILE_ID`,
    synopsis: 'Compilación completa de la obra narrativa de César Vallejo, uno de los más grandes poetas y escritores peruanos. Incluye sus novelas y cuentos que exploran la condición humana y la realidad social.'
  },
  {
    id: 'obra-poetica-vallejo-drive',
    title: 'Obra Poética Completa',
    author: 'César Vallejo',
    category: 'Poesía Peruana',
    genres: ['poesia'],
    fileId: 'Obra poetica completa - Cesar Vallejo.pdf',
    fileName: 'Obra poetica completa - Cesar Vallejo.pdf',
    fileSize: '34.9 MB',
    driveUrl: `https://drive.google.com/file/d/FILE_ID/view`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=FILE_ID`,
    synopsis: 'Colección completa de la poesía de César Vallejo, considerado uno de los grandes innovadores de la poesía del siglo XX. Incluye "Los Heraldos Negros", "Trilce", "Poemas Humanos" y más.'
  },
  {
    id: 'paginas-libres-drive',
    title: 'Páginas Libres y Horas de Lucha',
    author: 'Manuel González Prada',
    category: 'Ensayo Peruano',
    genres: ['dramatico'],
    fileId: 'Paginas_libres_Horas_de_lucha.pdf',
    fileName: 'Paginas_libres_Horas_de_lucha.pdf',
    fileSize: '10.7 MB',
    driveUrl: `https://drive.google.com/file/d/FILE_ID/view`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=FILE_ID`,
    synopsis: 'Colección de ensayos críticos de González Prada, precursor del pensamiento moderno en el Perú. Textos combativos que cuestionan la sociedad, la religión y el sistema político de su época.'
  },
  {
    id: 'poemas-humanos-drive',
    title: 'Poemas Humanos',
    author: 'César Vallejo',
    category: 'Poesía Peruana',
    genres: ['poesia'],
    fileId: 'poemas humanos - Cesar vallejo.pdf',
    fileName: 'poemas humanos - Cesar vallejo.pdf',
    fileSize: '5.5 MB',
    driveUrl: `https://drive.google.com/file/d/FILE_ID/view`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=FILE_ID`,
    synopsis: 'Una de las obras cumbre de César Vallejo, publicada póstumamente. Poemas que exploran el dolor humano, la solidaridad y la condición social con un lenguaje revolucionario e intenso.'
  },
  {
    id: 'tradiciones-cuzquenas-drive',
    title: 'Tradiciones Cuzqueñas Completas',
    author: 'Clorinda Matto de Turner',
    category: 'Literatura Peruana',
    genres: ['ficticia'],
    fileId: 'tradiciones-cuzquenas-completas.pdf',
    fileName: 'tradiciones-cuzquenas-completas.pdf',
    fileSize: '31 MB',
    driveUrl: `https://drive.google.com/file/d/FILE_ID/view`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=FILE_ID`,
    synopsis: 'Colección de tradiciones que narran la historia y costumbres del Cusco. Clorinda Matto de Turner, pionera del indigenismo literario, retrata la vida andina con sensibilidad y realismo.'
  },
  {
    id: 'trilce-drive',
    title: 'Trilce',
    author: 'César Vallejo',
    category: 'Poesía Peruana',
    genres: ['poesia'],
    fileId: 'trilce - Cesar vallejo.pdf',
    fileName: 'trilce - Cesar vallejo.pdf',
    fileSize: '8 MB',
    driveUrl: `https://drive.google.com/file/d/FILE_ID/view`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=FILE_ID`,
    synopsis: 'Obra poética vanguardista y experimental de César Vallejo. Publicada en 1922, revolucionó la poesía en español con su lenguaje innovador, imágenes audaces y profunda emotividad.'
  }
];

/**
 * Filtra libros de Google Drive según las preferencias del usuario
 */
export const getBooksByPreferences = (userGenres: Genre[]): DriveBook[] => {
  if (!userGenres || userGenres.length === 0) {
    return driveBooksData;
  }

  return driveBooksData.filter(book => 
    book.genres.some(genre => userGenres.includes(genre))
  );
};

/**
 * Obtiene todos los libros disponibles en Google Drive
 */
export const getAllDriveBooks = (): DriveBook[] => {
  return driveBooksData;
};

/**
 * Obtiene un libro específico por ID
 */
export const getDriveBookById = (id: string): DriveBook | undefined => {
  return driveBooksData.find(book => book.id === id);
};

/**
 * Obtiene libros por categoría
 */
export const getDriveBooksByCategory = (category: string): DriveBook[] => {
  return driveBooksData.filter(book => book.category === category);
};

/**
 * Obtiene todas las categorías únicas
 */
export const getDriveCategories = (): string[] => {
  const categories = driveBooksData.map(book => book.category);
  return Array.from(new Set(categories));
};

/**
 * Genera URL de vista previa de Google Drive
 */
export const getGoogleDrivePreviewUrl = (fileId: string): string => {
  return `https://drive.google.com/file/d/${fileId}/preview`;
};

/**
 * Genera URL de descarga directa de Google Drive
 */
export const getGoogleDriveDownloadUrl = (fileId: string): string => {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

/**
 * Convierte un DriveBook a formato Book estándar
 */
export const convertDriveBookToBook = (driveBook: DriveBook) => {
  return {
    id: driveBook.id,
    title: driveBook.title,
    author: driveBook.author,
    category: driveBook.category,
    synopsis: driveBook.synopsis,
    coverUrl: '/images/placeholder.svg', // Usar placeholder o imagen por defecto
    pdfUrl: driveBook.downloadUrl,
    lessons: []
  };
};

