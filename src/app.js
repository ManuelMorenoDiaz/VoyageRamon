const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: false}));

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());


//ROUTES
app.use(require('./routes/auth.routes'));
app.use(require('./routes/users.routes'));
app.use(require('./routes/posts.routes'));
app.use(require('./routes/messages.routes'));
app.use(require('./routes/categories.routes'));
app.use(require('./routes/places.routes'));
app.use(require('./routes/hotels.routes'));


app.use((req, res) => {
    res.status(404).end('404 not found');
});
  
module.exports = app;