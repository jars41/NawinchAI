# Carpeta de Audios para la Plataforma

Esta carpeta contiene los archivos de audio y audiolibros de los libros disponibles en la plataforma.

## Tipos de archivos de audio

- **Audiolibros completos**: Narración completa del libro
- **Capítulos individuales**: Audiolibros divididos por capítulos
- **Resúmenes en audio**: Versiones resumidas narradas
- **Pronunciaciones**: Ayuda para palabras difíciles o en otros idiomas

## Formatos soportados

- `.mp3` (recomendado - mayor compatibilidad)
- `.ogg`
- `.wav`
- `.m4a`

## Cómo agregar un audiolibro

Coloca el archivo en esta carpeta y actualiza el libro en `src/data/books.ts`:

```typescript
{
  id: 'paco-yunque',
  title: 'Paco Yunque',
  author: 'César Vallejo',
  // ... otros campos
  audioUrl: '/audios/paco-yunque-audiolibro.mp3', // ← Audiolibro
  // ...
}
```

## Estructura de nombres recomendada

```
audios/
  ├── 1984-completo.mp3           # Audiolibro completo
  ├── 1984-capitulo-01.mp3        # Por capítulos
  ├── 1984-capitulo-02.mp3
  ├── paco-yunque-completo.mp3
  ├── orwell-biografia.mp3        # Contenido adicional
  └── cesar-vallejo-poesia.mp3
```

## Recomendaciones técnicas

- **Formato preferido**: MP3 a 128 kbps o 192 kbps
- **Calidad**: Mantener equilibrio entre calidad y tamaño de archivo
- **Bitrate recomendado**:
  - Voz/narración: 64-128 kbps
  - Calidad estándar: 128-192 kbps
  - Alta calidad: 256-320 kbps
- **Mono vs Estéreo**: Mono es suficiente para voz, estéreo para música
- **Metadata**: Incluir título, autor, capítulo en las etiquetas ID3

## Consideraciones de accesibilidad

- Proporcionar transcripciones cuando sea posible
- Usar narradores con buena dicción y ritmo apropiado
- Considerar velocidad de reproducción ajustable
- Agregar marcadores de capítulos/secciones

## Botón "Empezar Audiolibro"

Para implementar la funcionalidad del audiolibro:

1. Agregar `audioUrl` al libro en `src/data/books.ts`
2. Crear una página `AudioPage.tsx` con reproductor de audio
3. Conectar el botón en `BookDetailsPage.tsx`

## Ejemplo de uso en código

### Reproductor básico de audio

```tsx
<audio controls className="w-full">
  <source src="/audios/paco-yunque-completo.mp3" type="audio/mpeg" />
  Tu navegador no soporta el elemento de audio.
</audio>
```

### Reproductor con controles personalizados

```tsx
<div className="audio-player">
  <audio ref={audioRef} src="/audios/libro.mp3">
    Tu navegador no soporta el elemento de audio.
  </audio>
  <button onClick={handlePlay}>▶️ Play</button>
  <button onClick={handlePause}>⏸️ Pause</button>
  <input type="range" onChange={handleSeek} />
</div>
```

## Notas legales y éticas

- ✅ Usar solo audios con derechos apropiados
- ✅ Dar crédito a los narradores
- ✅ Verificar licencias de uso
- ✅ Obras de dominio público son seguras de usar

## Recursos útiles

- **Narración**: Considera servicios de text-to-speech para prototipos
- **Grabación**: Audacity (software gratuito para edición)
- **Conversión**: FFmpeg para convertir entre formatos
- **Compresión**: Mantener archivos bajo 50MB por capítulo cuando sea posible

## Ejemplo de estructura completa

```typescript
// En src/data/books.ts
{
  id: 'paco-yunque',
  title: 'Paco Yunque',
  author: 'César Vallejo',
  pdfUrl: '/pdfs/paco-yunque.pdf',
  audioUrl: '/audios/paco-yunque-completo.mp3',
  videoUrl: '/videos/paco-yunque-video.mp4',
  trailerUrl: '/videos/paco-yunque-trailer.mp4',
  // ...
}
```

---

Para implementación del reproductor, consulta componentes de UI en `src/components/ui/` o bibliotecas como `react-audio-player`.

