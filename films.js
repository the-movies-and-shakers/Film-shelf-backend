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

app.post("/films", function(request, response) {
  
  const filmTitle = request.body.filmTitle;
  databaseService.saveFilm(filmTitle).then(function(results){
    response.json(results);
  })
  .catch(function(error) {
    response.status(500);
    response.json(error);
  });
})

//I dont think we need this as we dont need to mark the film as being completed: -

// app.put('/films/:filmId', function (request, response) {

//   const filmToComplete = request.params.filmId;

//   databaseService.completeFilm(filmToComplete)
  
//   .then(function(results) {

//     response.json(results);

//   })

//   .catch(function(error) {

//     response.status(500);
//     response.json(error);

//   });

// });

// app.put('/films/editfilm/:editedFilmTitle', function (request, response) {

//   const editedFilm = request.params.editedFilmTitle;

//   const identifier = request.params.filmId;

//   databaseService.editFilm(editedFilm, identifier)
  
//   .then(function(results) {

//     response.json(results);

//   })

//   .catch(function(error) {

//     response.status(500);
//     response.json(error);

//   });

// });



module.exports.handler = serverless(app);
