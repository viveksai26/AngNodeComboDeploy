
// var mysql = require('mysql');

// module.exports.buildStatus = (res, status, data) => {
//     res.status(status).send(data)
//   }

//  var config1 = {
//   connectionLimit : 10,
//     host     : process.env.RDS_HOSTNAME || 'localhost',
//   user     : process.env.RDS_USERNAME || 'root',
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT || 3306,
//   database: 'discuss',
//   debug: false,
//  }
//  config = {
   
//   connectionLimit : 10,
//   host: 'localhost',
//   user: 'root',
//   database: 'discuss',
//   debug: false,
// };

// const pool = new mysql.createPool(config1)

//   module.exports.buildError = (status, error) => {
//     const err = new Error(error)
//     err.status = status
//     return err
//   }


//   module.exports.HTTPCodes = {
//     BAD_REQUEST: 400,
//     SUCCESS: 200,
//     UNAUTHORIZED: 401,
//     DUPLICATE: 409,
//     NOT_FOUND: 404,
//     INTERNAL_SERVER_ERROR: 500
//   }

//   module.exports.connection = () => {
//     return pool
//   }