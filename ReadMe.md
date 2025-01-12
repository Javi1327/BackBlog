# Proyecto Integrador de Programación Web - Backend Aplicación Web 

Esto es el backend de una aplicación web desarrollada como parte del trabajo integrador de la diplomatura de desarrollo web. Fue desarrollado con Node.js y Express. Proporciona las funcionalidades necesarias para la autenticación de usuarios, gestión de datos y conexión con la base de datos MongoDB.

---

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express**: Framework para construir APIs RESTful.
- **MongoDB**: Base de datos NoSQL para almacenar información del blog.
- **Mongoose**: ODM para interactuar con MongoDB.
- **JWT (jsonwebtoken)**: Para la autenticación basada en tokens.
- **bcrypt**: Para la encriptación de contraseñas.
- **dotenv**: Para la gestión de variables de entorno.
- **CORS**: Para permitir peticiones desde el frontend.

--- 

## Instrucciones de Uso
### Instalacion 

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Javi1327/BackBlog.git
   ```
2. Ve al directorio del proyecto:
   ```bash
   cd backblog
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables (ajústalas según tu configuración):
   ```env
   PORT=5000
   MONGO_URI=<cadena-de-conexion-a-mongodb>
   JWT_SECRET=<clave-secreta-para-jwt>
   ```

## Instrucciones de Uso

### Ejecucion del proyecto en modo desarrollo

Usa `nodemon` para reiniciar el servidor automáticamente cuando se detecten cambios:
```bash
npm run dev
```

### En modo producción

Ejecuta el servidor con Node.js:
```bash
npm start
```

---  

## **Autores**
    Javier Puma Reyes [https://github.com/Javi1327]
    Ivan Rodriguez [https://github.com/Lynx-oss]
    Agustin Romero [https://github.com/AguusRomero]



