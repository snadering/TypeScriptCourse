import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import log4js from 'log4js';
import axios, { AxiosResponse } from 'axios'

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8080;
const dbPort = 3000
// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

//Get all
app.get('/persons', async (req: Request, res: Response) => {
    try{

        const response: AxiosResponse<Person> = await axios.get(`http://localhost:${dbPort}/persons`)
        if(response.data) {
            res.status(200).json(response.data)
        }
    } catch (error: unknown) {
        console.error(error)
        res.status(404).send('Person not found')
    }
});

//Get by id
app.get('/persons/:id', async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const response: AxiosResponse<Person> = await axios.get(`http://localhost:${dbPort}/persons/${id}`)
        if(response.data) {
            res.status(200).json(response.data)
        }
    } catch (error: unknown) {
        console.error(error)
        res.status(404).send('Person not found')
    }
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

type Person = {
    id: number,
    name: string,
    age: number
}