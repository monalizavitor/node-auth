const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    dialect: 'mysql',
    password: 'hollowdrum',
    database: 'node-auth'
})


module.exports = connection