const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql2')

PORT = 9000


const myDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Missycat23!',
    database: 'avengers'
})

app.use(express())//.json??
app.use(morgan('dev'))

myDb.connect((err)=> {
    if (err){
        throw err;
    }
    console.log("db connected")
}) 


app.get('/avengers', (req, res) => {
    let myQuery = "SELECT * FROM avengers";
    myDb.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
})

app.post('/avengers', (req, res) => {
    let myQuery = `INSERT INTO avengers (name, current, appearances) value (?, ?, ?)`;
    myDb.query(myQuery, [req.body.name, req.body.current, req.body.appearances], (err, result) => {
        if (err){
            throw err;
        }
        res.send(result)
    })
})

app.use((err, req, res, next) => {
    //if(err.name === 'Unauthorized error'){
        //res.status(err.status)
    //}
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});