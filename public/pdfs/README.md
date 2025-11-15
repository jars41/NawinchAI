# Carpeta de PDFs para Lectura Interactiva

Esta carpeta contiene los archivos PDF de los libros que se pueden leer en la plataforma.

## Cómo agregar un nuevo libro PDF

1. **Coloca el archivo PDF** en esta carpeta con un nombre descriptivo, por ejemplo:
   - `paco-yunque.pdf`
   - `1984.pdf`

2. **Actualiza la información del libro** en `src/data/books.ts`:
   ```typescript
   {
     id: 'paco-yunque',
     title: 'Paco Yunque',
     author: 'César Vallejo',
     // ... otros campos
     pdfUrl: '/pdfs/paco-yunque.pdf', // ← Agrega esta línea
     // ...
   }
   ```

3. **Agrega preguntas de comprensión** (opcional) en `src/pages/ReadingPage.tsx`:
   - Las preguntas aparecen en páginas específicas durante la lectura
   - Formato de ejemplo:
   ```typescript
   const miLibroQuestions: Question[] = [
     {
       id: 1,
       instruction: "Contexto de la pregunta",
       question: "¿Pregunta principal?",
       options: [
         { id: 'A', text: 'Opción A' },
         { id: 'B', text: 'Opción B' },
         { id: 'C', text: 'Opción C' },
       ],
       correctAnswer: 'B',
       pageNumber: 5, // Página donde aparece
     },
   ];
   ```

## Características de la página de lectura

- ✅ Visor de PDF integrado
- ✅ Navegación por páginas (anterior/siguiente)
- ✅ Preguntas de comprensión interactivas
- ✅ Retroalimentación inmediata
- ✅ Panel lateral con progreso

## Notas importantes

- Los PDFs deben ser de dominio público o tener los derechos correspondientes
- El tamaño de archivo recomendado es menor a 10MB para mejor rendimiento
- Los PDFs se cargan desde la carpeta `public/` y son accesibles públicamente

