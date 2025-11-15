# 🚀 Guía Completa para Desplegar ÑawinchAI

## ✅ Build Generado Exitosamente

Tu carpeta `dist/` contiene todos los archivos optimizados para producción:
- `index.html` - Página principal
- `assets/` - JavaScript y CSS minificados
- Archivos estáticos (imágenes, videos, PDFs, audios)

**Tamaño total**: ~1 MB (código) + archivos multimedia

---

## 🌟 Opción 1: Vercel (RECOMENDADO - Gratis)

### ✨ Ventajas:
- ✅ Completamente GRATIS
- ✅ HTTPS automático
- ✅ Dominio personalizado gratis (.vercel.app)
- ✅ Despliegue automático desde GitHub
- ✅ CDN global (súper rápido)

### 📝 Pasos:

1. **Sube tu código a GitHub** (si aún no lo has hecho):
   ```bash
   git add .
   git commit -m "build: generar build de producción"
   git push origin main
   ```

2. **Ve a Vercel**:
   - Abre: https://vercel.com
   - Haz clic en "Sign Up" o "Login"
   - Conecta con tu cuenta de GitHub

3. **Importa tu proyecto**:
   - Haz clic en "Add New..." → "Project"
   - Selecciona tu repositorio `intellectus-litera`
   - Haz clic en "Import"

4. **Configuración** (Vercel lo detecta automáticamente):
   - Framework Preset: `Vite`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **Deploy**:
   - Haz clic en "Deploy"
   - Espera 1-2 minutos
   - ¡Listo! Tu app estará en: `https://tu-proyecto.vercel.app`

### 🔄 Actualizaciones Automáticas:
Cada vez que hagas `git push`, Vercel actualizará tu sitio automáticamente.

---

## 🎯 Opción 2: Netlify (También Gratis)

### ✨ Ventajas:
- ✅ Completamente GRATIS
- ✅ HTTPS automático
- ✅ Dominio gratis (.netlify.app)
- ✅ Formularios incluidos
- ✅ Funciones serverless

### 📝 Método A: Drag & Drop (Más Rápido)

1. **Ve a Netlify**:
   - Abre: https://app.netlify.com/drop
   
2. **Arrastra la carpeta `dist/`**:
   - Simplemente arrastra tu carpeta `dist/` a la página
   - ¡Listo! En segundos tu sitio estará online

3. **Tu URL será**: `https://random-name-123.netlify.app`

### 📝 Método B: Desde GitHub (Recomendado)

1. **Ve a Netlify**:
   - Abre: https://app.netlify.com
   - Conecta con GitHub

2. **Importa tu proyecto**:
   - "Add new site" → "Import an existing project"
   - Selecciona GitHub
   - Elige tu repositorio

3. **Configuración**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Haz clic en "Deploy site"

4. **Personalizar dominio** (opcional):
   - Site settings → Domain management
   - Cambia el nombre: `tu-nombre.netlify.app`

---

## 📁 Opción 3: GitHub Pages (Gratis pero limitado)

### ✨ Ventajas:
- ✅ Gratis
- ✅ Integrado con GitHub
- ✅ HTTPS automático

### ⚠️ Limitaciones:
- Solo sitios estáticos
- No soporta SPA routing sin configuración extra

### 📝 Pasos:

1. **Instalar gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Modificar `package.json`**:
   Agregar en scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Agregar homepage en `package.json`**:
   ```json
   "homepage": "https://TU_USUARIO.github.io/intellectus-litera"
   ```

4. **Configurar Vite** (`vite.config.ts`):
   ```typescript
   export default defineConfig({
     base: '/intellectus-litera/',
     // ... resto de config
   })
   ```

5. **Desplegar**:
   ```bash
   npm run deploy
   ```

6. **Activar GitHub Pages**:
   - Ve a tu repo en GitHub
   - Settings → Pages
   - Source: `gh-pages` branch
   - Save

Tu sitio estará en: `https://TU_USUARIO.github.io/intellectus-litera`

---

## 🖥️ Opción 4: Servidor Propio (VPS, Hosting tradicional)

### Si tienes un hosting con cPanel o FTP:

1. **Comprime la carpeta dist**:
   - Haz clic derecho en `dist/` → "Comprimir"
   - O usa: `tar -czf dist.tar.gz dist/`

2. **Sube los archivos**:
   - Via FTP (FileZilla, WinSCP)
   - Via cPanel File Manager
   - Sube TODO el contenido de la carpeta `dist/` a `public_html/`

