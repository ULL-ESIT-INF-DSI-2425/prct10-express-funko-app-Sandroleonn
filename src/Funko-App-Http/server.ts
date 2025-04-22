import express, { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';
import { FunkoManager } from './FunkoManager.js';

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Helper para manejar errores
const handleError = (res: Response, error: unknown, status = 500) => {
  const message = error instanceof Error ? error.message : 'Error desconocido';
  res.status(status).json({ success: false, error: message });
};

// Ruta para listar Funkos
app.get('/funkos', async (req: Request, res: Response) => {
  try {
    const { username } = req.query;
    if (!username) throw new Error('Se requiere el parámetro username');

    const manager = new FunkoManager(username as string);
    const files = (await fs.readdir(manager.getUserDir())).filter(f => f.endsWith('.json'));
    
    const funkos = await Promise.all(
      files.map(async file => {
        const data = await fs.readFile(path.join(manager.getUserDir(), file), 'utf-8');
        return JSON.parse(data);
      })
    );

    res.json({ success: true, funkos });
  } catch (error) {
    handleError(res, error, 400);
  }
});

// Ruta para añadir Funko
app.post('/funkos', async (req: Request, res: Response) => {
  try {
    const { username, ...funkoData } = req.body;
    if (!username) throw new Error('Se requiere el campo username');
    if (!funkoData.id) throw new Error('Se requiere un ID para el Funko');

    const manager = new FunkoManager(username);
    const funkoPath = manager.getFunkoPath(funkoData.id);

    try {
      await fs.access(funkoPath);
      throw new Error('Ya existe un Funko con este ID');
    } catch {
      await fs.mkdir(manager.getUserDir(), { recursive: true });
      await fs.writeFile(funkoPath, JSON.stringify(funkoData, null, 2));
      res.status(201).json({ success: true, message: 'Funko añadido', funko: funkoData });
    }
  } catch (error) {
    handleError(res, error, 400);
  }
});

// Ruta para operaciones con un Funko específico
app.route('/funkos/:id')
  .get(async (req: Request, res: Response) => {
    try {
      const { username } = req.query;
      const { id } = req.params;
      if (!username) throw new Error('Se requiere el parámetro username');
      if (!id) throw new Error('Se requiere el parámetro id');

      const manager = new FunkoManager(username as string);
      const funkoPath = manager.getFunkoPath(Number(id));
      const data = await fs.readFile(funkoPath, 'utf-8');
      
      res.json({ success: true, funko: JSON.parse(data) });
    } catch (error) {
      handleError(res, error, 404);
    }
  })
  .patch(async (req: Request, res: Response) => {
    try {
      const { username, ...updateData } = req.body;
      const { id } = req.params;
      if (!username) throw new Error('Se requiere el campo username');
      if (!id) throw new Error('Se requiere el parámetro id');

      const manager = new FunkoManager(username);
      const funkoPath = manager.getFunkoPath(Number(id));
      const existingData = await fs.readFile(funkoPath, 'utf-8');
      const updatedFunko = { ...JSON.parse(existingData), ...updateData };

      await fs.writeFile(funkoPath, JSON.stringify(updatedFunko, null, 2));
      res.json({ success: true, message: 'Funko actualizado', funko: updatedFunko });
    } catch (error) {
      handleError(res, error, 404);
    }
  })
  .delete(async (req: Request, res: Response) => {
    try {
      const { username } = req.query;
      const { id } = req.params;
      if (!username) throw new Error('Se requiere el parámetro username');
      if (!id) throw new Error('Se requiere el parámetro id');

      const manager = new FunkoManager(username as string);
      const funkoPath = manager.getFunkoPath(Number(id));
      await fs.unlink(funkoPath);
      
      res.json({ success: true, message: 'Funko eliminado' });
    } catch (error) {
      handleError(res, error, 404);
    }
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Funko escuchando en http://localhost:${port}`);
});