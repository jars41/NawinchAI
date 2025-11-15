# Integración con Google Drive

## 📚 Resumen

La plataforma ahora está integrada con Google Drive para cargar libros dinámicamente según las preferencias del usuario. Los libros se cargan desde el repositorio público: [https://drive.google.com/drive/folders/1WD95eD_esnBroT5qlEwgLQksC3c_ELUo](https://drive.google.com/drive/folders/1WD95eD_esnBroT5qlEwgLQksC3c_ELUo)

## 📖 Libros Disponibles en Google Drive

### Literatura Peruana

1. **Paco Yunque y Otros Cuentos** - César Vallejo (901 KB)
   - Géneros: Dramático, Ficticia
   - Archivo: `40-CESAR_VALLEJO_PACO_YUNQUE_Y_OTROS_CUENTO.pdf`

2. **Cien Tradiciones Peruanas** - Ricardo Palma (12.1 MB)
   - Géneros: Ficticia, Dramático
   - Archivo: `Cien_tradiciones_peruanas_Ricardo_Palma.pdf`

3. **Novelas y Cuentos Completos** - César Vallejo (18.7 MB)
   - Géneros: Ficticia, Dramático
   - Archivo: `Novelas y cuentos completos - Cesar Vallejo.pdf`

4. **Tradiciones Cuzqueñas Completas** - Clorinda Matto de Turner (31 MB)
   - Géneros: Ficticia
   - Archivo: `tradiciones-cuzquenas-completas.pdf`

### Poesía Peruana

5. **Obra Poética Completa** - César Vallejo (34.9 MB)
   - Géneros: Poesía
   - Archivo: `Obra poetica completa - Cesar Vallejo.pdf`

6. **Poemas Humanos** - César Vallejo (5.5 MB)
   - Géneros: Poesía
   - Archivo: `poemas humanos - Cesar vallejo.pdf`

7. **Trilce** - César Vallejo (8 MB)
   - Géneros: Poesía
   - Archivo: `trilce - Cesar vallejo.pdf`

### Ensayos

8. **El Romanticismo en la Poesía Castellana** - César Vallejo (3.8 MB)
   - Géneros: Poesía
   - Archivo: `el romanticismo en la poesia castellana - Cesar Vallejo.pdf`

9. **Páginas Libres y Horas de Lucha** - Manuel González Prada (10.7 MB)
   - Géneros: Dramático
   - Archivo: `Paginas_libres_Horas_de_lucha.pdf`

## 🎯 Cómo Funciona

### 1. Selección de Preferencias

Cuando un usuario selecciona sus preferencias en la página `/preferences`, el sistema:

```typescript
// Categorías disponibles en preferencias
- Románticas
- Acción
- Intriga
- Ficticia   ← Relacionada con libros de Drive
- Poesía     ← Relacionada con libros de Drive
- Dramático  ← Relacionada con libros de Drive
```

### 2. Filtrado de Libros

El servicio `googleDriveService.ts` filtra los libros según las preferencias:

```typescript
import { getBooksByPreferences } from '@/services/googleDriveService';

// Si el usuario seleccionó "Poesía"
const userPreferences = ['poesia'];
const filteredBooks = getBooksByPreferences(userPreferences);

// Resultado: Mostrará todos los libros de poesía de Drive
// - Obra Poética Completa
// - Poemas Humanos
// - Trilce
// - El Romanticismo en la Poesía Castellana
```

### 3. Visualización en HomePage

Los libros se muestran en dos secciones:

#### Sección 1: Libros Locales
- Libros almacenados en el proyecto (como 1984, Paco Yunque local, etc.)
- Se muestran primero

#### Sección 2: Libros de Google Drive
- Libros filtrados del Drive según preferencias
- Se muestran con un badge "📁 Drive"
- Organizados por categoría (Literatura Peruana, Poesía Peruana, etc.)

## 🔧 Estructura Técnica

### Archivo Principal: `src/services/googleDriveService.ts`

```typescript
// Interfaz de libro de Drive
interface DriveBook {
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

// Funciones principales
- getBooksByPreferences(userGenres: Genre[]): DriveBook[]
- getAllDriveBooks(): DriveBook[]
- getDriveBookById(id: string): DriveBook | undefined
- getDriveBooksByCategory(category: string): DriveBook[]
- getDriveCategories(): string[]
- convertDriveBookToBook(driveBook: DriveBook): Book
```

### Mapeo de Géneros

```typescript
// Preferencias del usuario → Géneros de libros de Drive
'poesia'     → Libros con género 'poesia'
'ficticia'   → Libros con género 'ficticia'
'dramatico'  → Libros con género 'dramatico'
```

## 📊 Ejemplo de Flujo

1. **Usuario inicia sesión** → Navega a `/preferences`

2. **Selecciona preferencias**:
   - ✅ Poesía
   - ✅ Dramático
   - ✅ Ficticia

3. **Sistema filtra libros**:
   ```typescript
   const preferences = ['poesia', 'dramatico', 'ficticia'];
   const booksFromDrive = getBooksByPreferences(preferences);
   // Resultado: Todos los 9 libros del Drive
   ```

4. **HomePage muestra**:
   - Libros locales (categorías normales)
   - **Separador visual**
   - Biblioteca desde Google Drive (9 libros organizados por categoría)

## 🎨 Características de UI

### Indicadores Visuales

- **Badge "☁️ Drive"**: Indica que el libro viene de Google Drive
- **Contador**: Muestra el número total de libros disponibles
- **Separador**: Línea divisoria entre libros locales y de Drive

### Organización

```
HomePage
├── Barra de búsqueda
├── Sección: "Biblioteca desde Google Drive" (si hay libros filtrados)
│   └── Badge con contador
├── Libros Locales
│   ├── Distopía (1984, etc.)
│   ├── Ciencia Ficción
│   └── Clásicos
├── [Separador visual]
└── Libros de Google Drive (filtrados por preferencias)
    ├── Literatura Peruana ☁️
    ├── Poesía Peruana ☁️
    └── Ensayo Literario ☁️
```

## 🔗 URLs de Google Drive

### Vista Previa
```
https://drive.google.com/file/d/{FILE_ID}/preview
```

### Descarga Directa
```
https://drive.google.com/uc?export=download&id={FILE_ID}
```

### Carpeta Completa
```
https://drive.google.com/drive/folders/1WD95eD_esnBroT5qlEwgLQksC3c_ELUo
```

## ⚙️ Configuración

### Agregar Nuevos Libros al Drive

Para agregar más libros, edita `src/services/googleDriveService.ts`:

```typescript
export const driveBooksData: DriveBook[] = [
  // ... libros existentes
  {
    id: 'nuevo-libro-id',
    title: 'Título del Nuevo Libro',
    author: 'Autor',
    category: 'Categoría',
    genres: ['poesia', 'dramatico'], // Relacionar con preferencias
    fileId: 'nombre-archivo.pdf',
    fileName: 'nombre-archivo.pdf',
    fileSize: 'X MB',
    driveUrl: `https://drive.google.com/file/d/FILE_ID/view`,
    downloadUrl: `https://drive.google.com/uc?export=download&id=FILE_ID`,
    synopsis: 'Descripción del libro...'
  }
];
```

### Mapear Nuevas Preferencias

Si agregas nuevas categorías en `/preferences`, actualiza el campo `genres` en los libros correspondientes.

## 📱 Experiencia del Usuario

1. **Primera visita** → Selecciona preferencias
2. **HomePage se actualiza** → Muestra libros locales + Drive filtrados
3. **Cada visita posterior** → Libros personalizados según sus gustos
4. **Cambio de preferencias** → Libros se actualizan automáticamente

## 🎯 Beneficios

- ✅ **Biblioteca dinámica**: Los libros se cargan según preferencias
- ✅ **Contenido extenso**: 9 libros adicionales de literatura peruana
- ✅ **Organización clara**: Separación visual entre contenido local y Drive
- ✅ **Filtrado inteligente**: Solo muestra libros relevantes para el usuario
- ✅ **Escalable**: Fácil agregar más libros al servicio

## 🔮 Futuras Mejoras

- [ ] Implementar búsqueda en libros de Drive
- [ ] Caché de libros para mejor rendimiento
- [ ] Integración real con Google Drive API (autenticación OAuth2)
- [ ] Sistema de favoritos para libros de Drive
- [ ] Historial de lectura de libros de Drive
- [ ] Sincronización de progreso en la nube

---

**Nota**: Actualmente los libros se mapean de forma estática desde `googleDriveService.ts`. Para una integración real con Google Drive API, se necesitaría configurar OAuth2 y las credenciales de la API.

