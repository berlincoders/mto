const express = require('express');
const path = require('path');

const app = express();

// Puerto de Heroku o 4200 en local
const PORT = process.env.PORT || 4200;

// ⚠️ Cambia "mto" por el nombre REAL de la carpeta dentro de dist
const DIST_FOLDER = path.join(__dirname, 'dist/mto');

// Servir archivos estáticos de Angular
app.use(express.static(DIST_FOLDER));

// Catch-all: todas las rutas van a index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_FOLDER, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
