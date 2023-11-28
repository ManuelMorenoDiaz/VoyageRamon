const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"]
    }
});
const mongoose = require('mongoose');
require('dotenv').config();

io.on('connection', (socket) => {
    console.log('a user connected', {id: socket.id});
  
    socket.on('send message', (msg) => {
      io.emit('receive message', { text: msg.text, time: msg.time, id: socket.id });
    });
  
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});

async function iniciar(){
    const port = process.env.PORT || 3000;

    server.listen(port, () => console.log('Servidor funcionando en el puerto', port));

    mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Conectado a la Base de Datos en MongoDB Atlas')).catch((error) => console.error(error));    
}

iniciar();