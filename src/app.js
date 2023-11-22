const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: `http://localhost:5173`,
    credentials: true
}));

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());


//ROUTES
app.use("/routes", require('./routes/auth.routes'));
app.use("/routes", require('./routes/users.routes'));
app.use("/routes", require('./routes/posts.routes'));
app.use("/routes", require('./routes/messages.routes'));
app.use("/routes", require('./routes/categories.routes'));
app.use("/routes", require('./routes/places.routes'));
app.use("/routes", require('./routes/hotels.routes'));
app.use("/routes", require('./routes/friends.routes'));
app.use("/routes", require('./routes/groups_messages.routes'));
app.use("/routes", require('./routes/images_hotels.routes'));
app.use("/routes", require('./routes/images_places.routes'));
app.use("/routes", require('./routes/images.routes'));
app.use("/routes", require('./routes/users_posts.routes'));


app.use((req, res) => {
    res.status(404).end('404 not found');
});

module.exports = app;