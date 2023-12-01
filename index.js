const express = require('express');
const morgan = require('morgan');
const moviesRouter = require('./routers/movies.router');
const usersRouter = require('./routers/users.router');

require('./utils/mongoConnection');
const app = express();
const port = 3003;

app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send("Bienvenido a la API de Películas")
});

app.use(express.json({limit: '50mb'}));

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
   console.log("Servidor iniciado en http://localhost:"+port); 
});