3. **Estructura en el servidor**:
   ```
   public_html/
   ├── index.html
   ├── assets/
   │   ├── index-xxx.js
   │   └── index-xxx.css
   ├── images/
   ├── videos/
   ├── audios/
   └── pdfs/
   ```

4. **Configurar .htaccess** (para React Router):
   
   Crea un archivo `.htaccess` en `public_html/`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 🐳 Opción 5: Docker (Para Despliegues Avanzados)

Si quieres usar Docker:

**Dockerfile**:
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf**:
```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}
```

**Comandos**:
```bash
docker build -t nawinch-ai .
docker run -p 8080:80 nawinch-ai
```

---

## 📊 Comparación de Opciones

| Plataforma | Precio | Velocidad | Facilidad | HTTPS | Dominio |
|------------|--------|-----------|-----------|-------|---------|
| **Vercel** | ✅ Gratis | ⚡⚡⚡⚡⚡ | ⭐⭐⭐⭐⭐ | ✅ Auto | ✅ Gratis |
| **Netlify** | ✅ Gratis | ⚡⚡⚡⚡⚡ | ⭐⭐⭐⭐⭐ | ✅ Auto | ✅ Gratis |
| **GitHub Pages** | ✅ Gratis | ⚡⚡⚡⚡ | ⭐⭐⭐ | ✅ Auto | ✅ Gratis |
| **Hosting Propio** | 💰 $5-20/mes | ⚡⚡⚡ | ⭐⭐ | ⚠️ Manual | 💰 Extra |

**Recomendación**: 🥇 **Vercel** o 🥈 **Netlify**

---

## 🔧 Configuraciones Importantes

### Variables de Entorno

Si necesitas variables de entorno en producción:

**Vercel**:
- Settings → Environment Variables
- Agrega: `VITE_API_URL`, etc.

**Netlify**:
- Site settings → Build & deploy → Environment
- Agrega tus variables

### Dominios Personalizados

**Con Vercel/Netlify**:
1. Compra un dominio (Namecheap, GoDaddy)
2. En Vercel/Netlify: Settings → Domains
3. Sigue las instrucciones para configurar DNS

---

## ⚡ Optimizaciones para Producción

### Mejorar Rendimiento:

1. **Compresión de imágenes**:
   - Usa herramientas como TinyPNG
   - Convierte a WebP cuando sea posible

2. **Lazy Loading**:
   - Ya implementado con React.lazy()

3. **CDN para archivos grandes**:
   - Considera subir videos/audios a YouTube, Vimeo, o S3

4. **Caché**:
   - Vercel y Netlify lo manejan automáticamente

---

## 🎉 Después del Despliegue

### Verificar que todo funciona:
- [ ] Login funciona
- [ ] Preferencias se guardan
- [ ] Libros se muestran correctamente
- [ ] PDF se carga (lectura)
- [ ] Audio reproduce
- [ ] Video reproduce
- [ ] Google Drive libros aparecen

### Compartir tu sitio:
```
🌐 Mi sitio: https://tu-proyecto.vercel.app
📱 Funciona en móviles y tablets
🔒 HTTPS seguro
⚡ Súper rápido con CDN global
```

---

## 📝 Comandos de Resumen

### Desarrollo local:
```bash
npm run dev              # Levantar servidor local
```

### Producción:
```bash
npm run build           # Generar build
npm run preview         # Previsualizar build localmente
```

### Despliegue:
```bash
# Vercel
vercel                  # Primera vez
vercel --prod           # Producción

# Netlify
netlify deploy --prod   # Producción

# GitHub Pages
npm run deploy          # Después de configurar
```

---

## 🎯 Recomendación Final

Para **ÑawinchAI**, te recomiendo:

1. **Subir a GitHub** (si aún no lo has hecho)
2. **Desplegar en Vercel** (más fácil y rápido)
3. **Configurar dominio personalizado** (opcional)
4. **Compartir con tu equipo/usuarios**

### Pasos Rápidos:
```bash
# 1. Subir a GitHub
git add .
git commit -m "feat: proyecto completo listo para producción"
git push origin main

# 2. Ve a vercel.com y conecta tu repo
# 3. Deploy automático
# 4. ¡Listo! Tu sitio está online en minutos
```

---

## 🆘 Soporte

Si tienes problemas:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages: https://pages.github.com

**¡Tu proyecto está listo para el mundo!** 🌍🚀

