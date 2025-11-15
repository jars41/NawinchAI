# 🚀 Proyecto ÑawinchAI - En Ejecución

## ✅ Servidor de Desarrollo Iniciado

Tu proyecto **Intellectus Litera (ÑawinchAI)** está corriendo en:

### 🌐 URLs de Acceso:

- **Local**: http://localhost:5173
- **Red**: http://TU_IP_LOCAL:5173

---

## 🎯 Páginas Disponibles

### Autenticación y Configuración:
- **Login**: http://localhost:5173/login
- **Preferencias**: http://localhost:5173/preferences

### Navegación Principal:
- **Home (Categorías)**: http://localhost:5173/
- **Libro Paco Yunque**: http://localhost:5173/book/paco-yunque

### Modos de Lectura - Paco Yunque:
- **📖 Lectura (PDF)**: http://localhost:5173/reading/paco-yunque
- **🎧 Audiolibro**: http://localhost:5173/audio/paco-yunque
- **🎥 Video**: http://localhost:5173/video/paco-yunque

### Otros Libros:
- **1984**: http://localhost:5173/book/1984
- **Todas las categorías**: Se muestran en el home después de login

---

## 🔑 Credenciales de Prueba

Para acceder al sistema, usa estas credenciales:

| DNI | Contraseña |
|-----|------------|
| 12345678 | password123 |
| 87654321 | admin123 |

---

## 📚 Contenido del Proyecto

### Libros Locales:
- ✅ 1984 - George Orwell
- ✅ Paco Yunque - César Vallejo (COMPLETO)
- ✅ Un Mundo Feliz - Aldous Huxley
- ✅ Fahrenheit 451 - Ray Bradbury
- ✅ Y más...

### Libros desde Google Drive:
- ✅ 9 libros de literatura peruana
- ✅ Filtrados según preferencias del usuario
- ✅ Identificados con badge "☁️ Drive"

---

## 🎨 Funcionalidades Implementadas

### ✅ Sistema de Autenticación
- Login con DNI
- Sesión persistente
- Rutas protegidas

### ✅ Sistema de Preferencias
- Selección de géneros favoritos
- Filtrado de contenido personalizado

### ✅ Lectura Interactiva (Paco Yunque)
- Visor de PDF integrado
- Navegación por páginas
- Preguntas de comprensión interactivas
- Validación de respuestas

### ✅ Reproductor de Audiolibros
- Controles completos (play, pause, skip)
- Barra de progreso
- Control de volumen
- Velocidad ajustable (0.5x - 2x)

### ✅ Reproductor de Videos
- Video educativo HD
- Controles completos
- Pantalla completa
- Velocidad ajustable

### ✅ Integración Google Drive
- 9 libros de literatura peruana
- Filtrado por preferencias
- Organización por categorías

### ✅ Interfaz Moderna
- Diseño responsive
- Dark mode
- Animaciones suaves
- Logo personalizado (ÑawinchAI)

---

## 🛠️ Comandos Útiles

### Detener el servidor:
```bash
Ctrl + C (en la terminal donde está corriendo)
```

### Reiniciar el servidor:
```bash
npm run dev
```

### Compilar para producción:
```bash
npm run build
```

### Vista previa de producción:
```bash
npm run preview
```

---

## 🌍 Compartir con Otros (usando ngrok)

Si quieres compartir tu proyecto con otras personas:

```bash
# En otra terminal (sin cerrar el servidor)
ngrok http 5173
```

Obtendrás una URL pública como: `https://abc123.ngrok-free.app`

---

## 📱 Probar en tu Celular

### Opción 1: Usando tu IP Local
1. Encuentra tu IP local: `ipconfig` (busca IPv4)
2. En tu celular, abre: `http://TU_IP:5173`
3. Asegúrate de estar en la misma red WiFi

### Opción 2: Usando ngrok (Recomendado)
1. Ejecuta: `ngrok http 5173`
2. Copia la URL generada
3. Ábrela en tu celular

---

## 🎯 Flujo de Usuario Completo

1. **Accede** a http://localhost:5173
2. **Inicia sesión** con DNI: 12345678, Password: password123
3. **Selecciona preferencias** (ej: Poesía, Dramático, Ficticia)
4. **Explora libros** en la página principal
5. **Haz clic en Paco Yunque**
6. **Elige un modo**:
   - 📖 Empezar Lectura
   - 🎧 Empezar Audiolibro
   - 🎥 Empezar Video
7. **Disfruta del contenido**

---

## 🔍 Inspeccionar la Aplicación

### DevTools de React:
Si tienes React DevTools instalado, puedes inspeccionar componentes.

### Network Tab:
Abre F12 → Network para ver las peticiones.

### Console:
Abre F12 → Console para ver logs y errores.

---

## 📊 Estadísticas del Proyecto

- **Páginas**: 10+
- **Componentes**: 20+
- **Libros locales**: 9+
- **Libros Google Drive**: 9
- **Total multimedia**: PDF + Audio + Video
- **Líneas de código**: 5000+

---

## 🎉 ¡Tu Proyecto Está Listo!

Todo está funcionando correctamente. Puedes:

1. ✅ Navegar por todas las páginas
2. ✅ Probar el sistema de lectura
3. ✅ Escuchar audiolibros
4. ✅ Ver videos
5. ✅ Explorar libros desde Google Drive

**¡Disfruta tu plataforma educativa ÑawinchAI!** 🚀📚

---

## 📝 Notas Finales

- El servidor se reiniciará automáticamente al hacer cambios
- Los archivos multimedia deben estar en las carpetas `/public`
- Para producción, considera usar Vercel o Netlify
- El repositorio está listo para subir a GitHub

**Hecho con ❤️ para Intellectus Litera**

