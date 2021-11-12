var mysql = require('mysql')
const config = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'pet_project'
}

class Database {
  constructor( config ) {
        this.connection = mysql.createConnection( config );
      }
      query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
          this.connection.query( sql, args, ( err, rows ) => {
            if ( err )
            return reject( err );
            resolve( rows );
          } );
        } );
      }
      close() {
        return new Promise( ( resolve, reject ) => {
          this.connection.end( err => {
            if ( err )
            return reject( err );
            resolve();
          } );
        } );
      }
    }
    
       
module.exports = new Database(config);



// database.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
//     console.log('connected as id ' + database.threadId);
//   });

// connection.query('SELECT * from candidate', function (err, rows, fields) {
  //     if (err) throw err
  
//     console.log('The solution is: ', rows)
// }
// connection.end()


