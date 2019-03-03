const serverless = require('serverless-http');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const databaseService = require('./databaseservice');




app.get('/films', function (request, response) {

  databaseService.getFilms()
    .then(function (results) {
      response.json(results);

    })

    .catch(function (error) {

      response.status(500);
      response.json(error);
    });

});

app.delete('/films/:filmId', function (request, response) {

  const filmToBeDeleted = request.params.filmId;
  
  databaseService.deleteFilm(filmToBeDeleted)

  .then(function (results) {
    response.json(results);

  })

  .catch(function (error) {

    response.status(500);
    response.json(error);
  });
});




module.exports.handler = serverless(app);
