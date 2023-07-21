const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Configurar dotenv

const app = express();
const PORT = process.env.PORT || 3000; // Usar el valor del puerto desde las variables de entorno o 3000 por defecto
const HOST = process.env.HOST || 'localhost'; // Usar el valor del host desde las variables de entorno o 'localhost' por defecto

// Endpoint para obtener todos los posts
app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.API_BASE_URL}/posts`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los posts.' });
  }
});

// Endpoint para obtener un post específico por ID
app.get('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${process.env.API_BASE_URL}/posts/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el post.' });
  }
});

// Endpoint para obtener todos los comentarios de un post específico
app.get('/posts/:id/comments', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${process.env.API_BASE_URL}/posts/${id}/comments`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los comentarios.' });
  }
});

// Iniciar el servidor
app.listen(PORT, HOST, () => {
  console.log(`Servidor en funcionamiento en http://${HOST}:${PORT}`);
});