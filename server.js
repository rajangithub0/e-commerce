import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';


//config env
dotenv.config()

//database config

connectDB()

//rest object 
const app = express();

//middleware
app.use(express.json())
app.use(morgan('dev'))

//rest api
app.get('/', (req, res) => {
    res.send({
        massage: "<h1>welcome to e-commerce website</h1>"
    })
})

//port

const PORT = process.env.PORT;

//run the appplication

app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})