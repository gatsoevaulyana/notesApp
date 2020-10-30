import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils.js';
import {serverPort} from '../etc/config';
import cors from 'cors';

db.setUpConnection();

const app = express();

/* app.use(bodyParser.json());

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});
*/

app.use( bodyParser.json() );
app.use(cors({origin:'*'}));

app.use( express.static(__dirname + "/../public") );

app.get('/notes', async (req, res) => {
    try {
        const data = await db.listNotes();

        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
});

app.post('/notes', async (req, res) => {
    try {
        const { body: data } = req;
        const result = await db.createNote(data);

        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

app.delete('/notes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.deleteNote(id);

        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

app.listen(serverPort, () => {
    console.log(`Server started on port ${serverPort}`);
});