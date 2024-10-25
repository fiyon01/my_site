const express = require('express')
const mysql= require ('mysql2')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express();

//middlewares
app.use(cors())
app.use(express.json())

//run app
app.listen(8080,()=>{
    console.log('listening on port on port 8080')
})