import { findSpell } from './spell.js'; // Ajusta la ruta según donde tengas la función

// Prueba 1: Buscar hechizo por nombre
findSpell({ Name: "Levitation" })
    .then(spells => {
        console.log('Hechizos encontrados (por nombre):');
        console.log(spells);
    })
    .catch(error => {
        console.error('Error en prueba por nombre:');
        console.error(error);
    });

