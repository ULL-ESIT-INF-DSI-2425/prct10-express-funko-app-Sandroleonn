import express from 'express';
import { readNote } from './read_load.js';

// Exportamos la app para poder usarla en los tests si es necesario
export const app = express();

app.get('/notes', (req, res) => {
  const title = req.query.title as string;
  if (!title) {
    res.status(400).json({ error: 'Parámetro "title" obligatorio' });
    return;
  }

  readNote(title)
    .then(note => {
      if (note) {
        res.json(note);
      } else {
        res.status(404).json({ error: 'Nota no encontrada' });
      }
    })
    .catch(() => {
      res.status(500).json({ error: 'Error del servidor al leer la nota' });
    });
});

// Solo iniciamos el servidor si no estamos en modo test
if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('Servidor Express activo en el puerto 3000');
  });
}