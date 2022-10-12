const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const PermisionRouter = require('./Permission/app');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended : true
    })
)

const mongodb = require('../module/MongodbConnect');


app.use('/permision', PermisionRouter)
app.get('/', (req, res) => res.send('Hello World!'))


module.exports = app