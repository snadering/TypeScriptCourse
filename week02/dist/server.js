import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import axios from 'axios';
//For env File 
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const dbPort = 3000;
// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.send('Welcome to Express & TypeScript Server');
});
//Get all
app.get('/persons', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:${dbPort}/persons`);
        if (response.data) {
            res.status(200).json(response.data);
        }
    }
    catch (error) {
        console.error(error);
        res.status(404).send('Person not found');
    }
});
//Get by id
app.get('/persons/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`http://localhost:${dbPort}/persons/${id}`);
        if (response.data) {
            res.status(200).json(response.data);
        }
    }
    catch (error) {
        console.error(error);
        res.status(404).send('Person not found');
    }
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
