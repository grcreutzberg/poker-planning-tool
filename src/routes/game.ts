import express from 'express';

export const gameRoutes = express.Router();

gameRoutes.post('/api/pokerplanningtool/creategame/', (request, response) => {

    return response.status(201).send('OK');
});

gameRoutes.post('/api/pokerplanningtool/joingame/', (request, response) => {

    return response.status(201).send('OK');
});

gameRoutes.post('/api/pokerplanningtool/:id/remove/:player/', (request, response) => {

    return response.status(201).send('OK');
});

gameRoutes.post('/api/pokerplanningtool/:id/estimate/', (request, response) => {

    return response.status(201).send('OK');
});

gameRoutes.get('/api/pokerplanningtool/:id/', (request, response) => {

    return response.status(201).send('OK');
});

gameRoutes.post('/api/pokerplanningtool/:id/newtask/', (request, response) => {

    return response.status(201).send('OK');
});

gameRoutes.post('/api/pokerplanningtool/:id/exit/', (request, response) => {

    return response.status(201).send('OK');
});