# Archivo de Audio para Paco Yunque

Para que el botón "Empezar Audiolibro" funcione, necesitas agregar el siguiente archivo:

## Archivo requerido:

**Nombre**: `paco-yunque-audiolibro.mp3`
**Ubicación**: `public/audios/paco-yunque-audiolibro.mp3`
**Descripción**: Narración completa del libro "Paco Yunque"
**Formato**: MP3 a 128-192 kbps
**Duración aproximada**: El cuento es corto, aproximadamente 20-30 minutos de narración

## Contenido del audiolibro

El audiolibro debe incluir la narración completa del cuento de César Vallejo:
- Inicio: "Cuando Paco Yunque y su madre llegaron a la puerta del colegio..."
- Desarrollo: Las interacciones entre Paco Yunque, Paco Fariña, Humberto Grieve y los demás personajes
- Final: La escena conmovedora que muestra la injusticia social

## Opciones para obtener el audio

### 1. Grabación profesional
- Contratar a un narrador profesional
- Grabar con buena calidad de audio
- Añadir efectos de sonido sutiles (opcional)

### 2. Text-to-Speech (temporal)
Puedes usar servicios de IA para generar el audio temporalmente:
- Google Cloud Text-to-Speech
- Amazon Polly
- Microsoft Azure Speech
- ElevenLabs (recomendado para calidad)

### 3. Audiolibros existentes
- Verificar si existe una versión de dominio público
- Asegurarse de tener los derechos de uso

## Características recomendadas

- **Voz**: Cálida y expresiva, adecuada para literatura infantil/juvenil
- **Ritmo**: Moderado, permitiendo comprensión clara
- **Acento**: Neutral o con ligero acento peruano para autenticidad
- **Pausas**: Bien marcadas entre escenas
- **Énfasis**: En momentos emotivos clave

## Alternativa temporal

Si no tienes el audio todavía, puedes comentar la línea en `books.ts`:

```typescript
// audioUrl: '/audios/paco-yunque-audiolibro.mp3',
```

El botón "Empezar Audiolibro" mostrará un mensaje apropiado.

## Verificación

Una vez que agregues el archivo, verifica que:
- ✅ El nombre sea exactamente `paco-yunque-audiolibro.mp3`
- ✅ El formato sea MP3
- ✅ La calidad sea clara y profesional
- ✅ El volumen sea consistente
- ✅ Se reproduzca correctamente en navegadores modernos

