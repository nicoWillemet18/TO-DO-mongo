const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  fechaLimite: String,
  estado: String
});

const sprintSchema = new mongoose.Schema({
  nombre: String,
  tareas: [tareaSchema]
});

module.exports = mongoose.model('Sprint', sprintSchema);
