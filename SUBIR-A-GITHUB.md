# 🚀 Guía para Subir el Proyecto a GitHub

## ✅ Paso 1: Crear un Nuevo Repositorio en GitHub

### Opción A: Desde el Navegador (Recomendado)

1. **Ve a GitHub**:
   - Abre: https://github.com/new
   - O ve a https://github.com → Haz clic en el botón "+" (arriba a la derecha) → "New repository"

2. **Configura el repositorio**:
   - **Repository name**: `intellectus-litera` (o el nombre que prefieras)
   - **Description**: "Plataforma educativa interactiva de lectura con audiolibros, videos y contenido desde Google Drive"
   - **Visibilidad**: 
     - ✅ **Public** (si quieres que sea público)
     - 🔒 **Private** (si quieres que sea privado)
   - **NO marques**:
     - ❌ "Add a README file"
     - ❌ "Add .gitignore"
     - ❌ "Choose a license"
   
3. **Haz clic en**: "Create repository"

4. **Copia la URL del repositorio** que aparecerá (será algo como):
   - HTTPS: `https://github.com/TU_USUARIO/intellectus-litera.git`
   - SSH: `git@github.com:TU_USUARIO/intellectus-litera.git`

---

## 🔗 Paso 2: Conectar tu Proyecto Local con GitHub

Abre tu terminal PowerShell en la carpeta del proyecto y ejecuta:

### Si tu repositorio es NUEVO (nunca lo has conectado a GitHub):

```bash
# Remover el origen anterior si existe
git remote remove origin

# Agregar el nuevo repositorio (reemplaza TU_USUARIO con tu nombre de usuario)
git remote add origin https://github.com/TU_USUARIO/intellectus-litera.git

# Verificar que se agregó correctamente
git remote -v
```

### Si quieres cambiar el origen existente:

```bash
# Cambiar la URL del origen
git remote set-url origin https://github.com/TU_USUARIO/intellectus-litera.git
```

---

## ⬆️ Paso 3: Subir el Código a GitHub

```bash
# Subir todos los commits al repositorio remoto
git push -u origin main
```

Si te pide autenticación:
- **Usuario**: Tu nombre de usuario de GitHub
- **Contraseña**: Tu Personal Access Token (NO tu contraseña normal)

### Si no tienes un Personal Access Token:

1. Ve a: https://github.com/settings/tokens
2. Haz clic en "Generate new token" → "Generate new token (classic)"
3. Configuración recomendada:
   - **Note**: "Intellectus Litera Deploy"
   - **Expiration**: 90 días (o el tiempo que prefieras)
   - **Scopes**: Marca solo "repo" ✅
4. Haz clic en "Generate token"
5. **IMPORTANTE**: Copia el token (no podrás verlo de nuevo)
6. Usa este token como contraseña cuando Git te lo pida

---

## 🎉 Paso 4: Verificar que Todo Subió Correctamente

1. Ve a tu repositorio en: `https://github.com/TU_USUARIO/intellectus-litera`
2. Deberías ver todos los archivos del proyecto
3. El README.md debería verse en la página principal

---

## 📝 Comandos Útiles de Git

### Ver el estado actual:
```bash
git status
```

### Hacer cambios futuros:
```bash
# 1. Hacer cambios en tu código
# 2. Agregar cambios
git add .

# 3. Hacer commit con un mensaje descriptivo
git commit -m "feat: descripción de lo que cambiaste"

# 4. Subir a GitHub
git push
```

### Ver el historial de commits:
```bash
git log --oneline
```

### Ver ramas:
```bash
git branch
```

### Crear una nueva rama:
```bash
git checkout -b nombre-de-la-rama
```

---

## 🔧 Solución de Problemas

### Error: "failed to push some refs"

**Solución 1**: Primero traer los cambios remotos
```bash
git pull origin main --rebase
git push origin main
```

**Solución 2**: Si estás seguro de sobrescribir (¡CUIDADO!)
```bash
git push origin main --force
```

### Error: "authentication failed"

**Solución**: Usa un Personal Access Token en lugar de tu contraseña:
1. Genera un token en: https://github.com/settings/tokens
2. Usa el token cuando Git te pida la contraseña

### Error: "repository not found"

**Solución**: Verifica que la URL del repositorio sea correcta:
```bash
git remote -v
```

Si está mal, cámbiala:
```bash
git remote set-url origin https://github.com/TU_USUARIO/intellectus-litera.git
```

---

## 📦 Archivo .gitignore

Tu proyecto ya tiene un `.gitignore` configurado que ignora:
- `node_modules/` (dependencias)
- `dist/` (archivos compilados)
- `.env` (variables de entorno)
- Archivos del sistema

Esto es correcto y no debes cambiar nada.

---

## 🌟 Buenas Prácticas

### Mensajes de Commit:
```bash
# Formato recomendado: tipo: descripción
git commit -m "feat: agregar nueva funcionalidad"
git commit -m "fix: corregir bug en login"
git commit -m "docs: actualizar README"
git commit -m "style: mejorar diseño de botones"
git commit -m "refactor: reorganizar código"
```

### Tipos comunes:
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bugs
- `docs`: Cambios en documentación
- `style`: Cambios de formato/estilo
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

---

## 🚀 Próximos Pasos

Después de subir tu código a GitHub, puedes:

1. **Desplegar tu aplicación**: Vercel, Netlify, o GitHub Pages
2. **Compartir el repositorio**: Invitar colaboradores
3. **Proteger tu rama main**: Configurar reglas de protección
4. **Agregar un README atractivo**: Con badges, screenshots, etc.

---

## 📚 Recursos Adicionales

- 📖 Documentación de Git: https://git-scm.com/doc
- 🎓 GitHub Docs: https://docs.github.com
- 💡 GitHub Skills: https://skills.github.com

---

## ✅ Checklist Final

- [ ] Repositorio creado en GitHub
- [ ] Origen remoto configurado
- [ ] Código subido con `git push`
- [ ] Verificado que todo está en GitHub
- [ ] Personal Access Token guardado (si es necesario)
- [ ] `.gitignore` configurado correctamente

¡Tu proyecto ahora está en GitHub! 🎉

