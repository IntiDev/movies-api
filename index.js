const express = require('express');
const app = express();

const { config } = require('./config/index');

// app.get('/', (req, res)=> {
//     res.send('Hello human')
// });

// app.get('/json', (req, res)=> {
//     res.json({ hello: 'human' });
// });

const moviesApi = require('./routes/movies.js');

moviesApi(app);

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
});