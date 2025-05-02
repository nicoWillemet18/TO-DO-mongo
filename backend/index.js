const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const sprintRoutes = require('./routes/sprintRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/sprints', sprintRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(PORT, () => console.log(`✅ Servidor escuchando en puerto ${PORT}`));
  })
  .catch(err => console.error('❌ Error conectando a MongoDB', err));