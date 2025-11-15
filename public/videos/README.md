# Carpeta de Videos para la Plataforma

Esta carpeta contiene los archivos de video educativos y tráilers de los libros.

## Tipos de videos soportados

- **Tráilers de libros**: Videos promocionales que se muestran en la página de detalles
- **Videos educativos**: Contenido complementario para el aprendizaje
- **Resúmenes en video**: Explicaciones visuales de los temas principales
- **Entrevistas con autores**: Contenido adicional contextual

## Formatos soportados

- `.mp4` (recomendado)
- `.webm`
- `.ogg`
- `.mov`

## Cómo agregar un video

### 1. Para tráilers de libros

Coloca el archivo en esta carpeta y actualiza el libro en `src/data/books.ts`:

```typescript
{
  id: '1984',
  title: '1984',
  author: 'George Orwell',
  // ... otros campos
  trailerUrl: '/videos/1984-trailer.mp4', // ← URL del tráiler
  // ...
}
```

### 2. Para videos educativos del libro

Agrega un campo `videoUrl` en el libro:

```typescript
{
  id: 'paco-yunque',
  title: 'Paco Yunque',
  // ... otros campos
  videoUrl: '/videos/paco-yunque-video.mp4', // ← Video principal
  // ...
}
```

### 3. Estructura de nombres recomendada

```
videos/
  ├── 1984-trailer.mp4          # Tráiler
  ├── 1984-video.mp4            # Video educativo principal
  ├── paco-yunque-trailer.mp4
  ├── paco-yunque-video.mp4
  ├── orwell-interview.mp4      # Contenido adicional
  └── cesar-vallejo-bio.mp4
```

## Recomendaciones técnicas

- **Resolución**: 1080p (1920x1080) o 720p (1280x720)
- **Formato preferido**: MP4 con codec H.264
- **Tamaño de archivo**: Mantener bajo 50MB cuando sea posible
- **Duración recomendada**:
  - Tráilers: 1-3 minutos
  - Videos educativos: 5-15 minutos
  - Entrevistas: 10-20 minutos

## Botón "Empezar Video"

El botón en la página de detalles del libro navega a una página de visualización de video cuando se hace clic. Para implementar esta funcionalidad:

1. Agregar `videoUrl` al libro en `src/data/books.ts`
2. Crear una página `VideoPage.tsx` similar a `ReadingPage.tsx`
3. Conectar el botón en `BookDetailsPage.tsx`

## Notas importantes

- Los videos deben cumplir con los derechos de autor
- Optimiza los videos antes de subirlos (compresión, formato)
- Considera agregar subtítulos para accesibilidad
- Los videos se sirven desde la carpeta `public/` y son accesibles públicamente

## Ejemplos de uso

### Reproducir en la página de detalles

```tsx
<video controls className="w-full h-full">
  <source src="/videos/1984-trailer.mp4" type="video/mp4" />
  Tu navegador no soporta el elemento de video.
</video>
```

### Con poster (imagen de vista previa)

```tsx
<video controls poster="/images/book-cover.jpg">
  <source src="/videos/libro-video.mp4" type="video/mp4" />
</video>
```

---

Para más información sobre la implementación, consulta `src/pages/BookDetailsPage.tsx` donde se muestra el tráiler.

