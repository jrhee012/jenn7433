import express from 'express';

const server = express();

server.get('/', (req, res) => res.status(200).send('ok'));
server.get('/jenn', (req, res) => res.status(200).send('i love you, jenn <3'));

export default server;
