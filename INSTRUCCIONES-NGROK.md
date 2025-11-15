# 🚀 Instrucciones para Instalar ngrok en Windows

## Método 1: Descarga Manual (RECOMENDADO)

### Paso 1: Descargar ngrok
1. Ve a: https://ngrok.com/download
2. Haz clic en "Download for Windows"
3. Se descargará un archivo ZIP: `ngrok-v3-stable-windows-amd64.zip`

### Paso 2: Extraer ngrok
1. Abre la carpeta de Descargas
2. Haz clic derecho en el archivo ZIP → "Extraer todo..."
3. Extrae en una carpeta accesible (por ejemplo: `C:\ngrok\`)

### Paso 3: Agregar ngrok al PATH (Opcional pero recomendado)

#### Opción A: Usando PowerShell (Más rápido)
```powershell
# 1. Mueve ngrok.exe a una carpeta en tu PATH
Move-Item -Path "C:\ruta\donde\descargaste\ngrok.exe" -Destination "C:\Windows\System32\"
```

#### Opción B: Manualmente
1. Presiona `Win + X` → "Sistema"
2. Haz clic en "Configuración avanzada del sistema"
3. Haz clic en "Variables de entorno"
4. En "Variables del sistema", busca "Path" → "Editar"
5. Haz clic en "Nuevo"
6. Agrega la ruta donde extrajiste ngrok: `C:\ngrok\`
7. Haz clic en "Aceptar" en todas las ventanas

### Paso 4: Verificar la instalación
Abre una nueva terminal PowerShell y ejecuta:
```powershell
ngrok version
```

Deberías ver algo como: `ngrok version 3.22.1`

---

## Método 2: Instalación con npm (Si tienes Node.js)

```bash
npm install -g ngrok
```

O usando npx (sin instalación global):
```bash
npx ngrok http 5173
```

---

## Método 3: Winget (Windows Package Manager)

Si tienes Windows 11 o Windows 10 actualizado:

```powershell
winget install --id ngrok.ngrok
```

---

## 🔑 Configurar tu Token de Autenticación

### Paso 1: Crear una cuenta en ngrok
1. Ve a: https://dashboard.ngrok.com/signup
2. Regístrate con tu email o Google/GitHub

### Paso 2: Obtener tu authtoken
1. Ve a: https://dashboard.ngrok.com/get-started/your-authtoken
2. Copia tu token

### Paso 3: Configurar el token
```bash
ngrok config add-authtoken TU_TOKEN_AQUI
```

---

## 🚀 Usar ngrok con tu Proyecto

### Para exponer tu servidor de desarrollo React (puerto 5173):

```bash
ngrok http 5173
```

O con un dominio personalizado (gratis con cuenta):
```bash
ngrok http 5173 --domain=tu-dominio.ngrok-free.app
```

### Salida típica:
```
ngrok                                                                                                    

Session Status                online
Account                       tu-email@ejemplo.com
Version                       3.22.1
Region                        United States (us)
Latency                       45ms
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://abc123.ngrok-free.app -> http://localhost:5173

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

Tu aplicación ahora está disponible en: `https://abc123.ngrok-free.app`

---

## 🎯 Comandos Útiles de ngrok

### Exponer un puerto específico:
```bash
ngrok http 3000          # Para aplicaciones Node/Express
ngrok http 5173          # Para Vite (React/Vue)
ngrok http 8080          # Para otros servidores
```

### Con autenticación básica:
```bash
ngrok http 5173 --basic-auth="usuario:contraseña"
```

### Ver conexiones activas:
Abre en tu navegador: http://localhost:4040

### Ver logs en tiempo real:
```bash
ngrok http 5173 --log=stdout
```

### Usar un dominio personalizado (requiere plan pago):
```bash
ngrok http 5173 --hostname=miapp.ngrok.io
```

---

## 📱 Probar tu Aplicación desde tu Celular

1. Ejecuta: `ngrok http 5173`
2. Copia la URL generada (por ejemplo: `https://abc123.ngrok-free.app`)
3. Abre esa URL en el navegador de tu celular
4. ¡Listo! Verás tu aplicación corriendo

---

## ⚠️ Notas Importantes

### Plan Gratis de ngrok incluye:
- ✅ 1 proceso ngrok en línea
- ✅ 4 túneles/ngrok proceso
- ✅ 40 conexiones/minuto
- ✅ HTTPS
- ✅ TCP

### Limitaciones del plan gratis:
- ⚠️ URL aleatoria cada vez que inicias ngrok
- ⚠️ Advertencia de seguridad en el navegador (se puede omitir)
- ⚠️ Sin dominios personalizados permanentes

### Para producción:
- ❌ **NO uses ngrok para producción**
- ✅ Usa servicios como Vercel, Netlify, o AWS para despliegues reales

---

## 🔧 Solución de Problemas

### Error: "command not found: ngrok"
**Solución**: Asegúrate de haber agregado ngrok al PATH o ejecuta con ruta completa:
```bash
C:\ngrok\ngrok.exe http 5173
```

### Error: "authentication failed"
**Solución**: Configura tu authtoken:
```bash
ngrok config add-authtoken TU_TOKEN_AQUI
```

### Error: "tunnel session failed"
**Solución**: Verifica que el puerto esté correcto y que tu servidor esté corriendo:
```bash
# Primero inicia tu servidor:
npm run dev

# Luego en otra terminal:
ngrok http 5173
```

### La página muestra "ngrok warning"
**Solución**: Es normal con el plan gratuito. Haz clic en "Visit Site" para continuar.

---

## 📚 Recursos Adicionales

- 📖 Documentación oficial: https://ngrok.com/docs
- 🎓 Guía de inicio: https://dashboard.ngrok.com/get-started
- 💬 Soporte: https://ngrok.com/support

---

## 🎉 ¡Listo!

Ahora puedes compartir tu aplicación en desarrollo con cualquier persona en el mundo usando ngrok.

**Ejemplo completo**:
```bash
# 1. Inicia tu servidor de desarrollo
npm run dev

# 2. En otra terminal, ejecuta ngrok
ngrok http 5173

# 3. Comparte la URL generada
# https://abc123.ngrok-free.app
```

