# Archivos de Video para Paco Yunque

Para que la página de Paco Yunque funcione completamente, necesitas agregar los siguientes archivos en esta carpeta:

## Archivos requeridos:

### 1. Tráiler (Requerido)
**Nombre**: `paco-yunque-trailer.mp4`
**Ubicación**: `public/videos/paco-yunque-trailer.mp4`
**Descripción**: Video tráiler que se muestra en la página de detalles del libro
**Duración recomendada**: 1-3 minutos
**Resolución**: 1080p o 720p

### 2. Video educativo (Opcional)
**Nombre**: `paco-yunque-video.mp4`
**Ubicación**: `public/videos/paco-yunque-video.mp4`
**Descripción**: Video educativo principal para el botón "Empezar Video"
**Duración recomendada**: 5-15 minutos
**Contenido sugerido**:
- Contexto histórico y social del Perú en la época
- Biografía de César Vallejo
- Análisis de los personajes principales
- Temas de desigualdad y justicia social
- Comparación con la realidad actual

## Alternativa temporal

Si no tienes los videos todavía, puedes:

1. **Usar un video de prueba temporal**:
   ```typescript
   // En src/data/books.ts
   trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
   ```

2. **Dejar el campo vacío** y se mostrará un placeholder:
   ```typescript
   // En src/data/books.ts - eliminar o comentar estas líneas
   // trailerUrl: '/videos/paco-yunque-trailer.mp4',
   // videoUrl: '/videos/paco-yunque-video.mp4',
   ```

## Recursos para crear contenido

### Ideas para el tráiler:
- Fragmentos animados del libro
- Imágenes de la época (1930s Perú)
- Música de fondo relacionada con la cultura peruana
- Narración de pasajes clave
- Entrevistas sobre el impacto del libro

### Herramientas sugeridas:
- **Edición**: DaVinci Resolve (gratuito), Adobe Premiere
- **Animación**: Canva, Adobe After Effects
- **Narración**: Audacity para grabación de voz
- **Música**: Biblioteca de audio de YouTube (libre de derechos)

## Verificación

Una vez que agregues los archivos, verifica que:
- ✅ Los nombres coincidan exactamente con los especificados en `books.ts`
- ✅ El formato sea MP4 con codec H.264
- ✅ El tamaño de archivo sea razonable (< 50MB)
- ✅ Los videos se reproduzcan correctamente en navegadores modernos

