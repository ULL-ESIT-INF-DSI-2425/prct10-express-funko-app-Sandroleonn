import { readFile } from 'fs';

export const loadNotes = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    readFile('notes.json', 'utf-8', (error, data) => {
      if (error) {
        reject('No se pudieron cargar las notas');
      } else {
        try {
          const notes = JSON.parse(data);
          resolve(notes);
        } catch (parseError) {
          reject('Error al parsear el archivo de notas');
        }
      }
    });
  });
};

export const readNote = (title: string): Promise<any | undefined> => {
  return loadNotes()
    .then(notes => notes.find(note => note.title === title))
    .catch(error => {
      console.error('Error leyendo la nota:', error);
      return undefined;
    });
};
