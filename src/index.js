const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    methods: ["GET", "POST"]
  }
});
const mongoose = require('mongoose');
require('dotenv').config();

// Objeto para almacenar las salas
const postRooms = {};

io.on('connection', (socket) => {
  const userId = socket.handshake.query.id;
  const roomId = socket.handshake.query.room;

  // Almacena información sobre la sala si no existe
  if (!postRooms[roomId]) {
    postRooms[roomId] = {
      users: [],
      // Otros datos que desees almacenar para la sala
    };
  }

  // Asignar el socket a la sala correspondiente al ID del post
  socket.join(roomId);

  // Agrega al usuario a la lista de usuarios en la sala
  postRooms[roomId].users.push({ id: userId, name: socket.handshake.query.name });

  console.log('a user connected', { id: userId, name: socket.handshake.query.name, room: roomId });

  socket.on('send message', (msg) => {
    // Enviar el mensaje solo a los usuarios en la sala correspondiente al post
    io.to(roomId).emit('receive message', { text: msg.text, time: msg.time, id: msg.id, name: socket.handshake.query.name });
  });

  socket.on('disconnect', () => {
    // Remover al usuario de la lista de usuarios en la sala al desconectarse
    postRooms[roomId].users = postRooms[roomId].users.filter(user => user.id !== userId);
    console.log('user disconnected');
  });
});

async function iniciar() {
  const port = process.env.PORT || 3000;

  server.listen(port, () => console.log('Servidor funcionando en el puerto', port));

  mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Conectado a la Base de Datos en MongoDB Atlas')).catch((error) => console.error(error));
}

iniciar();
