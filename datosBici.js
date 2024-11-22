
const fs = require('fs'); 
const path = require('path');

const filePath = path.join(__dirname, 'bicicletas.json');

function obtenerBicicletas() {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data); 
    } catch (error) {
        console.error('Error al leer el archivo bicicletas.json:', error);
        return [];
    }
}

module.exports = obtenerBicicletas;
