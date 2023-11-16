
**README - Kassya Management**


- VERCEL: https://kassya-management-frontend-p502ht421-afmarquinho.vercel.app/
- NETLIFY: https://fanciful-sunshine-ce912f.netlify.app/


## Descripción Técnica:

### Tecnologías Utilizadas:

- **Frontend:**
  - **React JS:** Biblioteca para construir interfaces de usuario interactivas y eficientes.
  - **Redux:** Para la gestión del estado de la aplicación, garantizando un flujo de datos coherente y predecible.

- **Backend:**
  - **Node JS:** Entorno de ejecución del lado del servidor para la construcción de aplicaciones escalables.
  - **Express:** Marco de aplicación web para Node JS, optimizado para construir APIs robustas y eficientes.

- **Base de Datos:**
  - **MongoDB:** Base de datos NoSQL altamente escalable y flexible.
  - **Mongoose:** Herramienta de modelado de datos para MongoDB, facilitando la interacción con la base de datos.

- **Librerías y Frameworks Adicionales:**
  - **Axios:** Cliente HTTP para realizar solicitudes desde el frontend al backend de manera eficiente.
  - **Node Mailer:** Módulo para el envío de correos electrónicos, integrado para la comunicación con proveedores y notificaciones.
  - **Multer:** Middleware para la manipulación de archivos en las solicitudes HTTP.
  - **CORS (Cross-Origin Resource Sharing):** Habilita la comunicación entre dominios, esencial para la integración en entornos distribuidos.
  - **JWT (JSON Web Tokens):** Implementado para asegurar la autenticación segura y autorización controlada.

### Instrucciones de Instalación y Configuración:

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/afmarquinho/KassyaManagement-Frontend.git
   cd kassya-management
   ```

2. **Instalar Dependencias:**
   ```bash
   npm install
   ```

3. **Configuración del Backend:**
   - Crear un archivo `.env` en la carpeta `backend` con la configuración adecuada, incluyendo detalles de la base de datos y claves JWT.

4. **Configuración del Frontend:**
   - En la carpeta `frontend`, configurar el archivo de entorno `.env` según sea necesario, especialmente si hay cambios en la API backend.

5. **Ejecutar la Aplicación:**
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd frontend
     npm run build
     ```

### Características Destacadas:

- **Seguridad Avanzada:**
  - Implementación de JWT para garantizar una autenticación segura y autorización controlada.

- **Escalabilidad:**
  - Arquitectura Node JS y MongoDB altamente escalables para adaptarse a las necesidades de crecimiento.

- **Automatización:**
  - Integración de Node Mailer y otras funcionalidades automatizadas para agilizar procesos de comunicación y notificación.

- **Análisis en Tiempo Real:**
  - Utilización de informes detallados y análisis en tiempo real para tomar decisiones informadas y optimizar la gestión logística.

Este repositorio contiene el código fuente completo de Kassya Management FrontEnd, una aplicación diseñada para transformar la gestión logística. ¡Explora el potencial de la eficiencia logística avanzada hoy!




- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
