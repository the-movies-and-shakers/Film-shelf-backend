const mysql =require ("mysql");

function getDatabaseConnection() {
    return mysql.createConnection({
        host: process.env.RDS_HOST,
        user: process.env.RDS_USER,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DATABASE
    });
}

function getFilms() {
    const connection = getDatabaseConnection();
    return new Promise(function(resolve, reject) {
        connection.query("SELECT * FROM filmshelf", function(error, results, fields) {
            if (error) {
                connection.destroy();
                return reject(error);
            } 
            else {
                connection.end(function() { 
                return resolve(results);
       
                });
            }
        });
    });
}

function deleteFilm() {
    const connection = getDatabaseConnection();
    return new Promise(function(resolve, reject) {
        connection.query('DELETE FROM Tasks WHERE filmId = ?',[filmId], function(error, results, fields) {
            if (error) {
                connection.destroy();
                return reject(error);
            } 
            else {
                connection.end(function() { 
                return resolve(results);
       
                });
            }
        });
    });
}


module.exports = {
    getFilms,
    deleteFilm
}
